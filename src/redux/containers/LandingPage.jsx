import { connect } from 'react-redux'
import LandingPage from 'uies/templates/LandingPage'

const mapStateToProps = () => ({
  test: 'LandingPage',
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
