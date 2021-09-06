import React from 'react'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import StepThirdForm from 'uies/forms/_pti/StepThirdForm'
import 'static/styles/_form.scss'

class StepThirdRegister extends React.Component {
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
    return (
      <React.Fragment>
        <AppBannerStep />
        <Stepper
          title="Bước 3: Xác nhận thông tin đơn bảo hiểm"
          activeStep={3}
        />
        <StepThirdForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
          handleGoBack={this.handleGoBack}
          isLoadingAmount={this.state.isLoadingAmount}
          handleLoadingAmount={this.handleLoadingAmount}
        />
      </React.Fragment>
    )
  }
}
export default StepThirdRegister
