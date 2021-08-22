export const emailFormat = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email không hợp lệ.'
    : undefined

export const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Vui lòng nhập thông tin'

const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Giá trị nhập có tối đa ${max} kí tự`
    : undefined

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

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
}

export const normalizePhone = (value) => {
  if (!value) {
    return value
  }
  return value.replace(/[^\d]/g, '')
}

export const maxLength10 = maxLength(10)
export const length10 = length(10)
