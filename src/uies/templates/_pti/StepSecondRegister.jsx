import React from 'react'
import StepSecondForm from 'uies/forms/_pti/StepSecondForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import 'static/styles/_form.scss'

export default class StepSecondRegister extends React.Component {
  state = {
    isLoadingAmount: false,
  }
  componentDidMount() {
    this.props.fetchInitialValues()
  }

  handleGoBack = () => {
    this.props.history.goBack()
  }
  handleLoadingAmount = () => {
    this.setState({
      isLoadingAmount: !this.state.isLoadingAmount,
    })
  }
  render() {
    const { isParticipation, initialValues, insurancePackage, onSubmit } =
      this.props
    const { isLoadingAmount } = this.state
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
            isLoadingAmount={isLoadingAmount}
            isParticipation={isParticipation}
            handleLoadingAmount={this.handleLoadingAmount}
            handleGoBack={this.handleGoBack}
          />
        </section>
      </React.Fragment>
    )
  }
}
