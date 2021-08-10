import React from 'react'
import StepFirstForm from 'uies/forms/_pti/StepFirstForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'

import 'static/styles/_form.scss'

export default class StepFirstRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBannerStep />
        <Stepper title="Bước 1: Thông tin yêu cầu bảo hiểm" activeStep={1} />
        <StepFirstForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
