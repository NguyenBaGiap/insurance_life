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
          <div className="note-success text-center pt-5 d-flex flex-column pb-5">
            <h3 className="font-weight-bold mb-4">
              Chúc mừng Quý khách đã thanh toán thành công!
            </h3>
            <h4>
              Giấy chứng nhận bảo hiểm sẽ được gửi tới email của Quý khách.
            </h4>
            <h4>
              Trong trường hợp không nhận được email thông báo trong vòng 24
              giờ, Quý khách vui lòng liên hệ hotline 1900 54 54 15.
            </h4>
            <h4>Cám ơn Quý khách!</h4>
          </div>
        </PaymentTemplate>
      </React.Fragment>
    )
  }
}

export default PaymentSuccess
