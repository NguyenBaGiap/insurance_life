const BASE_URL = process.env.REACT_APP_API_ENDPOINT

export function CustomException(message) {
  this.message = message
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
      Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
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
    throw result
  }

  return result
}

export const simplePostRequest = async (url, data) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
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
    throw result
  }

  return result
}