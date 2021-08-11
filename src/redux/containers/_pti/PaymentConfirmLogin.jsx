import { connect } from 'react-redux'
import PaymentConfirmLogin from 'uies/templates/_pti/_payment/PaymentConfirmLogin'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({
  onSubmit: (formValues) => {
    console.log(formValues)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentConfirmLogin)
