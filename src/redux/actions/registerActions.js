import { push, replace, goBack } from 'connected-react-router'
import * as baseActions from './baseActions'
import { showModalWelcome } from 'redux/actions/actionCreator'
import { Step00RegisterSubmitJson } from 'models/Step00RegisterSubmitJson'
import { Step01RegisterSubmitJson } from 'models/Step01RegisterSubmitJson'
import { Step02RegisterSubmitJson } from 'models/Step02RegisterSubmitJson'
import { Step03RegisterSubmitJson } from 'models/Step03RegisterSubmitJson'
import { PtiRequestClient } from 'services/PtiRequestClient'
import { toastr } from 'react-redux-toastr'
import { CustomException, ExceptionResponse } from 'services/api'

const apiClient = new PtiRequestClient()

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const commonHandleError = (error) => {
  if (error instanceof CustomException) {
    toastr.error('Có lỗi xảy ra', error.message)
  }
  if (error instanceof ExceptionResponse) {
    toastr.error('Có lỗi xảy ra', error.data)
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
          position: 'top-right',
        }
      )
      dispatch(goBack())
    }
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
        data: { token, leadStep, ...rest },
      } = await apiClient.submitRegisterStepInit(submitValues)
      if (code === 'INS201') {
        return dispatch(showModalWelcome())
      }
      sessionStorage.setItem('access_token', token)
      const step = leadStep?.replace('STEP', '') || 1
      dispatch(
        push(`/pti/register/step${step}`, {
          ...rest,
        })
      )
    } catch (error) {
      commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRegisterStep1 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const submitValues = new Step01RegisterSubmitJson(formValue)
      const { data } = await apiClient.submitRegisterStepOne(submitValues)
      dispatch(
        push('/pti/register/step2', {
          ...data,
        })
      )
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
      const { data } = await apiClient.submitRegisterStepSecond(submitValues)
      dispatch(
        push('/pti/register/step3', {
          ...data,
        })
      )
    } catch (error) {
      commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRegisterStep3 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const submitValues = new Step03RegisterSubmitJson(formValue)
      const { data } = await apiClient.submitRegisterStepSecond(submitValues)
      dispatch(
        push('/register/payment/login', {
          ...data,
        })
      )
    } catch (error) {
      commonHandleError(error)
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
      dispatch(replace('/register/payment/login-confirm'))
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
      dispatch(push('/register/payment/transaction'))
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
      dispatch(push('/register/payment/transaction-confirm'))
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
