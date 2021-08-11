import { connect } from 'react-redux'
import PaymentTransaction from 'uies/templates/_pti/_payment/PaymentTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({
  onSubmit: (formValues) => {
    console.log(formValues)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTransaction)
