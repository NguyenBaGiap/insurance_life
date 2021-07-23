import React from 'react'
import 'static/styles/_package.scss'

const PackageCard = ({
  data: {
    image,
    name,
    description,
    moneyTotal,
    forMonth,
    moneyMonth,
    register,
    advisory,
  },
}) => (
  <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
    <div className=" package-item">
      <div className="content p-4">
        <div data-aos="fade-up">
          <img src={image} alt="silver" className="d-flex" />
          <p className="text-center font-weight-bold pt-2 package-name">
            {name}
          </p>
          <p className="sub-title text-center pt-3">{description}</p>
          <p className="package-total">{moneyTotal}</p>
          <p className="package-min sub-title text-center">
            {forMonth} &nbsp;
            <span className="font-weight-bold">{moneyMonth}</span>
          </p>
        </div>
      </div>
      <div className="action p-4 justify-content-center">
        <button className="btn register border-0 mr-3">{register}</button>
        <button className="btn advisory bg-white">{advisory}</button>
      </div>
    </div>
  </div>
)

export default function InsurancePackage({ data: { contents } }) {
  return (
    <div className="insurance-package">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-12 pb-5 text-center">
            <div data-aos="zoom-in">
              <p className="title-gradient">Lựa chọn gói bảo hiểm</p>
              <p className="sub-title">Số tiền bảo hiểm: VNĐ/người/năm</p>
            </div>
          </div>
          {contents.map((content, index) => (
            <PackageCard key={index} data={content} />
          ))}
        </div>
      </div>
    </div>
  )
}
