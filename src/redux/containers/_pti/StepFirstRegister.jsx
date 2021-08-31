import { connect } from 'react-redux'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepFirstRegister from 'uies/templates/_pti/StepFirstRegister'

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchInitialValues: () => {
    const initialState = props.location.state
    dispatch(fetchInitialValuesForm({ ...initialState }))
  },
  onSubmit: (values) => {
    const initialState = props.location.state
    dispatch(submitRegisterStep1(values, initialState))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepFirstRegister)
