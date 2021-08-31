import React from 'react'
import StepZeroForm from 'uies/forms/_pti/StepZeroForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import PopupWelCome from 'uies/components/_popup/PopupWelCome'
import 'static/styles/_form.scss'

export default class StepZeroRegister extends React.Component {
  componentDidMount() {
    sessionStorage.clear()
  }

  handleGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    const { isOpenPopupWelcomeCustomer, initialValues, onSubmit } = this.props
    return (
      <React.Fragment>
        <section className="initial-step-banner">
          <AppBannerStep />
        </section>
        <section className="step-1">
          <Stepper title="Bước 1: Thông tin yêu cầu bảo hiểm" activeStep={1} />
        </section>
        <section className="initial-step-form">
          <StepZeroForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            initialState={this.props.location.state} // KH register or advise
            handleGoBack={this.handleGoBack}
          />
        </section>
        <section className="popup-welcome">
          <PopupWelCome
            isOpen={isOpenPopupWelcomeCustomer}
            handleCloseModal={this.props.closePopupWelcome}
          />
        </section>
      </React.Fragment>
    )
  }
}
