import React from 'react'
import Select from 'react-select'
import 'static/styles/_select_field.scss'
import classNames from 'classnames'

export default function SimpleSelectField(props) {
  const {
    name,
    input,
    selectableValues,
    placeholder = null,
    label,
    required,
    meta: { touched, error, warning },
  } = props
  return (
    <div className="form-group">
      <label htmlFor="labelFormInput">
        {label}
        {required && <span className="text-danger ml-2">*</span>}
      </label>
      <Select
        name={name}
        options={selectableValues}
        placeholder={placeholder}
        value={input.value}
        onChange={(value) => input.onChange(value)}
        onBlur={() => input.onBlur()}
        {...input}
        className={classNames(
          'react-select-container',
          touched && error && 'error-select',
          touched && !error && !warning && 'success-select'
        )}
        classNamePrefix="react-select"
      />
      {touched &&
        ((error && <i className="text-danger">{error}</i>) ||
          (warning && <i className="text-warning">{warning}</i>))}
    </div>
  )
}
