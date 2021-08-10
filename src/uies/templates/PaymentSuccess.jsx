import React from 'react'
import AppBannerStep from 'uies/components/_banner/AppBannerStep'
import paymentSuccess from 'static/img/paymentSuccess.svg'
import Stepper from 'uies/components/_stepper/Stepper'

class PaymentSuccess extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="banner-payment">
          <AppBannerStep />
        </section>
        <section className="step-payment">
          <Stepper title="Bước 4: Thanh toán" activeStep={4} />
        </section>
        <section className="content-page">
          <div className="img-fluid d-flex justify-content-center pt-5">
            <img src={paymentSuccess} alt="img-success" />
          </div>
          <div className="note text-center pt-5 d-flex flex-column pb-5">
            <h3 className="font-weight-bold">
              Quý khách đã thanh toán thành công.
            </h3>
            <h4>
              Giấy chứng nhận và thông báo bảo hiểm sẽ được gửi tới email của
              Quý khách.
            </h4>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default PaymentSuccess
