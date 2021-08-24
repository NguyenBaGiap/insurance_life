import {
  SHOW_MODAL_NEW_CUSTOMER,
  CLOSE_MODAL_NEW_CUSTOMER,
} from 'redux/actions/actionTypes'

const initialState = {
  isOpenPopupNewCustomer: false,
}

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_NEW_CUSTOMER:
      return {
        ...state,
        isOpenPopupNewCustomer: true,
      }
    case CLOSE_MODAL_NEW_CUSTOMER:
      return {
        ...state,
        isOpenPopupNewCustomer: true,
      }

    default:
      return state
  }
}
