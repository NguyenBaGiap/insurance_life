import { connect } from 'react-redux'
import StepThirdRegister from 'uies/templates/_pti/StepThirdRegister'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(StepThirdRegister)
