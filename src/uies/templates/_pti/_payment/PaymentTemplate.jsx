import React from 'react'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import 'static/styles/_form.scss'

class PaymentTemplate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="pay-banner">
          <AppBannerStep />
        </section>
        <section className="pay-step">
          <Stepper title="Bước 4: Thanh toán" activeStep={4} />
        </section>
        <section className="pay-content-step">{this.props.children}</section>
      </React.Fragment>
    )
  }
}
export default PaymentTemplate
