import * as actionTypes from './actionTypes'
import { CustomException, ExceptionResponse } from 'services/api'
import { toastr } from 'react-redux-toastr'
import { push } from 'connected-react-router'

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

export const commonHandleError = (error, dispatch) => {
  console.log(error)
  if (error instanceof CustomException) {
    toastr.error('Có lỗi xảy ra', error.message)
  }
  if (error instanceof ExceptionResponse) {
    if (error.status === 401) {
      sessionStorage.removeItem('access_token')
      dispatch(push('/pti/register/step0?product=1'))
      toastr.error(
        'Thông báo',
        'Phiên làm việc của bạn đã hết hạn, vui lòng đăng kí lại.'
      )
    } else {
      toastr.error('Có lỗi xảy ra', error.data)
    }
  }
}
