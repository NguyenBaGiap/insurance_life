import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import CustomerRegisterForm from 'uies/forms/CustomerRegisterForm'

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({
  onSubmit: (values) => {
    window.alert(JSON.stringify(values, 0, 2))
  },
})

const createReduxForm = reduxForm({
  form: 'CustomerRegisterForm',
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createReduxForm(CustomerRegisterForm))
