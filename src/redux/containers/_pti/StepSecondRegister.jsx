import { connect } from 'react-redux'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { submitRegisterStep2 } from 'redux/actions/registerActions'

import StepSecondRegister from 'uies/templates/_pti/StepSecondRegister'

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchInitialValues: () => {
    const initialState = props.location.state
    const initialValues = {
      ...initialState,
      condition: true,
      billExport: true,
      effectiveDate: new Date().getTime(),
      participation: true,
    }
    dispatch(fetchInitialValuesForm(initialValues))
  },
  onSubmit: (values) => {
    const initialState = props.location.state
    dispatch(submitRegisterStep2(values, initialState))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepSecondRegister)
