import React from 'react'
import 'static/styles/_package.scss'

const PackageCard = ({
  data: { image, label, moneyTotal, moneyMonth, id },
  handleRedirectRegister,
  handleRedirectAdvise,
}) => (
  <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-3 pt-3 pb-md-0 d-flex justify-content-center">
    <div className=" package-item">
      <div className="content p-4">
        <div data-aos="fade-up">
          <img src={image} alt="silver" className="d-flex" />
          <p className="text-center font-weight-bold pt-2 package-name">
            {label}
          </p>
          <p className="sub-title text-center pt-3">Số tiền bảo hiểm</p>
          <p className="package-total">{moneyTotal}</p>
          <p className="package-min sub-title text-center">
            Mức phí chỉ từ &nbsp;
            <span className="font-weight-bold">{moneyMonth}</span>
          </p>
        </div>
      </div>
      <div className="action p-4 justify-content-center">
        <button
          className="btn register border-0 mr-3"
          onClick={handleRedirectRegister(id)}
        >
          Đăng ký ngay
        </button>
        <button
          className="btn advisory bg-white"
          onClick={handleRedirectAdvise(id)}
        >
          Tư vấn
        </button>
      </div>
    </div>
  </div>
)

export default function InsurancePackage({
  data,
  handleRedirectRegister,
  handleRedirectAdvise,
}) {
  return (
    <div className="insurance-package">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-12 text-center">
            <div data-aos="zoom-in">
              <p className="title-gradient">Lựa chọn gói bảo hiểm</p>
              <p className="sub-title">Số tiền bảo hiểm: VNĐ/người/năm</p>
            </div>
          </div>
          {data.map((content, index) => (
            <PackageCard
              key={index}
              data={content}
              handleRedirectRegister={handleRedirectRegister}
              handleRedirectAdvise={handleRedirectAdvise}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
