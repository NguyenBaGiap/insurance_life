import { connect } from 'react-redux'

import ClaimInformation from 'uies/templates/_info/ClaimInformation'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = () => ({
  onSubmit: (values) => {
    console.log('step1 submit', values)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimInformation)

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
