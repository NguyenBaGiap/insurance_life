import React from 'react'
import spinnerField from 'static/img/spinner-field.gif'
import 'static/styles/_input_field.scss'
import classNames from 'classnames'

export default function SimpleTextField({
  input,
  label,
  placeholder,
  type,
  required,
  loading,
  disabled,
  meta: { touched, error, warning },
}) {
  return (
    <div className="form-group">
      <label htmlFor="labelFormInput">
        {label}
        {required && <span className="text-danger ml-2">*</span>}
      </label>
      <input
        className={classNames(
          'form-control',
          touched && error && 'error',
          touched && !error && !warning && 'success'
        )}
        placeholder={placeholder}
        type={type}
        disabled={disabled || loading}
        {...input}
      />
      {loading && <img src={spinnerField} alt="spinner" className="spinner" />}
      {touched &&
        ((error && <i className="text-danger">{error}</i>) ||
          (warning && <i className="text-warning">{warning}</i>))}
    </div>
  )
}
