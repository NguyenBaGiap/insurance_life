import { connect } from 'react-redux'
import PaymentLoginNEO from 'uies/templates/_pti/_payment/PaymentLoginNEO'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({
  onSubmit: (formValues) => {
    console.log(formValues)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentLoginNEO)
