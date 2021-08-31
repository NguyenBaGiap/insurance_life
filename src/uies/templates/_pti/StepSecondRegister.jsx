import React from 'react'
import StepSecondForm from 'uies/forms/_pti/StepSecondForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import 'static/styles/_form.scss'

export default class StepSecondRegister extends React.Component {
  state = {
    isLoadingAmount: false,
  }
  handleLoadingAmount = () => {
    this.setState({
      isLoadingAmount: !this.state.isLoadingAmount,
    })
  }
  render() {
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
            initialValues={this.props.initialValues}
            onSubmit={this.props.onSubmit}
            isLoadingAmount={this.state.isLoadingAmount}
            handleLoadingAmount={this.handleLoadingAmount}
          />
        </section>
      </React.Fragment>
    )
  }
}
