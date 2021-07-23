import { connect } from 'react-redux'
import LandingPage from 'uies/templates/LandingPage'
import {
  benefit,
  customerPotential,
  insurancePackage,
  customerComment,
  footer,
} from 'utilities/constants'

const mapStateToProps = () => ({
  initialValues: {
    benefit,
    customerPotential,
    insurancePackage,
    customerComment,
    footer,
  },
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
