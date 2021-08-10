import React, { Suspense } from 'react'
import AOS from 'aos'
import { Switch, Route } from 'react-router-dom'
import Loading from 'uies/components/_loading/Loading'
import 'static/styles/main.scss'

const LandingPage = React.lazy(() => import('redux/containers/LandingPage'))
const CustomerConfirmOtp = React.lazy(() =>
  import('redux/containers/_otp/CustomerConfirmOTP')
)
const StepZeroRegister = React.lazy(() =>
  import('redux/containers/_pti/StepZeroRegister')
)

const StepOneRegister = React.lazy(() =>
  import('redux/containers/_pti/StepFirstRegister')
)

const StepTwoRegister = React.lazy(() =>
  import('redux/containers/_pti/StepSecondRegister')
)

const PaymentSuccess = React.lazy(() => import('uies/templates/PaymentSuccess'))

class AppContainer extends React.Component {
  componentDidMount() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      delay: 200,
      // disable() {
      //   return window.innerWidth < 621
      // },
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
          <Route path="/pti/register/step0" component={StepZeroRegister} />
          <Route path="/pti/register/step1" component={StepOneRegister} />
          <Route path="/pti/register/step2" component={StepTwoRegister} />
          <Route path="/register/payment/success" component={PaymentSuccess} />
          <Route
            path="/pti/register/customer/otp"
            component={CustomerConfirmOtp}
          />
        </Switch>
        <Loading visible={this.props.requestStatus?.isLoading} />
      </Suspense>
    )
  }
}
export default AppContainer
