import { connect } from 'react-redux'
import AppFooter from 'uies/components/_footer/AppFooter'
import { footer as initialValues } from 'utilities/constants'

const mapStateToProps = () => ({
  initialValues,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
