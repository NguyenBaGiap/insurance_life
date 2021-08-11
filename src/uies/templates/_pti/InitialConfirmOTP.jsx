import React from 'react'
import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'

class InitialConfirmOTP extends React.Component {
  render() {
    const { onSubmit, retrySendOTP } = this.props
    return (
      <section>
        <CustomerConfirmOtp onSubmit={onSubmit} retrySendOTP={retrySendOTP}>
          <AppBannerStep />
        </CustomerConfirmOtp>
      </section>
    )
  }
}

export default InitialConfirmOTP
