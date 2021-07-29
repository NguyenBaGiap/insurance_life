import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { emailFormat, required } from 'utilities/validate'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import 'static/styles/_form.scss'

function ClainInformationForm({ handleSubmit }) {
  return (
    <form autoComplete="off" className="container mt-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 col-sm-12 title-form pb-3 pt-3">
          <h3>Thông tin về Người mua bảo hiểm</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="fullName"
            label="Người yêu cầu bảo hiểm"
            type="text"
            validate={[required]}
            //loading
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
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
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
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
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
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
        <div className="col-md-12 col-sm-12 title-form pb-3 pt-3">
          <h3>Thông tin về Người được bảo hiểm</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="relationshipWithInsurer"
            label="Mối quan hệ với người yêu cầu"
            validate={[required]}
            //loading
            required
            component={SimpleSelectField}
            selectableValues={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="pid"
            label="Người Được bảo hiểm"
            type="text"
            validate={[required]}
            //loading
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="gender"
            label="Giới tính"
            validate={[required]}
            //loading
            required
            component={SimpleSelectField}
            selectableValues={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="gender"
            label="Ngày sinh"
            validate={[required]}
            required
            component={SimpleDateField}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
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
        <div className="col-md-9 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="pid"
            label="Địa chỉ liên hệ"
            type="text"
            validate={[required]}
            //loading
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-12 col-sm-12 title-form pt-3 pb-3">
          <h3>Thông tin cán bộ bán</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="pid"
            label="Mã DAO"
            type="text"
            validate={[required]}
            //loading
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-12 col-sm-12 btn-action">
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
  form: 'ClainInformationForm',
})(ClainInformationForm)
