import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  required,
  emailFormat,
  normalizePhone,
  length10,
} from 'utilities/validate'
import { RELATIONSHIP_OPTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'

class StepZeroForm extends React.Component {
  render() {
    const styleCustom = {
      minHeight: 120,
    }
    const { handleSubmit, handleGoBack, action } = this.props
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
          <div
            className="col-md-3 col-sm-12 pt-sm-3 pt-md-3"
            style={styleCustom}
          >
            <Field
              name="fullName"
              label="Tên khách hàng"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div
            className="col-md-3 col-sm-12 pt-sm-3 pt-md-3"
            style={styleCustom}
          >
            <Field
              name="pid"
              label="Số Hộ chiếu / CMND"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div
            className="col-md-3 col-sm-12 pt-sm-3 pt-md-3"
            style={styleCustom}
          >
            <Field
              name="mobileNumber"
              label="Số điện thoại"
              normalize={normalizePhone}
              type="text"
              validate={[required, length10]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div
            className="col-md-3 col-sm-12 pt-sm-3 pt-md-3"
            style={styleCustom}
          >
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
        {action !== 'advise' && (
          <div className="row">
            <div className="col-md-12 col-sm-12 title-form">
              <h3>Bạn muốn mua bảo hiểm cho</h3>
            </div>
            <div
              className="col-md-3 col-sm-12 pt-sm-3 pt-md-3"
              style={styleCustom}
            >
              <Field
                name="relationshipWithInsurer"
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
