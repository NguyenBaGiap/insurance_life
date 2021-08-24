import { push, replace } from 'connected-react-router'
import * as baseActions from './baseActions'
import { StepOneRegisterSubmitJson } from 'models/StepOneRegisterSubmitJson'
import { PtiRequestClient } from 'services/PtiRequestClient'
import { toastr } from 'react-redux-toastr'
import { CustomException } from 'services/api'

const apiClient = new PtiRequestClient()

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const submitRegister = (formValue, params) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const searchParams = new URLSearchParams(params)
      const submitValues = new StepOneRegisterSubmitJson(
        formValue,
        searchParams
      )
      const response = await apiClient.submitRegisterStepOne(submitValues)
      console.log(response)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push(`/pti/register/step1`))
    } catch (error) {
      console.log(error)
      if (error instanceof CustomException) {
        toastr.error('Có lỗi xảy ra', error.message)
      }
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitAdvisory = (formValue, params) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const searchParams = new URLSearchParams(params)
      const submitValues = new StepOneRegisterSubmitJson(
        formValue,
        searchParams
      )
      await apiClient.submitAdvisoryStepOne(submitValues)
      dispatch(baseActions.genRequestFinishAction())
      // open notice
      toastr.success(
        'Chào mừng Quý Khách',
        'Cảm ơn Quý Khách đã quan tâm đến sản phẩm của VPBank. Chúng tôi sẽ liên hệ và tư vấn cho Quý Khách trong thời gian sớm nhất.',
        {
          timeOut: 10000,
          position: 'bottom-left',
        }
      )
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/'))
    }
  }
}

export const submitRetryRequestOTP = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      await sleep(2000)
      dispatch(baseActions.genRequestFinishAction())
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitInitialConfirmOTP = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(4000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/pti/register/step1'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRegisterStep1 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/pti/register/step2'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRegisterStep2 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/pti/register/step3'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRegisterStep3 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/pti/register/payment/login'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitLoginVPBankNEO = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(replace('/pti/register/payment/login-confirm'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitConfirmLoginVPBankNEO = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/pti/register/payment/transaction'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitInformationPaymentTransaction = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/pti/register/payment/transaction-confirm'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitConfirmPaymentTransaction = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(3000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/register/payment/success'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
