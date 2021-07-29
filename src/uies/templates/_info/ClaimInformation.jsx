import React from 'react'
import ClainInformationForm from 'uies/forms/ClaimInformationForm'

export default class ClaimInformation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ClainInformationForm
          initialValues={this.props.initialValues}
          onSubmit={this.props.onSubmit}
        />
      </React.Fragment>
    )
  }
}
