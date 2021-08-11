import { connect } from 'react-redux'
import { submitConfirmLoginVPBankNEO } from 'redux/actions/registerActions'
import PaymentConfirmLogin from 'uies/templates/_pti/_payment/PaymentConfirmLogin'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  initialValues: {
    items: ['', '', '', ''],
  },
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formValues) => {
    dispatch(submitConfirmLoginVPBankNEO(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentConfirmLogin)
