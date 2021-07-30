import { connect } from 'react-redux'
import { submitRegisterStep2 } from 'redux/actions/registerActions'

import StepTwoRegister from 'uies/templates/_step_two/StepTwoRegister'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegisterStep2(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepTwoRegister)
