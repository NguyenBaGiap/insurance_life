export const emailFormat = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email không hợp lệ.'
    : undefined

export const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Vui lòng nhập thông tin'

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = (value) =>
  value && isNaN(Number(value)) ? 'Vui lòng nhập giá trị số' : undefined

export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined

export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

export const normalizeDate = (value) => {
  if (!value) {
    return value
  }
  return new Date(value).getTime()
}
