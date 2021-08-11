import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, emailFormat } from 'utilities/validate'
import { RELATIONSHIP_OPTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'

function StepZeroForm({ handleSubmit }) {
  const styleCustom = {
    minHeight: 120,
  }
  return (
    <form autoComplete="off" className="container mt-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 col-sm-12 title-form pb-3 pt-3">
          <h3>Thông tin khách hàng</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3" style={styleCustom}>
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
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3" style={styleCustom}>
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
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3" style={styleCustom}>
          <Field
            name="mobileNumber"
            label="Số điện thoại"
            type="text"
            validate={[required]}
            //loading
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3" style={styleCustom}>
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
        <div className="col-md-12 col-sm-12 title-form pt-3 pb-3">
          <h3>Bạn muốn mua bảo hiểm cho</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3" style={styleCustom}>
          <Field
            name="relationshipWithInsurer"
            label="Mối quan hệ với người yêu cầu"
            validate={[required]}
            //loading
            required
            component={SimpleSelectField}
            selectableValues={RELATIONSHIP_OPTION}
          />
        </div>
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
export default reduxForm({
  form: 'StepZeroForm',
})(StepZeroForm)
