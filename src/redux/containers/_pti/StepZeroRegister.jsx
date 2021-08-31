import { connect } from 'react-redux'
import { submitRegister, submitAdvisory } from 'redux/actions/registerActions'
import {
  showModalWelcome,
  closeModalWelcome,
} from 'redux/actions/actionCreator'
import StepZeroRegister from 'uies/templates/_pti/StepZeroRegister'

const mapStateToProps = (state) => ({
  initialValues: {
    cusName: 'VU THI YEN',
    email: 'yenvu@gmail.com',
    legalId: '163040259',
    phone: '0349728372',
    productId: 1,
    tier: null,
    relationship: {
      label: 'Vợ / chồng',
      value: 'VC',
    },
    daoSale: null,
  },
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
