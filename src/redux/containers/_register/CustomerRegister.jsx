import { connect } from 'react-redux'
import { submitRegister } from 'redux/actions/registerActions'

import CustomerRegister from 'uies/templates/_register/CustomerRegister'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegister(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerRegister)

// {
//     fullName: '23232323',
//         pid: '23232',
//     mobileNumber: '123131321313',
//     email: '23424324@gmail.com',
//     relationshipWithInsurer: {
//     value: 'strawberry',
//         label: 'Strawberry',
// },
// }
