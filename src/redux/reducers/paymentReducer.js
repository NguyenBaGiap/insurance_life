import { SET_PAYMENT_DATA_REQUEST } from 'redux/actions/actionTypes'

const initialState = {
  paymentInformation: {},
}

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT_DATA_REQUEST:
      return {
        ...state,
        paymentInformation: { ...action.payload },
      }

    default:
      return state
  }
}
