import React from 'react'
import PaymentTemplate from 'uies/templates/_payment/PaymentTemplate'

class PaymentTimeout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PaymentTemplate>
          <div className="note-success text-center pt-5 d-flex flex-column pb-5">
            <h3 className="font-weight-bold mb-4">
              Giao dịch đang được xử lý !
            </h3>
            <h4>
              Trong trường hợp cần được hỗ trợ, Quý khách vui lòng liên hệ
              hotline 1900 54 54 15.
            </h4>
            <h4>Cám ơn Quý khách!</h4>
          </div>
        </PaymentTemplate>
      </React.Fragment>
    )
  }
}

export default PaymentTimeout
