import React from 'react'
import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'
import PaymentTemplate from 'uies/templates/_pti/_payment/PaymentTemplate'

class PaymentConfirmLogin extends React.Component {
  render() {
    const { onSubmit } = this.props
    return (
      <PaymentTemplate>
        <CustomerConfirmOtp
          title="Nhập mã OTP đã được gửi đến số điện thoại của bạn để đăng nhập"
          onSubmit={onSubmit}
        />
      </PaymentTemplate>
    )
  }
}

export default PaymentConfirmLogin
