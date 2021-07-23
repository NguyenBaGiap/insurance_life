import { connect } from 'react-redux'
import EmailFollowForm from 'uies/forms/EmailFollowForm'

const mapStateToProps = () => ({
  initialValues: {
    email: 'giapnb@septeni-technology.jp',
  },
})

const mapDispatchToProps = () => ({
  onSubmit: (values) => {
    window.alert(JSON.stringify(values, 0, 2))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailFollowForm)
