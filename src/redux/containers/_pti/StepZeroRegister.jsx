import { connect } from 'react-redux'
import { submitRegister, submitAdvisory } from 'redux/actions/registerActions'
import {
  showModalWelcome,
  closeModalWelcome,
} from 'redux/actions/actionCreator'
import StepZeroRegister from 'uies/templates/_pti/StepZeroRegister'

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
  location: state.router.location,
  isOpenPopupWelcomeCustomer: state.popupReducer.isOpenPopupWelcomeCustomer,
})

const mapDispatchToProps = (dispatch, props) => ({
  openPopupWelcome: () => {
    dispatch(showModalWelcome())
  },
  closePopupWelcome: () => {
    dispatch(closeModalWelcome())
    props.history.push('/')
  },
  onSubmit: (values) => {
    const params = props.location.search
    const initialState = props.location.state
    const isAdvisory = initialState?.target === 'advise'
    const formValuesCustom = {
      ...values,
      tier: initialState?.tier,
    }
    if (isAdvisory) {
      dispatch(submitAdvisory(formValuesCustom, params))
    } else {
      dispatch(submitRegister(formValuesCustom, params))
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepZeroRegister)
