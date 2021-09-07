const BASE_URL =
  process.env.REACT_APP_ENV === 'production'
    ? `${window.location.origin}${process.env.REACT_APP_API_ENDPOINT}`
    : process.env.REACT_APP_API_ENDPOINT

export function CustomException(message) {
  this.message = message
}
export function ExceptionResponse({ data, status, timestamp }) {
  this.data = data.toString() || 'Internal Server Error'
  this.status = status
  this.timestamp = timestamp
}
export const validateCaptcha = () => {
  return new Promise((res) => {
    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute(process.env.REACT_APP_CAPTCHA_SITE_KEY, {
          action: 'post',
        })
        .then(function (captcha) {
          return res(captcha)
        })
        .catch(function (error) {
          console.log('Captcha xảy ra lỗi', error)
        })
    })
  })
}

export const simpleGetRequest = async (url, searchParamStr) => {
  const urlObj = new URL(`${BASE_URL}${url}`)
  if (searchParamStr) {
    urlObj.search = searchParamStr
  }
  const response = await fetch(urlObj.toString(), {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.sessionStorage.getItem('access_token')}`,
    },
  }).then(
    (response) => response,
    () => {
      throw new CustomException(
        'Không thể kết nối đến hệ thống, vui lòng kiểm tra kết nối internet.'
      )
    }
  )
  const result = await response.json()

  if (!response.ok) {
    throw new ExceptionResponse(result)
  }

  return result
}

export const simplePostRequest = async (url, data) => {
  const captcha = await validateCaptcha()
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${window.sessionStorage.getItem('access_token')}`,
    },
    body: JSON.stringify({
      ...data,
      captcha,
    }),
  }).then(
    (response) => response,
    () => {
      throw new CustomException(
        'Không thể kết nối đến hệ thống, vui lòng kiểm tra kết nối internet.'
      )
    }
  )

  const result = await response.json()

  if (!response.ok) {
    throw new ExceptionResponse(result)
  }

  return result
}
