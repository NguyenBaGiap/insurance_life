import { connect } from 'react-redux'
import { submitRegister } from 'redux/actions/registerActions'

import StepZeroRegister from 'uies/templates/_pti/StepZeroRegister'

const mapStateToProps = (state) => ({
  initialValues: {},
  location: state.router.location,
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegister(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepZeroRegister)
