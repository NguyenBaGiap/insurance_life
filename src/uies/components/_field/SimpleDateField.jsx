import React from 'react'
import DatePicker from 'react-widgets/DatePicker'
import calendar from 'static/img/calendar.icon.svg'
import 'static/styles/_date_field.scss'

export default function SimpleDateField({
  input: { onChange, value },
  showTime,
  label,
  required,
  meta: { touched, error, warning },
}) {
  return (
    <div className="form-group date-picker-custom">
      <label htmlFor="labelFormInput">
        <span>{label}</span>
        {required && <span className="text-danger ml-2">*</span>}
      </label>
      <DatePicker
        onChange={onChange}
        format="DD/MMM/YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
        valueDisplayFormat={{ dateStyle: 'medium' }}
        selectIcon={<img src={calendar} alt="time-picker" />}
      />
      {touched &&
        ((error && <i className="text-danger font-weight-bold">{error}</i>) ||
          (warning && <i className="text-warning">{warning}</i>))}
    </div>
  )
}
