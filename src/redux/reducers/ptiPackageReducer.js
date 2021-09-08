import { SET_PTI_PACKAGE_REQUEST } from 'redux/actions/actionTypes'

const initialState = {
  options: [],
}

export const ptiPackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PTI_PACKAGE_REQUEST:
      return {
        ...state,
        options: [...action.payload],
      }

    default:
      return state
  }
}
