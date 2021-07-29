import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import AppContainer from 'redux/containers/AppContainer'
import { configureStore, history } from 'redux/store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-widgets/styles.css'

const App = withRouter(AppContainer)

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <App />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
