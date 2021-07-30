import { connect } from 'react-redux'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepOneRegister from 'uies/templates/_pti/_step_one/StepOneRegister'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegisterStep1(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepOneRegister)
