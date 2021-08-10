import { connect } from 'react-redux'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepFirstRegister from 'uies/templates/_pti/StepFirstRegister'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegisterStep1(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepFirstRegister)
