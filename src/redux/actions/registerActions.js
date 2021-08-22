import { push, replace } from 'connected-react-router'
import * as baseActions from './baseActions'
// import moment from 'moment'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const submitRegister = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(formValue)
      await sleep(4000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(
        // replace(`/register/initial/otp?mobileNumber=${formValue.mobileNumber}`)
        push(`/pti/register/step1`)
      )
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
