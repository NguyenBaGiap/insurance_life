import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import VPBankNeoLoginForm from 'uies/forms/_payment/VPBankNeoLoginForm'

class PaymentLoginNEO extends React.Component {
  componentDidMount() {
    const {
      query: { token },
    } = this.props.location
    if (token) {
      sessionStorage.setItem('access_token', token)
      this.props.fetchLeadSessionAdminValues()
    } else {
      this.props.fetchLeadSessionValues()
    }
  }

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
