import { connect } from 'react-redux'
import { fetchLeadSessionRequest } from 'redux/actions/resourceActions'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepFirstRegister from 'uies/templates/_pti/StepFirstRegister'

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialValues: () => {
    dispatch(fetchLeadSessionRequest())
  },
  onSubmit: (values) => {
    dispatch(submitRegisterStep1(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepFirstRegister)
