import React from 'react'
import StepFirstForm from 'uies/forms/_pti/StepFirstForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import 'static/styles/_form.scss'

export default class StepFirstRegister extends React.Component {
  handleGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <React.Fragment>
        <section className="banner-step-1">
          <AppBannerStep />
        </section>
        <section className="step-1">
          <Stepper title="Bước 1: Thông tin yêu cầu bảo hiểm" activeStep={1} />
        </section>
        <section className="form-step-1">
          <StepFirstForm
            initialValues={this.props.initialValues}
            onSubmit={this.props.onSubmit}
            handleGoBack={this.handleGoBack}
          />
        </section>
      </React.Fragment>
    )
  }
}
