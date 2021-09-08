import { push, replace } from 'connected-react-router'
import * as baseActions from './baseActions'
import { showModalWelcome } from 'redux/actions/actionCreator'
import { Step00RegisterSubmitJson } from 'models/Step00RegisterSubmitJson'
import { Step01RegisterSubmitJson } from 'models/Step01RegisterSubmitJson'
import { Step02RegisterSubmitJson } from 'models/Step02RegisterSubmitJson'
import { Step03RegisterSubmitJson } from 'models/Step03RegisterSubmitJson'
import { PtiRequestClient } from 'services/PtiRequestClient'
import { toastr } from 'react-redux-toastr'
import { simplePostRequest } from 'services/api'
import { PaymentRequestClient } from 'services/PaymentRequestClient'

const apiClient = new PtiRequestClient()
const payClient = new PaymentRequestClient()

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const submitAdvisory = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const submitValues = new Step00RegisterSubmitJson(formValue)
      await apiClient.submitAdvisoryStepOne(submitValues)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
      dispatch(
        showModalWelcome({
          title: 'Đăng ký thành công.',
          description:
            'Yêu cầu đã được hệ thống VPBank ghi nhận. Chúng tôi sẽ liên hệ và tư vấn Khách hàng trong thời gian sớm nhất. Cảm ơn Quý khách.',
        })
      )
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
        data: { token, leadStep },
      } = await apiClient.submitRegisterStepInit(submitValues)
      if (code === 'INS201') {
        return dispatch(
          showModalWelcome({
            title: 'Chào mừng Quý Khách',
            description:
              'Cảm ơn Quý Khách đã quan tâm đến sản phẩm của VPBank. Chúng tôi sẽ liên hệ và tư vấn cho Quý Khách trong thời gian sớm nhất.',
          })
        )
      }
      sessionStorage.setItem('access_token', token)
      const step = leadStep?.replace('STEP', '') || 1
      if (step === '4') {
        dispatch(push(`/register/payment/login`))
      } else {
        dispatch(push(`/pti/register/step${step}`))
      }
    } catch (error) {
      baseActions.commonHandleError(error)
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
      await apiClient.submitRegisterStepOne(submitValues)
      dispatch(push('/pti/register/step2'))
    } catch (error) {
      baseActions.commonHandleError(error)
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
      await apiClient.submitRegisterStepSecond(submitValues)
      dispatch(push('/pti/register/step3'))
    } catch (error) {
      baseActions.commonHandleError(error)
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
      await apiClient.submitRegisterStepThird(submitValues)
      dispatch(push('/register/payment/login'))
    } catch (error) {
      console.log(error)
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitLoginVPBankNEO = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      await payClient.submitLoginNEO(formValue)
      dispatch(replace('/register/payment/transaction'))
    } catch (error) {
      baseActions.commonHandleError(error)
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
      dispatch(push('/register/payment/transaction-confirm'))
    } catch (error) {
      baseActions.commonHandleError(error)
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
      dispatch(push('/register/payment/success'))
    } catch (error) {
      baseActions.commonHandleError(error)
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
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitEmailSubscribe = (formValues) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      // create param
      const urlSearchParams = new URLSearchParams()
      urlSearchParams.append('email', formValues.email)
      await simplePostRequest(
        `/v1/web/non-life/customer/subscribe?${urlSearchParams.toString()}`,
        null
      )
    } catch (error) {
      baseActions.commonHandleError(error)
    } finally {
      toastr.success(
        'Chào mừng Quý Khách',
        'Cảm ơn Quý Khách đã quan tâm đến sản phẩm của VPBank. Chúng tôi sẽ liên hệ và tư vấn cho Quý Khách trong thời gian sớm nhất.',
        {
          timeOut: 10000,
          position: 'top-right',
        }
      )
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
