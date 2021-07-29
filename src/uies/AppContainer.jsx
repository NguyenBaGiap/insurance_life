import React, { Suspense } from 'react'
import AOS from 'aos'
import { Switch, Route } from 'react-router-dom'
import Loading from 'uies/components/_loading/Loading'
import 'static/styles/main.scss'

const LandingPage = React.lazy(() => import('redux/containers/LandingPage'))
const CustomerRegister = React.lazy(() =>
  import('redux/containers/_register/CustomerRegister')
)
const CustomerConfirmOtp = React.lazy(() =>
  import('redux/containers/_otp/CustomerConfirmOTP')
)

const ClaimInformation = React.lazy(() =>
  import('redux/containers/_info/ClaimInformation')
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
          <Route path="/pti/register" component={CustomerRegister} />
          <Route path="/pti/customer/info" component={ClaimInformation} />
          <Route path="/customer/otp" component={CustomerConfirmOtp} />
        </Switch>
        <Loading visible={this.props.requestStatus?.isLoading} />
      </Suspense>
    )
  }
}
export default AppContainer
