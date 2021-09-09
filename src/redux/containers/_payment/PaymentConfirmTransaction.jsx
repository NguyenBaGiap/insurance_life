import { connect } from 'react-redux'
import {
  submitConfirmPaymentTransaction,
  submitRetryRequestOTP,
} from 'redux/actions/registerActions'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import PaymentConfirmTransaction from 'uies/templates/_payment/PaymentConfirmTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  location: state.router.location,
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialValues: (values) => {
    dispatch(
      fetchInitialValuesForm({
        ...values,
        items: ['', '', '', '', '', ''],
      })
    )
  },
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
