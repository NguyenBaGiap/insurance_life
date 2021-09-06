import React from 'react'
import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'

class PaymentConfirmTransaction extends React.Component {
  render() {
    const { initialValues, onSubmit } = this.props
    return (
      <PaymentTemplate>
        <CustomerConfirmOtp
          title="Nhập mã OTP đã được gửi đến số điện thoại của bạn để xác nhận thanh toán"
          initialValues={initialValues}
          onSubmit={onSubmit}
          labelSubmit="Xác nhận"
        />
      </PaymentTemplate>
    )
  }
}

export default PaymentConfirmTransaction
