import React, { Suspense } from 'react'
import AOS from 'aos'
import { Switch, Route } from 'react-router-dom'
import 'static/styles/main.scss'

const LandingPage = React.lazy(() => import('redux/containers/LandingPage'))
const CustomerRegister = React.lazy(() =>
  import('uies/templates/_step0/CustomerRegisterStep0')
)

class AppContainer extends React.Component {
  componentDidMount() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      delay: 200,
      disable() {
        return window.innerWidth < 621
      },
      //startEvent: 'DOMContentLoaded',
    })
    window.onload = function () {
      AOS.refresh()
    }
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/customer/register" component={CustomerRegister} />
        </Switch>
      </Suspense>
    )
  }
}
export default AppContainer
