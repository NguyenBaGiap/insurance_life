import * as actionTypes from './actionTypes'

export const showModalWelcome = (data) => ({
  type: actionTypes.SHOW_MODAL_WELCOME_CUSTOMER,
  payload: { ...data },
})

export const closeModalWelcome = (data) => ({
  type: actionTypes.CLOSE_MODAL_WELCOME_CUSTOMER,
  payload: { ...data },
})

// form
export const fetchInitialValuesForm = (data) => ({
  type: actionTypes.SET_INITIAL_VALUES_FORM_REQUEST,
  payload: { ...data },
})
// pti package
export const fetchPtiPackages = (data) => ({
  type: actionTypes.SET_PTI_PACKAGE_REQUEST,
  payload: [...data],
})
// payment information
export const fetchPaymentInformation = (data) => ({
  type: actionTypes.SET_PAYMENT_DATA_REQUEST,
  payload: { ...data },
})
