import {
  SHOW_MODAL_WELCOME_CUSTOMER,
  CLOSE_MODAL_WELCOME_CUSTOMER,
} from 'redux/actions/actionTypes'

const initialState = {
  popupWelcomeCustomer: {
    isOpen: false,
    title: 'Chào mừng Quý Khách',
    description:
      'Cảm ơn Quý Khách đã quan tâm đến sản phẩm của VPBank. Chúng tôi sẽ\n' +
      '            liên hệ và tư vấn cho Quý Khách trong thời gian sớm nhất.',
  },
}

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_WELCOME_CUSTOMER:
      return {
        ...state,
        popupWelcomeCustomer: {
          isOpen: true,
          ...action.payload,
        },
      }
    case CLOSE_MODAL_WELCOME_CUSTOMER:
      return {
        ...state,
        popupWelcomeCustomer: {
          isOpen: false,
          ...action.payload,
        },
      }

    default:
      return state
  }
}
