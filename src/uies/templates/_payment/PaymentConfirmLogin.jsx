import React from 'react'
import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'

class PaymentConfirmLogin extends React.Component {
  render() {
    const { initialValues, onSubmit } = this.props
    return (
      <PaymentTemplate>
        <CustomerConfirmOtp
          title="Nhập mã OTP đã được gửi đến số điện thoại của bạn để đăng nhập"
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </PaymentTemplate>
    )
  }
}

export default PaymentConfirmLogin