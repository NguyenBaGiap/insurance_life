import React from 'react'

export default function ConfirmOtpForm({ handleSubmit }) {
  return (
    <form
      autoComplete="off"
      className="container mt-5 form-otp"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-md-12 col-sm-12 title-form">
          <h3 className="text-center">
            Nhập mã OTP đã được gửi đến số điện thoại của bạn
          </h3>
        </div>
        <div className="col-md-12 col-sm-12 btn-action">
          <button type="button" className="btn-back mr-3">
            Gửi lại OTP
          </button>
          <button type="submit" className="btn-submit">
            Tiếp tục
          </button>
        </div>
      </div>
    </form>
  )
}
