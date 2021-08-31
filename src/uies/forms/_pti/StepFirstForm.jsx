import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  normalizeDate,
  pid,
  required,
  normalizeNumber,
} from 'utilities/validate'
import { GENDER_OPTION, RELATIONSHIP_OPTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'

function StepFirstForm({ handleGoBack, handleSubmit }) {
  return (
    <form autoComplete="off" className="container mt-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 col-sm-12 title-form pt-3">
          <h3>Thông tin về Người được bảo hiểm</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
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
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="cusName"
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
            selectableValues={GENDER_OPTION}
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="birth"
            label="Ngày sinh"
            component={SimpleDateField}
            validate={[required]}
            normalize={normalizeDate}
            required
          />
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="legalId"
            label="Số Hộ chiếu / CMND"
            validate={[required, pid]}
            normalize={normalizeNumber}
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-9 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="address"
            label="Địa chỉ liên hệ"
            type="text"
            validate={[required]}
            //loading
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-12 col-sm-12 title-form pt-3">
          <h3>Thông tin cán bộ bán</h3>
        </div>
        <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
          <Field
            name="daoSale"
            label="Mã DAO"
            type="text"
            validate={[]}
            //loading
            component={SimpleTextField}
          />
        </div>
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
export default reduxForm({
  form: 'StepFirstForm',
})(StepFirstForm)
