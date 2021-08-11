import React from 'react'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import StepThirdForm from 'uies/forms/_pti/StepThirdForm'
import 'static/styles/_form.scss'

class StepThirdRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBannerStep />
        <Stepper
          title="Bước 3: Xác nhận thông tin đơn bảo hiểm"
          activeStep={3}
        />
        <StepThirdForm onSubmit={this.props.onSubmit} />
      </React.Fragment>
    )
  }
}
export default StepThirdRegister
