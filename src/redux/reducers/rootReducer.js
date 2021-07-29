import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { requestStatusReducer } from 'redux/reducers/requestStatusReducer'

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    requestStatusReducer,
  })
