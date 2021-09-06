// import moment from 'moment'

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email không hợp lệ.'
    : undefined

export const pid = (value) =>
  value && !/^(?=(?:.{9}|.{12})$)[0-9]*$/i.test(value)
    ? 'Chứng minh thư không hợp lệ.'
    : undefined

export const mobileNumber = (value) =>
  value && !/^(0[98735][0-9]{8})$/.test(value)
    ? 'Số điện thoại không hợp lệ'
    : undefined

export const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Vui lòng nhập thông tin'

const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Giá trị nhập có tối đa ${max} kí tự`
    : undefined

export const minLength = (min) => (value) =>
  value && value.length < min ? `Giá trị nhập phải từ ${min} kí tự` : undefined

const length = (length) => (value) =>
  value && value.length !== length
    ? `Giá trị phải đủ ${length} kí tự`
    : undefined

export const number = (value) =>
  value && isNaN(Number(value)) ? 'Vui lòng nhập giá trị số' : undefined

export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined

export const normalizeDate = (value) => {
  if (!value) {
    return value
  }
  return new Date(value).getTime()
  //return moment(new Date(value)).format('DD-MM-YYYY')
}

export const normalizeNumber = (value) => {
  if (!value) {
    return value
  }
  return value.replace(/[^\d]/g, '')
}

export const normalizeMoney = (value) => {
  if (!value) {
    return value
  }
  return `${value.replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,')} VNĐ`
}

export const minLength2 = minLength(2)
export const maxLength100 = maxLength(100)
export const maxLength50 = maxLength(50)

export const maxLength10 = maxLength(10)
export const maxLength12 = maxLength(12)
export const length10 = length(10)
