import { connect } from 'react-redux'
import { submitRegister, submitAdvisory } from 'redux/actions/registerActions'
import { fetchInitialRegister } from 'redux/actions/resourceActions'
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
  fetchInitialValues: () => {
    const params = props.location.search
    dispatch(fetchInitialRegister(params))
  },
  openPopupWelcome: () => {
    dispatch(showModalWelcome())
  },
  closePopupWelcome: () => {
    dispatch(closeModalWelcome())
    props.history.push('/')
  },
  onSubmit: (values) => {
    const isAdvisory = props.location.state?.target === 'advise'
    if (isAdvisory) {
      dispatch(submitAdvisory(values))
    } else {
      dispatch(submitRegister(values))
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepZeroRegister)
