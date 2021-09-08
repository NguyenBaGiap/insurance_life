import { connect } from 'react-redux'
import { fetchPaymentDataRequest } from 'redux/actions/resourceActions'
import { submitInformationPaymentTransaction } from 'redux/actions/registerActions'
import PaymentTransaction from 'uies/templates/_payment/PaymentTransaction'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: state.paymentReducer.paymentInformation,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPaymentInformation: () => {
    dispatch(fetchPaymentDataRequest())
  },
  onSubmit: (formValues) => {
    dispatch(submitInformationPaymentTransaction(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTransaction)
