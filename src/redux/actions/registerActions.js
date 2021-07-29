import { push } from 'connected-react-router'
import * as baseActions from './baseActions'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const submitRegister = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(5000)
      dispatch(baseActions.genRequestFinishAction())
      dispatch(push('/'))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
