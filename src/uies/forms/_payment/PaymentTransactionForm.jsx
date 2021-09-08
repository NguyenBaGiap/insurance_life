import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'utilities/validate'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleTextField from 'uies/components/_field/SimpleTextField'

class PaymentTransactionForm extends React.Component {
  render() {
    const { initialValues, handleSubmit } = this.props
    console.log(initialValues)
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
              name="accountPayment"
              label="Chọn tài khoản nguồn"
              placeholder="Chọn tài khoản nguồn"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={initialValues.optionPayment}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="accountName"
              label="Tên chủ tài khoản"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3>Thông tin giao dịch</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="price"
              label="Tổng số tiền"
              type="text"
              validate={[required]}
              //loading
              disabled
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-9 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="numberContract"
              label="Số tham chiếu"
              type="text"
              validate={[required]}
              disabled
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-12 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="remark"
              label="Nội dung thanh toán"
              type="text"
              validate={[required]}
              disabled
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
  enableReinitialize: true,
})(PaymentTransactionForm)
