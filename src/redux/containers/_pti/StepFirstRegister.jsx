import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { fetchLeadSessionRequest } from 'redux/actions/resourceActions'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepFirstRegister from 'uies/templates/_pti/StepFirstRegister'

const selector = formValueSelector('StepFirstForm')
const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
  currentValueRelation: selector(state, 'relationship'),
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
