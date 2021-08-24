import {
  SHOW_MODAL_WELCOME_CUSTOMER,
  CLOSE_MODAL_WELCOME_CUSTOMER,
} from 'redux/actions/actionTypes'

const initialState = {
  isOpenPopupWelcomeCustomer: false,
}

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_WELCOME_CUSTOMER:
      return {
        ...state,
        isOpenPopupWelcomeCustomer: true,
      }
    case CLOSE_MODAL_WELCOME_CUSTOMER:
      return {
        ...state,
        isOpenPopupWelcomeCustomer: false,
      }

    default:
      return state
  }
}
