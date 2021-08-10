import { connect } from 'react-redux'

import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = () => ({
  onSubmit: (values) => {
    console.log(values)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerConfirmOtp)
