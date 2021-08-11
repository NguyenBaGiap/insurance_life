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
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(4000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(replace('/register/initial/otp'))
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
      // dispatch(push('/pti/register/step3'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
