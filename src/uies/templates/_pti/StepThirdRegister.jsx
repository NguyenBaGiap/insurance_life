import React from 'react'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'

class StepThirdRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBannerStep />
        <Stepper
          title="Bước 3: Xác nhận thông tin đơn bảo hiểm"
          activeStep={3}
        />
      </React.Fragment>
    )
  }
}
export default StepThirdRegister
