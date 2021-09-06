import React from 'react'
import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'

class PaymentConfirmOTP extends React.Component {
  render() {
    const { onSubmit } = this.props
    return (
      <CustomerConfirmOtp onSubmit={onSubmit}>
        <section className="otp-banner">
          <AppBannerStep />
        </section>
        <section className="otp-step">
          <Stepper />
        </section>
      </CustomerConfirmOtp>
    )
  }
}

export default PaymentConfirmOTP
