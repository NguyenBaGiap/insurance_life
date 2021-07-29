import * as actionTypes from './actionTypes'

export const genRequestLoadingAction = () => ({
  type: actionTypes.UPDATE_REQUEST_STATUS,
  payload: {
    isLoading: true,
    hasError: false,
    errorMessage: '',
  },
})

export const genRequestFinishAction = () => ({
  type: actionTypes.UPDATE_REQUEST_STATUS,
  payload: {
    isLoading: false,
    hasError: false,
    errorMessage: '',
  },
})
