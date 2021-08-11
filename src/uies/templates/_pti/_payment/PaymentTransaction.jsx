import React from 'react'
import PaymentTemplate from 'uies/templates/_pti/_payment/PaymentTemplate'
import PaymentTransactionForm from 'uies/forms/_pti/PaymentTransactionForm'

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
