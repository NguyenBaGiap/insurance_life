import React from 'react'
import StepTwoForm from 'uies/forms/_pti/StepTwoForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import 'static/styles/_form.scss'

export default class StepTwoRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBannerStep />
        <StepTwoForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
