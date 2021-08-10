import React from 'react'
import StepOneForm from 'uies/forms/_pti/StepOneForm'
import AppHeader from 'uies/components/_header/AppHeader'
import 'static/styles/_form.scss'

export default class StepOneRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <StepOneForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
