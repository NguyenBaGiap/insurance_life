import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  GENDER_OPTION,
  PACKAGE_OPTION,
  RELATIONSHIP_OPTION,
} from 'utilities/constants'
import dots from 'static/img/_intro/dot.svg'
import editIcon from 'static/img/editIcon.svg'
import {
  required,
  emailFormat,
  normalizeDate,
  normalizePhone,
  maxLength10,
} from 'utilities/validate'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import SimpleCheckBoxField from 'uies/components/_field/SimpleCheckBoxField'

class StepThirdForm extends React.Component {
  state = {
    enableEditPolicyholders: false,
    enableEditProtectedPerson: false,
    enableEditPackageIns: false,
  }
  handleAllowEditProtectedPerson = () => {
    this.setState({ enableEditProtectedPerson: true })
  }
  handleAllowEditPackageIns = () => {
    this.setState({ enableEditPackageIns: true })
  }
  handleAllowEditPolicyholders = () => {
    this.setState({ enableEditPolicyholders: true })
  }
  render() {
    const {
      enableEditPolicyholders,
      enableEditProtectedPerson,
      enableEditPackageIns,
    } = this.state
    const { handleSubmit } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-5"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form d-flex">
            <h3 className="pr-3 ">Thông tin về Người mua bảo hiểm</h3>
            <button
              className="btn d-flex"
              onClick={this.handleAllowEditPolicyholders}
            >
              <img src={editIcon} alt="edit-info" className="pr-3" />
              Sửa thông tin
            </button>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="policyholdersName"
              label="Tên khách hàng"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditPolicyholders}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="pidUserBuy"
              label="Số Hộ chiếu / CMND"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditPolicyholders}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="mobileNumberUserBuy"
              label="Số điện thoại"
              type="text"
              normalize={normalizePhone}
              validate={[required, maxLength10]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditPolicyholders}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="emailUserBuy"
              label="Địa chỉ email"
              type="text"
              validate={[required, emailFormat]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditPolicyholders}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 d-flex pt-4">
            <h3 className="pr-3">Thông tin về Người được bảo hiểm</h3>
            <button
              className="btn d-flex"
              onClick={this.handleAllowEditProtectedPerson}
            >
              <img src={editIcon} alt="edit-info" className="pr-3" />
              Sửa thông tin
            </button>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="relationshipWithUserBuy"
              label="Mối quan hệ với người yêu cầu"
              validate={[required]}
              placeholder="Chọn người được bảo hiểm"
              required
              component={SimpleSelectField}
              selectableValues={RELATIONSHIP_OPTION}
              disabled={!enableEditProtectedPerson}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="fullNameUserTarget"
              label="Người Được bảo hiểm"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditProtectedPerson}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="genderUserTarget"
              label="Giới tính"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={GENDER_OPTION}
              disabled={!enableEditProtectedPerson}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="birthDateUserTarget"
              label="Ngày sinh"
              component={SimpleDateField}
              validate={[required]}
              normalize={normalizeDate}
              required
              disabled={!enableEditProtectedPerson}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="pidUserTarget"
              label="Số Hộ chiếu / CMND"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditProtectedPerson}
            />
          </div>
          <div className="col-md-9 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="addressUserTarget"
              label="Địa chỉ liên hệ"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
              disabled={!enableEditProtectedPerson}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 d-flex pt-4">
            <h3 className="pr-3">Thông tin về gói bảo hiểm</h3>
            <button
              className="btn d-flex"
              onClick={this.handleAllowEditPackageIns}
            >
              <img src={editIcon} alt="edit-info" className="pr-3" />
              Sửa thông tin
            </button>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="insurancePackage"
              label="Gói bảo hiểm"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={PACKAGE_OPTION}
              disabled={!enableEditPackageIns}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="dateActive"
              label="Ngày hiệu lực"
              component={SimpleDateField}
              validate={[required]}
              normalize={normalizeDate}
              required
              disabled={!enableEditPackageIns}
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
          <div className="col-md-12 col-sm-12">
            <Field
              name="checkbox"
              component={SimpleCheckBoxField}
              label="Xuất hóa đơn VAT"
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
  form: 'StepThirdForm',
})(StepThirdForm)
