import { push, replace } from 'connected-react-router'
import * as baseActions from './baseActions'
import { showModalWelcome } from 'redux/actions/actionCreator'
import { Step00RegisterSubmitJson } from 'models/Step00RegisterSubmitJson'
import { Step01RegisterSubmitJson } from 'models/Step01RegisterSubmitJson'
import { Step02RegisterSubmitJson } from 'models/Step02RegisterSubmitJson'
import { Step03RegisterSubmitJson } from 'models/Step03RegisterSubmitJson'
import { PaymentSubmitJson } from 'models/PaymentSubmitJson'
import { PtiRequestClient } from 'services/PtiRequestClient'
import { toastr } from 'react-redux-toastr'
import { simplePostRequest } from 'services/api'
import { PaymentRequestClient } from 'services/PaymentRequestClient'
import { change } from 'redux-form'

const apiClient = new PtiRequestClient()
const payClient = new PaymentRequestClient()

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
            'Cám ơn Quý khách. Chúng tôi sẽ liên hệ Quý khách trong thời gian sớm nhất.',
        })
      )
    }
  }
}

export const submitRegister = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      const submitValues = new Step00RegisterSubmitJson(formValue)
      const {
        status: { code },
        data: { token },
      } = await apiClient.submitRegisterStepInit(submitValues)
      if (code === 'INS201') {
        return dispatch(
          showModalWelcome({
            title: 'Chào mừng Quý Khách',
            description:
              'Cảm ơn Quý Khách đã quan tâm đến sản phẩm của VPBank. Chúng tôi sẽ liên hệ Quý Khách trong thời gian sớm nhất.',
          })
        )
      }
      sessionStorage.setItem('access_token', token)
      dispatch(push(`/pti/register/step1`))
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
      const submitValues = new PaymentSubmitJson(formValue)
      const response = await payClient.submitPaymentTransaction(submitValues)
      dispatch(
        push('/register/payment/transaction-confirm', {
          uuid: response.data,
        })
      )
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
      const submitValues = {
        uuid: formValue.uuid,
        otp: formValue.items.toString().replaceAll(',', ''),
      }
      await payClient.submitPaymentByOTP(submitValues)
      dispatch(push('/register/payment/success'))
    } catch (error) {
      baseActions.commonHandleError(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}

export const submitRetryRequestOTP = (formValues) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      await payClient.submitResentOTPPayment(formValues)
      Array.from(Array(6).keys()).forEach((index) => {
        dispatch(change('ConfirmOtpForm', `items[${index}]`, ''))
      })
      toastr.success(
        'Đã gửi lại mã OTP',
        'Quý khách vui lòng nhập lại mã OTP đã được gửi đến số điện thoại của bạn.',
        {
          timeOut: 10000,
          position: 'top-right',
        }
      )
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
