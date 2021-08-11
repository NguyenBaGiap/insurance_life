import { connect } from 'react-redux'
import { submitConfirmPaymentTransaction } from 'redux/actions/registerActions'
import PaymentConfirmTransaction from 'uies/templates/_pti/_payment/PaymentConfirmTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: {
    items: ['', '', '', ''],
  },
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formValues) => {
    dispatch(submitConfirmPaymentTransaction(formValues))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentConfirmTransaction)
