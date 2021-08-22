import React from 'react'
import StepZeroForm from 'uies/forms/_pti/StepZeroForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import 'static/styles/_form.scss'

export default class StepZeroRegister extends React.Component {
  handleGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <React.Fragment>
        <section className="initial-step-banner">
          <AppBannerStep />
        </section>
        <section className="step-1">
          <Stepper title="Bước 1: Thông tin yêu cầu bảo hiểm" activeStep={1} />
        </section>
        <section className="initial-step-form">
          <StepZeroForm
            initialValues={this.props.initialValues}
            onSubmit={this.props.onSubmit}
            action={this.props.location.state} // KH register or advise
            handleGoBack={this.handleGoBack}
          />
        </section>
      </React.Fragment>
    )
  }
}
