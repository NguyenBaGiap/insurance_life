import React from 'react'
import { change, Field, reduxForm } from 'redux-form'
import { BASE_URL } from 'services/api'
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
  minOneAge,
  validatePTIStep,
} from 'utilities/validate'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import SimpleCheckBoxField from 'uies/components/_field/SimpleCheckBoxField'
import moment from 'moment'

class StepThirdForm extends React.Component {
  state = {
    enableEdit: false,
  }
  handleAllowEdit = () => {
    this.setState({ enableEdit: true })
  }
  handleChangeRelationship = (e, newValue, previousValue) => {
    const { form, dispatch } = this.props
    const fieldsClear = [
      'personName',
      'personGender',
      'personBirth',
      'personLegalId',
      'personAddress',
    ]
    if (newValue.value !== previousValue?.value) {
      fieldsClear.forEach((field) => dispatch(change(form, field, null)))
    }
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
              onChange={this.handleChangeRelationship}
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
              validate={[required, minOneAge]}
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
              validate={[required, validateFieldPackage]}
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
const validateFieldPackage = (value, allValues, props) => {
  const { form, dispatch } = props
  const checkAge = minOneAge(allValues.personBirth)
  if (checkAge) {
    dispatch(change(form, 'price', null))
    return 'Gói sản phẩm chỉ áp dụng cho người trên 1 tuổi.'
  }
}
const asyncValidate = (values, dispatch, props, currentFieldName) => {
  const submitValues = {
    productId: values.productId,
    birth: moment(values.personBirth).format('DD-MM-yyyy'),
    effectiveDate: moment(values.effectiveDate).format('DD-MM-yyyy'),
    tierId: values.tierId?.value,
  }
  props.handleLoadingAmount()
  return fetch(`${BASE_URL}/v1/sale/calculating-money`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${window.sessionStorage.getItem('access_token')}`,
    },
    body: JSON.stringify(submitValues),
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const isErrors = typeof data.data === 'string'
      if (isErrors) {
        return {
          [currentFieldName]: 'loi cmmr ne',
        }
      } else {
        const {
          data: { id, amountDisplay },
        } = data
        dispatch(change(props.form, 'priceId', id))
        dispatch(change(props.form, 'price', amountDisplay))
      }
    })
    .finally(() => {
      props.handleLoadingAmount()
    })
}
export default reduxForm({
  form: 'StepThirdForm',
  validate: validatePTIStep,
  asyncValidate,
  asyncChangeFields: [
    'price',
    'tierId',
    'priceId',
    'effectiveDate',
    'personBirth',
  ],
  asyncBlurFields: ['tierId', 'priceId', 'effectiveDate', 'personBirth'],
  shouldAsyncValidate: ({ trigger }) => trigger !== 'submit',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StepThirdForm)
