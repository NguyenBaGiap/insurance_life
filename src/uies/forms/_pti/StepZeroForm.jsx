import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  required,
  emailFormat,
  normalizeNumber,
  length10,
  maxLength12,
} from 'utilities/validate'
import { RELATIONSHIP_OPTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'

class StepZeroForm extends React.Component {
  render() {
    const { handleSubmit, handleGoBack, initialState } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-3"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form pt-3">
            <h3>Thông tin Người mua bảo hiểm</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="cusName"
              label="Tên khách hàng"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="legalId"
              label="Số Hộ chiếu / CMND"
              type="text"
              validate={[required, maxLength12]}
              normalize={normalizeNumber}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="phone"
              label="Số điện thoại"
              normalize={normalizeNumber}
              type="text"
              validate={[required, length10]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="email"
              label="Địa chỉ email"
              type="text"
              validate={[required, emailFormat]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
        </div>
        {initialState && initialState.target !== 'advise' && (
          <div className="row">
            <div className="col-md-12 col-sm-12 title-form">
              <h3>Bạn muốn mua bảo hiểm cho</h3>
            </div>
            <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
              <Field
                name="relationship"
                label="Mối quan hệ với người yêu cầu"
                validate={[required]}
                placeholder="Chọn người được bảo hiểm"
                required
                component={SimpleSelectField}
                selectableValues={RELATIONSHIP_OPTION}
              />
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-md-12 col-sm-12 btn-action pb-5">
            <button
              type="button"
              className="btn-back mr-3"
              onClick={handleGoBack}
            >
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
  form: 'StepZeroForm',
})(StepZeroForm)
