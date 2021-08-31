import { connect } from 'react-redux'
import LandingPage from 'uies/templates/LandingPage'
import {
  benefit,
  customerPotential,
  insurancePackage,
  customerComment,
  footer,
} from 'utilities/initialHomePage'

const mapStateToProps = (state) => ({
  initialValues: {
    benefit,
    customerPotential,
    insurancePackage,
    customerComment,
    footer,
  },
  location: state.router.location,
})

const mapDispatchToProps = () => ({
  onSubmitEmail: (values) => {
    window.alert(JSON.stringify(values, 0, 2))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
