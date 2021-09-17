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
        titleBanner: 'Đăng ký tư vấn Bảo hiểm Bệnh hiểm nghèo',
        titleForm: 'Thông tin Người đăng ký tư vấn',
        titleStep: 'Thông tin đăng ký tư vấn',
        labelSubmit: 'Tư vấn',
        isShowStep: false,
      }
    } else {
      this.state = {
        titleBanner: 'Đăng ký mua Bảo hiểm Bệnh hiểm nghèo',
        titleForm: 'Thông tin Người mua bảo hiểm',
        titleStep: 'Bước 1: Thông tin yêu cầu bảo hiểm',
        labelSubmit: 'Tiếp tục',
        isShowStep: true,
      }
    }
  }
  componentDidMount() {
    const params = this.props.location.search
    const searchParams = new URLSearchParams(params)
    const productId = searchParams.get('product')
    if (productId) {
      this.props.fetchInitialValues(params)
    } else {
      this.props.history.push('/')
    }
  }

  handleGoBack = () => {
    this.props.history.push('/')
  }
  render() {
    const {
      popupWelcomeCustomer: { isOpen, title, description },
      initialValues,
      onSubmit,
      location: { state },
      isParticipation,
    } = this.props
    const { titleBanner, titleForm, titleStep, labelSubmit, isShowStep } =
      this.state
    return (
      <React.Fragment>
        <section className="initial-step-banner">
          <AppBannerStep title={titleBanner} />
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
            isParticipation={isParticipation}
          />
        </section>
        <section className="popup-welcome">
          <PopupWelCome
            isOpen={isOpen}
            title={title}
            description={description}
            handleCloseModal={this.props.closePopupWelcome}
          />
        </section>
      </React.Fragment>
    )
  }
}
