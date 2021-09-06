import * as baseActions from './baseActions'
import { LeadSessionResultJson } from 'models/LeadSessionResultJson'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { simpleGetRequest } from 'services/api'

export const fetchLeadSessionRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const response = await simpleGetRequest(
        `/v1/web/non-life/customer/get-lead`
      )
      const initialValues = new LeadSessionResultJson(response)
      dispatch(fetchInitialValuesForm(initialValues))
    } catch (error) {
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
