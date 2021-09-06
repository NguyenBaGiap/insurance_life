import { connect } from 'react-redux'
import { Step03RegisterInitialValue } from 'models/Step03RegisterSubmitJson'
import { submitRegisterStep3 } from 'redux/actions/registerActions'
import StepThirdRegister from 'uies/templates/_pti/StepThirdRegister'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchInitialValues: () => {
    const initialState = props.location.state
    if (initialState) {
      const initialValues = new Step03RegisterInitialValue({ ...initialState })
      console.log(JSON.stringify(initialValues, 0, 2))
      dispatch(fetchInitialValuesForm({ ...initialValues }))
    } else {
      dispatch(push('/pti/register/initial'))
    }
  },
  onSubmit: (formValues) => {
    dispatch(submitRegisterStep3(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepThirdRegister)
