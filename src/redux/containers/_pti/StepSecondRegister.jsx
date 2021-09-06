import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Step02RegisterInitialValues } from 'models/Step02RegisterSubmitJson'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { submitRegisterStep2 } from 'redux/actions/registerActions'

import StepSecondRegister from 'uies/templates/_pti/StepSecondRegister'

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchInitialValues: () => {
    const initialState = props.location.state
    if (initialState) {
      const initialValues = new Step02RegisterInitialValues({ ...initialState })
      dispatch(fetchInitialValuesForm(initialValues))
    } else {
      dispatch(push('/pti/register/initial'))
    }
  },
  onSubmit: (values) => {
    dispatch(submitRegisterStep2(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepSecondRegister)
