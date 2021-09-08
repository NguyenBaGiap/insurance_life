import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { fetchLeadSessionRequest } from 'redux/actions/resourceActions'
import { submitRegisterStep2 } from 'redux/actions/registerActions'
import StepSecondRegister from 'uies/templates/_pti/StepSecondRegister'

const selector = formValueSelector('StepSecondForm')

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
  insurancePackage: state.ptiPackageReducer.options,
  isParticipation: selector(state, 'participation'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialValues: () => {
    dispatch(fetchLeadSessionRequest())
  },
  onSubmit: (values) => {
    dispatch(submitRegisterStep2(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepSecondRegister)
