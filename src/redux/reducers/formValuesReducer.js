import { SET_INITIAL_VALUES_FORM_REQUEST } from '../actions/actionTypes'

const initialState = {
  initialValues: {},
} // initialValues in form

export const formValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_VALUES_FORM_REQUEST:
      return {
        ...state,
        initialValues: { ...action.payload },
      }
    default:
      return state
  }
}
