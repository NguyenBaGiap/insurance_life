import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import classNames from 'classnames'
import _ from 'lodash'
import {
  normalizeNumber,
  normalizeDate,
  required,
  maxLength15,
  maxLength6,
} from 'utilities/validate'
import { GENDER_OPTION, RELATIONSHIP_OPTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import { simpleGetRequest } from 'services/api'

class StepFirstForm extends React.Component {
  state = {
    isLoadingDao: false,
    isExistDao: false,
    daoSaleName: undefined,
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
  handleOnChangeDaoSale = _.debounce(async (e, newValue, previousValue) => {
    if (newValue !== previousValue) {
      this.setState({ isLoadingDao: true })
      try {
        const {
          data: { name },
        } = await simpleGetRequest(
          `/v1/web/non-life/customer/get-employee/${newValue}`
        )
        this.setState({
          isLoadingDao: false,
          daoSaleName: name,
          isExistDao: true,
        })
      } catch (e) {
        this.setState({
          isExistDao: false,
          isLoadingDao: false,
          daoSaleName: e.data || 'Mã DAO không tồn tại.',
        })
      }
    }
  }, 1000)
  render() {
    const { handleGoBack, handleSubmit, initialValues } = this.props
    const { isLoadingDao, daoSaleName, isExistDao } = this.state
    return (
      <form
        autoComplete="off"
        className="container mt-3"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form pt-3">
            <h3>Thông tin về Người được bảo hiểm</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="relationship"
              label="Mối quan hệ với Người mua bảo hiểm"
              validate={[required]}
              placeholder="Chọn người được bảo hiểm"
              onChange={this.handleChangeRelationship}
              required
              component={SimpleSelectField}
              selectableValues={RELATIONSHIP_OPTION}
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
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 min-height-col">
            <Field
              name="personLegalId"
              label="SỐ HỘ CHIẾU / CMND / CCCD "
              validate={[required, maxLength15]}
              required
              component={SimpleTextField}
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
              validate={[maxLength6]}
              disabled={!!initialValues.daoSale}
              normalize={normalizeNumber}
              component={SimpleTextField}
              onChange={this.handleOnChangeDaoSale}
              loading={isLoadingDao}
            />
            <span
              className={classNames(
                'font-weight-bolder',
                !isExistDao && 'text-danger'
              )}
            >
              {daoSaleName}
            </span>
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
}

export default reduxForm({
  form: 'StepFirstForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StepFirstForm)
