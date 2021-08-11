import { connect } from 'react-redux'
import InitialConfirmOTP from 'uies/templates/_pti/InitialConfirmOTP'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({
  retrySendOTP: () => {
    console.log('re-send-otp')
  },
  onSubmit: (formValues) => {
    console.log(formValues)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialConfirmOTP)
