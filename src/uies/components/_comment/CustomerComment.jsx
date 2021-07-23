import React from 'react'
import cmt from 'static/img/cmt.svg'
import 'static/styles/_cmt.scss'

const UserComment = ({ data: { avatar, userName, job, comment } }) => {
  return (
    <div
      className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center"
      data-aos="fade-up"
    >
      <div className="customer p-3">
        <div className="user-detail d-flex">
          <img src={avatar} alt="" />
          <p className="d-flex flex-column ml-3 mt-5">
            <span className="font-weight-bold user-name">{userName}</span>
            <span className="user-job">{job}</span>
          </p>
        </div>
        <div className="user-comment">
          <p className="text-left">{comment}</p>
        </div>
      </div>
    </div>
  )
}

export default function CustomerComment({ data: { contents } }) {
  return (
    <div className="insurance-comment">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className=" box-title">
              <p className="title-gradient">Khách hàng nói về chúng tôi</p>
              <img src={cmt} alt="cus-cmt" />
            </div>
          </div>
          {contents.map((data, index) => (
            <UserComment key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}
