import { connect } from 'react-redux'
import AppContainer from 'uies/AppContainer'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
