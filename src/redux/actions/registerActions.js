import { push, replace } from 'connected-react-router'
import * as baseActions from './baseActions'
import { showModalWelcome } from 'redux/actions/popupActions'
import { Step00RegisterSubmitJson } from 'models/Step00RegisterSubmitJson'
import { Step01RegisterSubmitJson } from 'models/Step01RegisterSubmitJson'
import { Step02RegisterSubmitJson } from 'models/Step02RegisterSubmitJson'
import { PtiRequestClient } from 'services/PtiRequestClient'
import { toastr } from 'react-redux-toastr'
import { CustomException, ExceptionResponse } from 'services/api'

const apiClient = new PtiRequestClient()

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const commonHandleError = (error) => {
  if (error instanceof CustomException) {
    toastr.error('Có lỗi xảy ra', error.message)
  }
  if (error instanceof ExceptionResponse) {
    toastr.error('Có lỗi xảy ra', error.data)
  }
}

export const submitRegister = (formValue, params) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const searchParams = new URLSearchParams(params)
      const submitValues = new Step00RegisterSubmitJson(formValue, searchParams)
      const {
        status: { code },
        data: { id, token },
      } = await apiClient.submitRegisterStepInit(submitValues)
      if (code === 'INS201') {
        dispatch(showModalWelcome())
      }
      if (code === 'INS200') {
        sessionStorage.setItem('access_token', token)
        dispatch(
          push(`/pti/register/step1`, {
            leadId: id,
          })
        )
      }
    } catch (error) {
      commonHandleError(error)
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
      const submitValues = new Step00RegisterSubmitJson(formValue, searchParams)
      await apiClient.submitAdvisoryStepOne(submitValues)
    } catch (error) {
      console.log(error)
    } finally {
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

export const submitRegisterStep1 = (formValue, initialState) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const submitValues = new Step01RegisterSubmitJson(formValue, initialState)
      const response = await apiClient.submitRegisterStepOne(submitValues)
      console.log(response)
    } catch (error) {
      commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRegisterStep2 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const submitValues = new Step02RegisterSubmitJson(formValue)
      console.log(submitValues)

      //await sleep(3000)
      //dispatch(push('/pti/register/step3'))
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
