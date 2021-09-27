import React from 'react'
import StepSecondForm from 'uies/forms/_pti/StepSecondForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import 'static/styles/_form.scss'

export default class StepSecondRegister extends React.Component {
  componentDidMount() {
    this.props.fetchInitialValues()
  }

  handleGoBack = () => {
    this.props.history.push('/pti/register/step1')
  }
  render() {
    const {
      isParticipation,
      initialValues,
      insurancePackage,
      onSubmit,
      currentFormValues,
    } = this.props
    return (
      <React.Fragment>
        <section>
          <AppBannerStep />
        </section>
        <section>
          <Stepper title="Bước 2: Chọn gói bảo hiểm" activeStep={2} />
        </section>
        <section>
          <StepSecondForm
            initialValues={initialValues}
            insurancePackage={insurancePackage}
            onSubmit={onSubmit}
            isParticipation={isParticipation}
            currentFormValues={currentFormValues}
            handleGoBack={this.handleGoBack}
          />
        </section>
      </React.Fragment>
    )
  }
}
