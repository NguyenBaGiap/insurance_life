import { connect } from 'react-redux'
import { submitEmailSubscribe } from 'redux/actions/registerActions'
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

const mapDispatchToProps = (dispatch) => ({
  onSubmitEmail: (values) => {
    dispatch(submitEmailSubscribe(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
