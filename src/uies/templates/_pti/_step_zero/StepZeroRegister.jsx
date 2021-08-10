import React from 'react'
import StepZeroForm from 'uies/forms/_pti/StepZeroForm'
import 'static/styles/_form.scss'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'

export default class StepZeroRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBannerStep />
        <StepZeroForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
