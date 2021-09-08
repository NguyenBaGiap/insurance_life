import { connect } from 'react-redux'
import { fetchLeadSessionRequest } from 'redux/actions/resourceActions'
import { submitRegisterStep3 } from 'redux/actions/registerActions'
import StepThirdRegister from 'uies/templates/_pti/StepThirdRegister'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: state.formValuesReducer.initialValues,
  insurancePackage: state.ptiPackageReducer.options,
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialValues: () => {
    dispatch(fetchLeadSessionRequest())
  },
  onSubmit: (formValues) => {
    dispatch(submitRegisterStep3(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepThirdRegister)
