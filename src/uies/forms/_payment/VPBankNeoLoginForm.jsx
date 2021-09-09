import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'utilities/validate'
import SimpleTextField from 'uies/components/_field/SimpleTextField'

class VPBankNeoLoginForm extends React.Component {
  render() {
    const { handleGoBack, handleSubmit } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-5 form-neo-login"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3>Đăng nhập VPBank NEO</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="userName"
              label="Tên đăng nhập"
              type="text"
              validate={[required]}
              //loading
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="password"
              label="Mật khẩu"
              type="password"
              validate={[required]}
              required
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 forget-password">
            <a
              href="https://neo.vpbank.com.vn/"
              target="_blank"
              rel="noreferrer"
            >
              Quên mật khẩu?
            </a>
          </div>
          <div className="col-md-12 col-sm-12 pt-sm-3 pt-md-3 forget-password">
            <p>
              Bạn chưa có tài khoản? &nbsp;
              <a
                href="https://taikhoan.vpbank.com.vn/"
                target="_blank"
                rel="noreferrer"
              >
                Đăng ký ngay
              </a>
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
  form: 'VPBankNeoLoginForm',
})(VPBankNeoLoginForm)
