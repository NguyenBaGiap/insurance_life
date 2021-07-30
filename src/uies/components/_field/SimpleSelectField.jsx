import React from 'react'
import Select from 'react-select'
import 'static/styles/_select_field.scss'
import classNames from 'classnames'

export default function SimpleSelectField(props) {
  const {
    label,
    required,
    meta: { touched, error, warning },
  } = props
  return (
    <div className="form-group selected-field-example">
      <label htmlFor="labelFormInput">
        <span>{label}</span>
        {required && <span className="text-danger ml-2">*</span>}
      </label>
      <Select
        {...props}
        placeholder=""
        value={props.input.value}
        onChange={(value) => props.input.onChange(value)}
        onBlur={() => props.input.onBlur(props.input.value)}
        options={props.selectableValues}
        className={classNames(
          'react-select-container',
          touched && error && 'error-select',
          touched && !error && !warning && 'success-select'
        )}
        classNamePrefix="react-select"
      />
      {touched &&
        ((error && <i className="text-danger font-weight-bold">{error}</i>) ||
          (warning && <i className="text-warning">{warning}</i>))}
    </div>
  )
}
