import _ from 'lodash'
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
import { insurancePackage } from 'utilities/initialHomePage'

const ptiClient = new PtiRequestClient()
const paymentClient = new PaymentRequestClient()

export const fetchInitialRegister = (params) => {
  return async (dispatch) => {
    const searchParams = new URLSearchParams(params)
    const initialValues = {
      productId: searchParams.get('product'),
      daoSale: searchParams.get('dao'),
      tierId: {
        value: searchParams.get('tier'),
      },
      target: searchParams.get('target'),
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
      baseActions.commonHandleError(error, dispatch)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const fetchLeadSessionAdminRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const { data } = await ptiClient.fetchLeadSessionAdminRequest()
      dispatch(fetchInitialValuesForm(data))
    } catch (error) {
      baseActions.commonHandleError(error, dispatch)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
// in landing page
export const fetchPtiPackageRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const response = await ptiClient.fetchPackages()
      const packages = _.map(insurancePackage.contents, function (p) {
        return _.merge(p, _.find(response.data, { code: p.code }))
      })
      dispatch(fetchPtiPackages(packages))
    } catch (error) {
      baseActions.commonHandleError(error, dispatch)
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
      const {
        data: {
          accounts: { ca },
          cards: { credit, debit },
        },
      } = response
      const cardList = _.concat(credit, debit).map(
        ({ productName, cardMaskNumber, cardNumber, typeCard }) => ({
          label: `${productName} - ${cardMaskNumber}`,
          value: {
            accountNumber: null,
            categoryAccount: null,
            cardNumber,
            cardType: typeCard,
          },
        })
      )
      const caList = ca.map(({ accountNumber, accountCategory, typeCard }) => ({
        label: `Tài khoản thanh toán - ${accountNumber}`,
        value: {
          accountNumber,
          categoryAccount: accountCategory,
          cardNumber: null,
          cardType: typeCard,
        },
      }))
      const optionPayment = _.concat(cardList, caList)
      dispatch(fetchPaymentInformation(optionPayment))
      const initialValues = new PaymentInfoResultJson(response.data)
      dispatch(fetchInitialValuesForm(initialValues))
    } catch (error) {
      baseActions.commonHandleError(error, dispatch)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
