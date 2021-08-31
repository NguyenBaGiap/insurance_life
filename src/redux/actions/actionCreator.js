import * as actionTypes from './actionTypes'

export const showModalWelcome = () => ({
  type: actionTypes.SHOW_MODAL_WELCOME_CUSTOMER,
})

export const closeModalWelcome = () => ({
  type: actionTypes.CLOSE_MODAL_WELCOME_CUSTOMER,
})

// form
export const fetchInitialValuesForm = (data) => ({
  type: actionTypes.SET_INITIAL_VALUES_FORM_REQUEST,
  payload: { ...data },
})
