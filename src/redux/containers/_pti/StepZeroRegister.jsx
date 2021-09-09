import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { submitRegister, submitAdvisory } from 'redux/actions/registerActions'
import {
  fetchInitialRegister,
  fetchLeadSessionRequest,
} from 'redux/actions/resourceActions'
import {
  showModalWelcome,
  closeModalWelcome,
} from 'redux/actions/actionCreator'
import StepZeroRegister from 'uies/templates/_pti/StepZeroRegister'

const selector = formValueSelector('StepZeroForm')

const mapStateToProps = (state) => ({
  initialValues: state.formValuesReducer.initialValues,
  location: state.router.location,
  popupWelcomeCustomer: state.popupReducer.popupWelcomeCustomer,
  isParticipation: selector(state, 'participation'),
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchInitialValues: () => {
    const params = props.location.search
    if (sessionStorage.getItem('access_token')) {
      dispatch(fetchLeadSessionRequest())
    } else {
      dispatch(fetchInitialRegister(params))
    }
  },
  openPopupWelcome: () => {
    dispatch(showModalWelcome())
  },
  closePopupWelcome: () => {
    dispatch(closeModalWelcome())
    props.history.goBack()
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
