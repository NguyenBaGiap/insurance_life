import { connect } from 'react-redux'
import { submitInitialConfirmOTP } from 'redux/actions/registerActions'
import InitialConfirmOTP from 'uies/templates/_pti/InitialConfirmOTP'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: {},
})

const mapDispatchToProps = (dispatch) => ({
  retrySendOTP: () => {
    console.log('re-send-otp')
  },
  onSubmit: (formValues) => {
    dispatch(submitInitialConfirmOTP(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialConfirmOTP)
