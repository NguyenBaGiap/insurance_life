import React from 'react'
import ConfirmOtpForm from 'uies/forms/ConfirmOtpForm'
import 'static/styles/_otp.scss'

class CustomerConfirmOtp extends React.Component {
  render() {
    const { title, initialValues, onSubmit, retrySendOTP, labelSubmit } =
      this.props
    return (
      <React.Fragment>
        <section className="inject-content">{this.props.children}</section>
        <section className="form-otp">
          <ConfirmOtpForm
            title={title}
            initialValues={initialValues}
            onSubmit={onSubmit}
            retrySendOTP={retrySendOTP}
            labelSubmit={labelSubmit}
          />
        </section>
      </React.Fragment>
    )
  }
}
export default CustomerConfirmOtp
