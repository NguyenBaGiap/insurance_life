import React from 'react'
import RegisterForm from 'uies/forms/RegisterForm'
import 'static/styles/_register.scss'

export default class CustomerRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RegisterForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
