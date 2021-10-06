import { connect } from 'react-redux'
import {
  fetchLeadSessionRequest,
  fetchLeadSessionAdminRequest,
} from 'redux/actions/resourceActions'
import { submitLoginVPBankNEO } from 'redux/actions/registerActions'
import PaymentLoginNEO from 'uies/templates/_payment/PaymentLoginNEO'

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatusReducer,
  location: state.router.location,
})

const mapDispatchToProps = (dispatch) => ({
  fetchLeadSessionValues: () => {
    dispatch(fetchLeadSessionRequest())
  },
  fetchLeadSessionAdminValues: () => {
    dispatch(fetchLeadSessionAdminRequest())
  },
  onSubmit: (formValues) => {
    dispatch(submitLoginVPBankNEO(formValues))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentLoginNEO)
