import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import VPBankNeoLoginForm from 'uies/forms/_payment/VPBankNeoLoginForm'

class PaymentLoginNEO extends React.Component {
  handleGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <PaymentTemplate>
        <VPBankNeoLoginForm
          onSubmit={this.props.onSubmit}
          handleGoBack={this.handleGoBack}
        />
      </PaymentTemplate>
    )
  }
}
export default PaymentLoginNEO
