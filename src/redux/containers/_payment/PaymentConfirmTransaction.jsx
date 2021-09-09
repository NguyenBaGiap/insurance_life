import { connect } from 'react-redux'
import {
  submitConfirmPaymentTransaction,
  submitRetryRequestOTP,
} from 'redux/actions/registerActions'
import PaymentConfirmTransaction from 'uies/templates/_payment/PaymentConfirmTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: {
    items: ['', '', '', ''],
  },
})

const mapDispatchToProps = (dispatch) => ({
  retrySendOTP: () => {
    dispatch(submitRetryRequestOTP())
  },
  onSubmit: (formValues) => {
    dispatch(submitConfirmPaymentTransaction(formValues))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentConfirmTransaction)
