import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'utilities/validate'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import SimpleCheckBoxField from '../../components/_field/SimpleCheckBoxField'

function StepTwoForm({ handleSubmit }) {
  return (
    <form autoComplete="off" className="container mt-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 col-sm-12 title-form pb-3 pt-3">
          <h3>Chọn gói bảo hiểm</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
          <Field
            name="insurancePackage"
            label="Gói bảo hiểm"
            validate={[required]}
            //loading
            required
            component={SimpleSelectField}
            selectableValues={[
              { value: 'gold', label: 'Gói vàng' },
              { value: 'silver', label: 'Gói bạc' },
              { value: 'diamond', label: 'Gói kim cương' },
            ]}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
          <Field
            name="dateActive"
            label="Ngày hiệu lực"
            component={SimpleDateField}
            validate={[required]}
            required
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
          <Field
            name="mobileNumber"
            label="Tổng số tiền"
            type="text"
            validate={[]}
            disabled
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-12 col-sm-12 pt-sm-3 pt-md-3">
          <Field
            name="checkbox"
            component={SimpleCheckBoxField}
            label="Xuất hóa đơn VAT"
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
  form: 'StepTwoForm',
})(StepTwoForm)
