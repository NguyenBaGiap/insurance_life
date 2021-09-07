import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import PaymentTransactionForm from 'uies/forms/_payment/PaymentTransactionForm'

class PaymentTransaction extends React.Component {
  render() {
    return (
      <PaymentTemplate>
        <PaymentTransactionForm onSubmit={this.props.onSubmit} />
      </PaymentTemplate>
    )
  }
}

export default PaymentTransaction