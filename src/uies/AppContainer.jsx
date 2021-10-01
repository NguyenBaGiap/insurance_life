import React, { Suspense } from 'react'
import AOS from 'aos'
import { Switch, Route } from 'react-router-dom'
import Loading from 'uies/components/_loading/Loading'
import 'static/styles/main.scss'
import ReduxToastr from 'react-redux-toastr'

const LandingPage = React.lazy(() => import('redux/containers/LandingPage'))

const StepZeroRegister = React.lazy(() =>
  import('redux/containers/_pti/StepZeroRegister')
)

const StepOneRegister = React.lazy(() =>
  import('redux/containers/_pti/StepFirstRegister')
)

const StepTwoRegister = React.lazy(() =>
  import('redux/containers/_pti/StepSecondRegister')
)

const StepThirdRegister = React.lazy(() =>
  import('redux/containers/_pti/StepThirdRegister')
)

const PaymentLoginNEO = React.lazy(() =>
  import('redux/containers/_payment/PaymentLoginNEO')
)

const PaymentTransaction = React.lazy(() =>
  import('redux/containers/_payment/PaymentTransaction')
)

const PaymentConfirmTransaction = React.lazy(() =>
  import('redux/containers/_payment/PaymentConfirmTransaction')
)

const PaymentSuccess = React.lazy(() =>
  import('uies/templates/_payment/PaymentSuccess')
)
const PaymentTimeout = React.lazy(() =>
  import('uies/templates/_payment/PaymentTimeout')
)
class AppContainer extends React.Component {
  componentDidMount() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      delay: 200,
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
          <Route path="/pti/register/step3" component={StepThirdRegister} />
          <Route path="/register/payment/login" component={PaymentLoginNEO} />
          <Route
            path="/register/payment/transaction"
            component={PaymentTransaction}
          />
          <Route
            path="/register/payment/transaction-confirm"
            component={PaymentConfirmTransaction}
          />
          <Route
            path="/register/payment/success-pending"
            component={PaymentTimeout}
          />
          <Route path="/register/payment/success" component={PaymentSuccess} />
          <Route component={NoMatch} />
        </Switch>
        <Loading visible={this.props.requestStatus?.isLoading} />
        <ReduxToastr
          timeOut={5000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </Suspense>
    )
  }
}
const NoMatch = (props) => {
  React.useEffect(() => {
    props.history.push('/')
  })
  return null
}
export default AppContainer
