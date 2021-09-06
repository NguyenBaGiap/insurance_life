import React from 'react'
import 'static/styles/_checkbox_field.scss'

export default function SimpleCheckBoxField(props) {
  const { input, label, disabled } = props
  return (
    <div className="form-check-custom" id="form-check-custom">
      <input
        className="form-check-input"
        {...input}
        type="checkbox"
        checked={props.input.value}
        disabled={disabled}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  )
}
