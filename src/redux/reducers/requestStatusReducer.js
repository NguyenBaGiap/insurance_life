import { UPDATE_REQUEST_STATUS } from 'redux/actions/actionTypes'

export const requestStatusReducer = (
  state = {
    hasError: false,
    errorMessage: '',
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_REQUEST_STATUS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
