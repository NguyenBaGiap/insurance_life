import React from 'react'
import { NumberPicker } from 'react-widgets'
import simpleNumberLocalizer from 'react-widgets-simple-number'
import 'static/styles/_number_field.scss'

simpleNumberLocalizer()

export default class SimpleNumberField extends React.Component {
  render() {
    const {
      input,
      label,
      required,
      disabled,
      maxLength,
      meta: { touched, error, warning },
    } = this.props
    return (
      <div className="simple-number-filed">
        <label htmlFor="labelFormInput">
          <span>{label}</span>
          {required && <span className="text-danger ml-2">*</span>}
        </label>
        <NumberPicker
          {...this.props}
          disabled={disabled}
          inputProps={{ maxLength: maxLength }}
          onChange={(value) => input.onChange(value)}
        />
        {touched &&
          ((error && <i className="text-danger font-weight-bold">{error}</i>) ||
            (warning && <i className="text-warning">{warning}</i>))}
      </div>
    )
  }
}
