import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import SimpleNumberField from 'uies/components/_field/SimpleNumberField'
import Countdown from 'react-countdown'

const now = Date.now()
const renderItems = ({ fields, meta: { error } }) => {
  return (
    <React.Fragment>
      {fields.map((item, index) => (
        <Field
          key={index}
          name={item}
          component={SimpleNumberField}
          maxLength={1}
          style={{ width: '60px', marginRight: 20 }}
        />
      ))}
      {error && <span className="text-danger">{error}</span>}
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
      <strong style={{ color: '#00B74F' }}>{props.seconds}</strong> &nbsp;giây
    </p>
  )
}

class ConfirmOtpForm extends React.Component {
  render() {
    const { retrySendOTP, handleSubmit, title, labelSubmit } = this.props
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
        <div
          className="items"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <FieldArray name="items" component={renderItems} />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Countdown date={now + 600000} renderer={renderCountDown} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 btn-action">
            <button
              type="button"
              className="btn-back mr-3"
              onClick={retrySendOTP}
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
export default reduxForm({
  form: 'ConfirmOtpForm',
  enableReinitialize: true,
})(ConfirmOtpForm)
