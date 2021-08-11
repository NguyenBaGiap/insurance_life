import { connect } from 'react-redux'
import { submitRegisterStep2 } from 'redux/actions/registerActions'

import StepSecondRegister from 'uies/templates/_pti/StepSecondRegister'

const mapStateToProps = () => ({
  initialValues: {
    insurancePackage: {
      value: 0,
      label: 'Gói bạc',
    },
    dateActive: 1627804880479,
  },
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegisterStep2(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepSecondRegister)
