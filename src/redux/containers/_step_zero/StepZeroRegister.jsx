import { connect } from 'react-redux'
import { submitRegister } from 'redux/actions/registerActions'

import StepZeroRegister from 'uies/templates/_step_zero/StepZeroRegister'

const mapStateToProps = () => ({
  initialValues: {},
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegister(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepZeroRegister)

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
