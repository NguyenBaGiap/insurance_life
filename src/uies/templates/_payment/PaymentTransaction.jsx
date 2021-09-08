import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import PaymentTransactionForm from 'uies/forms/_payment/PaymentTransactionForm'

class PaymentTransaction extends React.Component {
  componentDidMount() {
    this.props.fetchPaymentInformation()
  }

  render() {
    const { initialValues, onSubmit } = this.props
    return (
      <PaymentTemplate>
        <PaymentTransactionForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </PaymentTemplate>
    )
  }
}

export default PaymentTransaction
