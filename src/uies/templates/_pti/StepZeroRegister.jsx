import React from 'react'
import StepZeroForm from 'uies/forms/_pti/StepZeroForm'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import Stepper from 'uies/components/_stepper/Stepper'
import PopupWelCome from 'uies/components/_popup/PopupWelCome'
import 'static/styles/_form.scss'

export default class StepZeroRegister extends React.Component {
  constructor(props) {
    super(props)
    const {
      location: { state },
    } = props
    if (state && state.target === 'advise') {
      this.state = {
        titleForm: 'Thông tin người yêu cầu tư vấn',
        titleStep: 'Thông tin yêu cầu tư vấn',
        labelSubmit: 'Tư vấn',
        isShowStep: false,
      }
    } else {
      this.state = {
        titleForm: 'Thông tin Người mua bảo hiểm',
        titleStep: 'Bước 1: Thông tin yêu cầu bảo hiểm',
        labelSubmit: 'Tiếp tục',
        isShowStep: true,
      }
    }
  }
  componentDidMount() {
    this.props.fetchInitialValues()
  }

  handleGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    const {
      isOpenPopupWelcomeCustomer,
      initialValues,
      onSubmit,
      location: { state },
    } = this.props
    const { titleForm, titleStep, labelSubmit, isShowStep } = this.state
    return (
      <React.Fragment>
        <section className="initial-step-banner">
          <AppBannerStep />
        </section>
        <section className="step-1">
          <Stepper title={titleStep} activeStep={1} isShowStep={isShowStep} />
        </section>
        <section className="initial-step-form">
          <StepZeroForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            initialState={state} // KH register or advise
            handleGoBack={this.handleGoBack}
            title={titleForm}
            labelSubmit={labelSubmit}
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
