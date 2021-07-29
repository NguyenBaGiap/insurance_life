import React from 'react'
import DatePicker from 'react-widgets/DatePicker'
import calendar from 'static/img/calendar.icon.svg'
import moment from 'moment'
import MomentLocalizer from 'react-widgets-moment'
import 'static/styles/_date_field.scss'
import Localization from 'react-widgets/Localization'

moment.locale('en')

const localizer = new MomentLocalizer(moment)

export default function SimpleDateField(props) {
  const {
    input,
    label,
    required,
    meta: { touched, error, warning },
  } = props
  return (
    <Localization date={localizer} format="DD/MM/YYYY">
      <div className="form-group date-picker-custom">
        <label htmlFor="labelFormInput">
          <span>{label}</span>
          {required && <span className="text-danger ml-2">*</span>}
        </label>
        <DatePicker
          {...props}
          onChange={(value) => props.input.onChange(value)}
          placeholder="DD/MM/YYYY"
          value={!input.value ? null : new Date(input.value)}
          selectIcon={<img src={calendar} alt="time-picker" />}
        />
        {touched &&
          ((error && <i className="text-danger font-weight-bold">{error}</i>) ||
            (warning && <i className="text-warning">{warning}</i>))}
      </div>
    </Localization>
  )
}
