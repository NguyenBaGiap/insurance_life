import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import VPBankNeoLoginForm from 'uies/forms/VPBankNeoLoginForm'

class PaymentLoginNEO extends React.Component {
  render() {
    return (
      <PaymentTemplate>
        <VPBankNeoLoginForm onSubmit={this.props.onSubmit} />
      </PaymentTemplate>
    )
  }
}
export default PaymentLoginNEO
