import { connect } from 'react-redux'
import { submitInformationPaymentTransaction } from 'redux/actions/registerActions'
import PaymentTransaction from 'uies/templates/_pti/_payment/PaymentTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formValues) => {
    dispatch(submitInformationPaymentTransaction(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTransaction)
