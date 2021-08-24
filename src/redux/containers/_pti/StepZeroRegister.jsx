import { connect } from 'react-redux'
import { submitRegister, submitAdvisory } from 'redux/actions/registerActions'

import StepZeroRegister from 'uies/templates/_pti/StepZeroRegister'

const mapStateToProps = (state) => ({
  initialValues: {
    cusName: 'a',
    email: '2@gmail.com',
    legalId: 'a',
    phone: '0914249694',
  },
  location: state.router.location,
})

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (values) => {
    const params = props.location.search
    const initialState = props.location.state
    const isRegister = initialState.target === 'register'
    const formValuesCustom = {
      ...values,
      tier: initialState.tier,
    }
    if (isRegister) {
      dispatch(submitRegister(formValuesCustom, params))
    } else {
      dispatch(submitAdvisory(formValuesCustom, params))
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepZeroRegister)
