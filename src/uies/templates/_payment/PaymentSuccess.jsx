import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'
import paymentSuccess from 'static/img/paymentSuccess.svg'

class PaymentSuccess extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PaymentTemplate>
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
        </PaymentTemplate>
      </React.Fragment>
    )
  }
}

export default PaymentSuccess
