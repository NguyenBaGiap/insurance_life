import * as baseActions from './baseActions'
import { LeadSessionResultJson } from 'models/LeadSessionResultJson'
import { fetchInitialValuesForm } from 'redux/actions/actionCreator'
import { simpleGetRequest } from 'services/api'

export const fetchInitialRegister = (params) => {
  return async (dispatch) => {
    const searchParams = new URLSearchParams(params)
    const initialValues = {
      productId: searchParams.get('product'),
      daoSale: searchParams.get('dao'),
      tier: searchParams.get('tier'),
      participation: true,
    }
    dispatch(fetchInitialValuesForm(initialValues))
  }
}

export const fetchLeadSessionRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const response = await simpleGetRequest(
        `/v1/web/non-life/customer/get-lead`,
        null
      )
      const initialValues = new LeadSessionResultJson(response.data)
      dispatch(fetchInitialValuesForm(initialValues))
    } catch (error) {
      console.log(error)
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
