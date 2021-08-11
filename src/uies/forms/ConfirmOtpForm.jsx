import React from 'react'
import { reduxForm } from 'redux-form'

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
})(ConfirmOtpForm)
