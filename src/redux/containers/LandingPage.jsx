import { connect } from 'react-redux'
import { submitEmailSubscribe } from 'redux/actions/registerActions'
import { fetchPtiPackageRequest } from 'redux/actions/resourceActions'
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
  insurancePackage: state.ptiPackageReducer.options,
  location: state.router.location,
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => {
    dispatch(fetchPtiPackageRequest())
  },
  onSubmitEmail: (values) => {
    dispatch(submitEmailSubscribe(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
