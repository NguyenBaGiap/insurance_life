import { connect } from 'react-redux'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepFirstRegister from 'uies/templates/_pti/StepFirstRegister'

const mapStateToProps = (state) => ({
  initialValues: {},
  initialState: state.router.location.state,
})

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (values) => {
    const initialState = props.location.state
    dispatch(submitRegisterStep1(values, initialState))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepFirstRegister)
