import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import PaymentTransactionForm from 'uies/forms/_payment/PaymentTransactionForm'

class PaymentTransaction extends React.Component {
  componentDidMount() {
    this.props.fetchPaymentInformation()
  }
  handleGoBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { initialValues, onSubmit, accountOptions } = this.props
    return (
      <PaymentTemplate>
        <PaymentTransactionForm
          initialValues={initialValues}
          accountOptions={accountOptions}
          onSubmit={onSubmit}
          handleGoBack={this.handleGoBack}
        />
      </PaymentTemplate>
    )
  }
}

export default PaymentTransaction
