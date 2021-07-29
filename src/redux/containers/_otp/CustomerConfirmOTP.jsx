import { connect } from 'react-redux'

import CustomerConfirmOtp from 'uies/templates/_otp/CustomerConfirmOtp'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = () => ({
  onSubmit: (values) => {
    console.log(values)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerConfirmOtp)

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
