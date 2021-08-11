import { connect } from 'react-redux'
import PaymentConfirmTransaction from 'uies/templates/_pti/_payment/PaymentConfirmTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({
  onSubmit: (formValues) => {
    console.log(formValues)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentConfirmTransaction)
