import { connect } from 'react-redux'
import StepThirdRegister from 'uies/templates/_pti/StepThirdRegister'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({
  onSubmit: (formValues) => {
    console.log(formValues)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepThirdRegister)
