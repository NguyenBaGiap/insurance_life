import { connect } from 'react-redux'
import { submitRegisterStep3 } from 'redux/actions/registerActions'
import StepThirdRegister from 'uies/templates/_pti/StepThirdRegister'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formValues) => {
    dispatch(submitRegisterStep3(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepThirdRegister)
