import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { requestStatusReducer } from 'redux/reducers/requestStatusReducer'
import { popupReducer } from 'redux/reducers/popupReducer'

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    toastr: toastrReducer,
    requestStatusReducer,
    popupReducer,
  })
