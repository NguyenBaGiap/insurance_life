import { connect } from 'react-redux'
import { fetchLeadSessionRequest } from 'redux/actions/resourceActions'
import { submitLoginVPBankNEO } from 'redux/actions/registerActions'
import PaymentLoginNEO from 'uies/templates/_payment/PaymentLoginNEO'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
})

const mapDispatchToProps = (dispatch) => ({
  fetchLeadSessionValues: () => {
    dispatch(fetchLeadSessionRequest())
  },
  onSubmit: (formValues) => {
    dispatch(submitLoginVPBankNEO(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentLoginNEO)
