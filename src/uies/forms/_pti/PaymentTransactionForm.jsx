import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'utilities/validate'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleTextField from 'uies/components/_field/SimpleTextField'

class PaymentTransactionForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-5 form-neo-pay"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3>Lựa chọn tài khoản thanh toán</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="accountNumber"
              label="Chọn tài khoản nguồn"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={[{ label: '1', value: '1' }]}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="accountName"
              label="Tên tài khoản"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3>Thông tin giao dịch</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="totalMoney"
              label="Tổng số tiền"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-9 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="totalMoneyText"
              label="Tổng số tiền (Bằng chữ)"
              type="text"
              validate={[required]}
              //loading
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-12 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="contentTransaction"
              label="Nội dung thanh toán"
              type="text"
              validate={[required]}
              //loading
              component={SimpleTextField}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 btn-action pb-5">
            <button type="button" className="btn-back mr-3">
              Quay lại
            </button>
            <button type="submit" className="btn-submit">
              Tiếp tục
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PaymentTransactionForm',
})(PaymentTransactionForm)
