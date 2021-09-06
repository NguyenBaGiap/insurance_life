import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Step01RegisterInitialValues } from 'models/Step01RegisterSubmitJson'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepFirstRegister from 'uies/templates/_pti/StepFirstRegister'

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchInitialValues: () => {
    const initialState = props.location.state
    if (initialState) {
      const initialValues = new Step01RegisterInitialValues(initialState)
      dispatch(fetchInitialValuesForm({ ...initialValues }))
    } else {
      dispatch(push('/pti/register/initial'))
    }
  },
  onSubmit: (values) => {
    dispatch(submitRegisterStep1(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepFirstRegister)
