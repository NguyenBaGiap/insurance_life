import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
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

const mapDispatchToProps = (dispatch) => ({
  fetchInitialValues: (params) => {
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
    dispatch(goBack())
  },
  onSubmit: (values) => {
    const isAdvisory = values.target === 'advise'
    if (isAdvisory) {
      dispatch(submitAdvisory(values))
    } else {
      dispatch(submitRegister(values))
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepZeroRegister)
