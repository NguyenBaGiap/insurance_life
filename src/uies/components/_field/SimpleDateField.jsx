import React from 'react'
import { DateTimePicker } from 'react-widgets'
import calendar from 'static/img/calendar.icon.svg'
import moment from 'moment'
import MomentLocalizer from 'react-widgets-moment'
import classNames from 'classnames'
import 'static/styles/_date_field.scss'

moment.locale('vi')

MomentLocalizer(moment)

export default function SimpleDateField(props) {
  const {
    input,
    label,
    required,
    meta: { error, warning },
  } = props
  const [isFocused, setIsFocused] = React.useState(false)
  return (
    <div className="form-group date-picker-custom">
      <label htmlFor="labelFormInput">
        <span>{label}</span>
        {required && <span className="text-danger ml-2">*</span>}
      </label>
      <DateTimePicker
        {...props}
        onFocus={() => setIsFocused(true)}
        onChange={(value) => props.input.onChange(value)}
        placeholder="DD/MM/YYYY"
        format="DD/MM/YYYY"
        time={false}
        value={!input.value ? null : new Date(input.value)}
        selectIcon={<img src={calendar} alt="time-picker" />}
        className={classNames(
          isFocused && error && 'error-date-picker',
          isFocused && !error && !warning && 'success-date-picker'
        )}
      />
      {isFocused &&
        ((error && <i className="text-danger font-weight-bold">{error}</i>) ||
          (warning && <i className="text-warning">{warning}</i>))}
    </div>
  )
}
