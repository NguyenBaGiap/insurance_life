import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import {
  submitConfirmPaymentTransaction,
  submitRetryRequestOTP,
} from 'redux/actions/registerActions'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import PaymentConfirmTransaction from 'uies/templates/_payment/PaymentConfirmTransaction'
import { fetchPaymentDataRequest } from '../../actions/resourceActions'

const selector = formValueSelector('ConfirmOtpForm')
const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  location: state.router.location,
  initialValues: state.formValuesReducer.initialValues,
  uuid: selector(state, 'uuid'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialValues: async (values) => {
    await dispatch(fetchPaymentDataRequest())
    dispatch(
      fetchInitialValuesForm({
        ...values,
        items: ['', '', '', '', '', ''],
      })
    )
  },
  retrySendOTP: (formValues) => {
    dispatch(submitRetryRequestOTP(formValues))
  },
  onSubmit: (formValues) => {
    dispatch(submitConfirmPaymentTransaction(formValues))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentConfirmTransaction)
