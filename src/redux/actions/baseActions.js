import * as actionTypes from './actionTypes'
import { CustomException, ExceptionResponse } from '../../services/api'
import { toastr } from 'react-redux-toastr'

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

export const commonHandleError = (error) => {
  console.log(error)
  if (error instanceof CustomException) {
    toastr.error('Có lỗi xảy ra', error.message)
  }
  if (error instanceof ExceptionResponse) {
    toastr.error('Có lỗi xảy ra', error.data)
  }
}
