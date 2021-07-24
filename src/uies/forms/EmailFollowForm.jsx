import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { emailFormat } from 'utilities/validate'
import 'static/styles/_mail_form.scss'

const SimpleTextField = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className="d-flex flex-column">
      <input
        {...input}
        className="form-control border-0"
        placeholder={placeholder}
        type={type}
      />
      {touched && error && <span className="text-white">{error}</span>}
    </div>
  )
}

function EmailFollowForm({ handleSubmit }) {
  return (
    <form className="insurance-follow" onSubmit={handleSubmit}>
      <div className="container container-sm" data-aos="zoom-in">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <p className="follow-title text-sm-left text-md-center">
              Đăng ký email để nhận những ưu đãi sớm nhất
            </p>
            <p className="follow-note text-md-center text-lg-left">
              Hãy để lại email của bạn, chúng tôi sẽ liên hệ ngay
            </p>
          </div>
          <div className="col-md-12 col-sm-12 mt-md-5 user-input d-md-flex justify-content-center">
            <div className="input">
              <Field
                name="email"
                component={SimpleTextField}
                validate={emailFormat}
                type="email"
                placeholder="Nhập email của bạn"
                maxLength="50"
              />
            </div>
            <div className="submit">
              <button className="btn" type="submit">
                Gửi ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'EmailFollowForm',
})(EmailFollowForm)
