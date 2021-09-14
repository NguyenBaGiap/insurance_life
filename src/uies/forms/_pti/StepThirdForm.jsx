import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { GENDER_OPTION, RELATIONSHIP_OPTION } from 'utilities/constants'
import dots from 'static/img/_intro/dot.svg'
import editIcon from 'static/img/editIcon.svg'
import {
  required,
  email,
  mobileNumber,
  normalizeDate,
  normalizeNumber,
  maxLength10,
  maxLength15,
  normalizeMoney,
} from 'utilities/validate'
import { asyncValidateRegisterStep } from 'utilities/asyncValidate'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import SimpleCheckBoxField from 'uies/components/_field/SimpleCheckBoxField'

class StepThirdForm extends React.Component {
  state = {
    enableEdit: false,
  }
  handleAllowEdit = () => {
    this.setState({ enableEdit: true })
  }
  render() {
    const { enableEdit } = this.state
    const { handleSubmit, handleGoBack, isLoadingAmount, insurancePackage } =
      this.props
    return (
      <form
        autoComplete="off"
        className="container mt-5"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form d-flex justify-content-between">
            <h3 className="pr-3 ">Thông tin về Người mua bảo hiểm</h3>
            <button
              className="btn d-flex"
              type="button"
              onClick={this.handleAllowEdit}
            >
              <img src={editIcon} alt="edit-info" className="pr-3" />
              Sửa thông tin
            </button>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="cusName"
              label="Tên khách hàng"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="cusLegalId"
              label="SỐ HỘ CHIẾU / CMND / CCCD "
              type="text"
              validate={[required, maxLength15]}
              //loading
              required
              component={SimpleTextField}
              disabled
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="cusPhone"
              label="Số điện thoại"
              type="text"
              normalize={normalizeNumber}
              validate={[required, mobileNumber, maxLength10]}
              //loading
              required
              component={SimpleTextField}
              disabled
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="cusEmail"
              label="Địa chỉ email"
              type="text"
              validate={[required, email]}
              //loading
              required
              component={SimpleTextField}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 d-flex pt-4">
            <h3 className="pr-3">Thông tin về Người được bảo hiểm</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="relationship"
              label="Mối quan hệ với Người mua bảo hiểm"
              validate={[required]}
              placeholder="Chọn người được bảo hiểm"
              required
              component={SimpleSelectField}
              selectableValues={RELATIONSHIP_OPTION}
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="personName"
              label="Người Được bảo hiểm"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="personGender"
              label="Giới tính"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={GENDER_OPTION}
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="personBirth"
              label="Ngày sinh"
              component={SimpleDateField}
              validate={[required]}
              normalize={normalizeDate}
              required
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="personLegalId"
              label="SỐ HỘ CHIẾU / CMND / CCCD "
              type="text"
              validate={[required, maxLength15]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-9 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="personAddress"
              label="Địa chỉ liên hệ"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEdit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 d-flex pt-4">
            <h3 className="pr-3">Thông tin về gói bảo hiểm</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="tierId"
              label="Gói bảo hiểm"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={insurancePackage}
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="effectiveDate"
              label="Ngày hiệu lực"
              component={SimpleDateField}
              min={new Date()}
              validate={[required]}
              normalize={normalizeDate}
              required
              disabled={!enableEdit}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 price-field">
            <Field
              name="price"
              label="Tổng số tiền"
              type="text"
              loading={isLoadingAmount}
              normalize={normalizeMoney}
              disabled
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-12 col-sm-12">
            <Field
              name="exportBill"
              component={SimpleCheckBoxField}
              label="Xuất hóa đơn VAT"
              disabled={!enableEdit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 pt-5">
            <h3>Tóm tắt Quyền lợi bảo hiểm</h3>
          </div>
          <div className="col-md-12 col-sm-12">
            <p className="p-3" style={{ fontSize: 'medium' }}>
              <img src={dots} alt="dots" className="pr-3" />
              Nhận ngay <strong>100% Số tiền bảo hiểm</strong> khi không may mắc
              bệnh hiểm nghèo.
            </p>
          </div>
        </div>
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
  form: 'StepThirdForm',
  validate: asyncValidateRegisterStep,
  asyncChangeFields: [
    'price',
    'tierId',
    'priceId',
    'effectiveDate',
    'personBirth',
  ],
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StepThirdForm)
