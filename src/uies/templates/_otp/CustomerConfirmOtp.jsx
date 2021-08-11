import React from 'react'
import ConfirmOtpForm from 'uies/forms/ConfirmOtpForm'
import 'static/styles/_otp.scss'

export default class CustomerConfirmOtp extends React.Component {
  render() {
    const { onSubmit, retrySendOTP } = this.props
    return (
      <React.Fragment>
        <section className="inject-content">{this.props.children}</section>
        <section className="form-otp">
          <ConfirmOtpForm onSubmit={onSubmit} retrySendOTP={retrySendOTP} />
        </section>
      </React.Fragment>
    )
  }
}
