import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  required,
  email,
  mobileNumber,
  normalizeNumber,
  normalizeAlphaCharacter,
  length10,
  maxLength12,
  minLength2,
  maxLength50,
} from 'utilities/validate'
import { RELATIONSHIP_OPTION, CONFIRM_ADVISOR } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleCheckBoxField from 'uies/components/_field/SimpleCheckBoxField'

const RegisterOrAdvise = ({ initialState, isParticipation }) => {
  if (initialState && initialState.target === 'advise') {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 pt-sm-3 pt-md-3">
          <Field
            name="participation"
            component={SimpleCheckBoxField}
            label={CONFIRM_ADVISOR}
          />
        </div>
        <div className="col-md-12 col-sm-12 text-danger">
          {!isParticipation && 'Vui lòng xác nhận '}
        </div>
      </div>
    )
  }
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12 title-form">
        <h3>Bạn muốn mua bảo hiểm cho</h3>
      </div>
      <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
        <Field
          name="relationship"
          label="Mối quan hệ với Người mua bảo hiểm"
          validate={[required]}
          placeholder="Chọn người được bảo hiểm"
          required
          component={SimpleSelectField}
          selectableValues={RELATIONSHIP_OPTION}
        />
      </div>
    </div>
  )
}

class StepZeroForm extends React.Component {
  render() {
    const {
      handleSubmit,
      handleGoBack,
      initialState,
      title,
      labelSubmit,
      isParticipation,
    } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-3"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form pt-3">
            <h3>{title}</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="cusName"
              label="Tên khách hàng"
              type="text"
              validate={[required, minLength2, maxLength50]}
              normalize={normalizeAlphaCharacter}
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="cusLegalId"
              label="SỐ HỘ CHIẾU / CMND / CCCD "
              type="text"
              validate={[required, maxLength12]}
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="cusPhone"
              label="Số điện thoại"
              normalize={normalizeNumber}
              type="text"
              validate={[required, mobileNumber, length10]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="cusEmail"
              label="Địa chỉ email"
              type="text"
              validate={[required, email, maxLength50]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
        </div>
        <RegisterOrAdvise
          initialState={initialState}
          isParticipation={isParticipation}
        />
        <div className="row">
          <div className="col-md-12 col-sm-12 btn-action pb-5">
            <button
              type="button"
              className="btn-back mr-3"
              onClick={handleGoBack}
            >
              Quay lại
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={!isParticipation}
            >
              {labelSubmit}
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'StepZeroForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StepZeroForm)
