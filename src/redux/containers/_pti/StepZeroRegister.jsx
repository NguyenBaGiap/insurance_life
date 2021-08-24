import { connect } from 'react-redux'
import { submitRegister, submitAdvisory } from 'redux/actions/registerActions'
import { showModalWelcome, closeModalWelcome } from 'redux/actions/popupActions'
import StepZeroRegister from 'uies/templates/_pti/StepZeroRegister'

const mapStateToProps = (state) => ({
  initialValues: {},
  location: state.router.location,
  isOpenPopupWelcomeCustomer: state.popupReducer.isOpenPopupWelcomeCustomer,
})

const mapDispatchToProps = (dispatch, props) => ({
  openPopupWelcome: () => {
    dispatch(showModalWelcome())
  },
  closePopupWelcome: () => {
    dispatch(closeModalWelcome())
  },
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
