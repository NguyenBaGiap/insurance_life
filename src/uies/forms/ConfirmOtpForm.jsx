import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import SimpleNumberField from 'uies/components/_field/SimpleNumberField'
import Countdown from 'react-countdown'

const renderItems = ({ fields, meta: { error } }) => {
  const inputFocus = (element) => {
    const els = Array.from(element.target.form.elements).filter((el) => {
      return (
        el.tagName.toLowerCase() !== 'button' &&
        el.getAttribute('type') !== 'button'
      )
    })
    if (element.key === 'Delete' || element.key === 'Backspace') {
      const next = element.target.tabIndex - 2
      if (next > -1) {
        els[next].select()
      }
    } else {
      const next = element.target.tabIndex
      if (next < fields.length) {
        els[next].focus()
        els[next].select()
      }
    }
  }
  return (
    <React.Fragment>
      <div
        className="items"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {fields.map((item, index) => (
          <Field
            key={index}
            name={item}
            component={SimpleNumberField}
            maxLength={1}
            style={{ width: '60px', marginRight: 20 }}
            tabIndex={`${index + 1}`}
            onKeyUp={inputFocus}
          />
        ))}
      </div>

      {error && <div className="text-danger text-center mt-3">{error}</div>}
    </React.Fragment>
  )
}

const renderCountDown = (props) => {
  if (props.completed) {
    return (
      <p className="text-center pt-3" style={{ fontSize: 'medium' }}>
        Mã OTP đã hết hiệu lực, vui lòng bấm gửi lại OTP.
      </p>
    )
  }
  return (
    <p className="text-center pt-3" style={{ fontSize: 'medium' }}>
      Mã OTP sẽ hết hiệu lực trong vòng &nbsp;
      <strong style={{ color: '#00B74F' }}>{props.minutes}</strong> &nbsp;phút
      &nbsp;
      <strong style={{ color: '#00B74F' }}>{props.seconds}</strong> &nbsp;giây
    </p>
  )
}

class ConfirmOtpForm extends React.Component {
  state = {
    now: Date.now(),
  }
  handleRetrySendOTP = async () => {
    await this.props.retrySendOTP()
    this.setState({ now: Date.now() })
  }
  render() {
    const { handleSubmit, title, labelSubmit } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-4 form-otp"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form">
            <h3 className="text-center">{title}</h3>
          </div>
        </div>
        <FieldArray name="items" component={renderItems} />
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Countdown
              date={this.state.now + 1000 * 180}
              precision={3}
              renderer={renderCountDown}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 btn-action">
            <button
              type="button"
              className="btn-back mr-3"
              onClick={this.handleRetrySendOTP}
            >
              Gửi lại OTP
            </button>
            <button type="submit" className="btn-submit">
              {labelSubmit}
            </button>
          </div>
        </div>
      </form>
    )
  }
}

ConfirmOtpForm.defaultProps = {
  title: 'Nhập mã OTP đã được gửi đến số điện thoại của bạn',
  labelSubmit: 'Tiếp tục',
}
const validate = (values) => {
  const errors = {}
  if (values.items && values.items.length) {
    const otpStr = values.items.toString().replaceAll(',', '')
    if (otpStr.length < 6 && otpStr.length >= 0) {
      errors.items = { _error: 'Vui lòng nhập đầy đủ mã OTP.' }
    }
  }
  return errors
}
export default reduxForm({
  form: 'ConfirmOtpForm',
  enableReinitialize: true,
  validate,
})(ConfirmOtpForm)
