import React from 'react'
import StepZeroForm from 'uies/forms/StepZeroForm'
import 'static/styles/_form.scss'

export default class StepZeroRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StepZeroForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
