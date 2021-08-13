import { connect } from 'react-redux'
import {
  submitInitialConfirmOTP,
  submitRetryRequestOTP,
} from 'redux/actions/registerActions'
import InitialConfirmOTP from 'uies/templates/_pti/InitialConfirmOTP'

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
    dispatch(submitInitialConfirmOTP(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialConfirmOTP)
