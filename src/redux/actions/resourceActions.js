import * as baseActions from './baseActions'
import { LeadSessionResultJson } from 'models/LeadSessionResultJson'
import { PaymentInfoResultJson } from 'models/PaymentInfoResultJson'
import {
  fetchInitialValuesForm,
  fetchPtiPackages,
  fetchPaymentInformation,
} from 'redux/actions/actionCreator'
import { twoGetRequest } from 'services/api'
import { PtiRequestClient } from 'services/PtiRequestClient'
import { PaymentRequestClient } from 'services/PaymentRequestClient'

const ptiClient = new PtiRequestClient()
const paymentClient = new PaymentRequestClient()

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
      const { result1, result2 } = await twoGetRequest(
        `/v1/web/non-life/customer/get-lead`,
        `/v1/web/non-life/type-insurance/tier-by-product?productId=1`
      )
      const packages = [...result2.data].map(({ tierName, id }) => ({
        label: tierName,
        value: id,
      }))
      const initialValues = new LeadSessionResultJson(result1.data, packages)
      dispatch(fetchPtiPackages(packages))
      dispatch(fetchInitialValuesForm(initialValues))
    } catch (error) {
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const fetchPtiPackageRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const response = await ptiClient.fetchPackages()
      const packages = [...response.data].map(({ tierName, id }) => ({
        label: tierName,
        value: id,
      }))
      dispatch(fetchPtiPackages(packages))
    } catch (error) {
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const fetchPaymentDataRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const response = await paymentClient.fetchPaymentInfo()
      const initialValues = new PaymentInfoResultJson(response.data)
      dispatch(fetchPaymentInformation(initialValues))
    } catch (error) {
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
