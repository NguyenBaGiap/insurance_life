import React from 'react'
import heathyInsIcon from '../../../static/img/_intro/heathyIns.svg'
import carInsIcon from '../../../static/img/_intro/carIns.svg'
import houseInsIcon from '../../../static/img/_intro/houseIns.svg'
import travelInsIcon from '../../../static/img/_intro/visitIns.svg'
import ptiLogo from '../../../static/img/_intro/pti-logo.svg'
import dot from '../../../static/img/_intro/dot.svg'
import 'static/styles/_ins_list.scss'

export default function InsuranceList() {
  return (
    <div className="insurance-intro">
      <div className="intro-menu d-none d-md-flex align-items-center">
        <div className="container menu-list p-3">
          <div className="row">
            <div className="col-md-3">
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button type="button" className="border-0 bg-white">
                  <img src={heathyInsIcon} alt="car-ins" />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button type="button" className="border-0 bg-white">
                  <img src={carInsIcon} alt="car-ins" />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button type="button" className="border-0 bg-white">
                  <img src={houseInsIcon} alt="car-ins" />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button type="button" className="border-0 bg-white">
                  <img src={travelInsIcon} alt="car-ins" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="big-title font-weight-bold text-center justify-content-center align-items-center d-flex">
                  <img className="pr-3" src={ptiLogo} alt="pti-logo" />
                  Bảo hiểm Bệnh hiểm nghèo
                </p>
                <p className="sub-title text-center">
                  Nhận ngay 100% số tiền bảo hiểm khi không may mắc bệnh hiểm
                  nghèo
                </p>
                <p className="title-gradient text-center m-5">
                  Danh sách các bệnh hiểm nghèo được bảo hiểm
                </p>
              </div>
            </div>
            <div className="col-md-4 ins-list">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="ins-item text-center">
                  <img className="pr-3" src={dot} alt="dot" />
                  Ung thư
                </p>
              </div>
            </div>
            <div className="col-md-4 ins-list">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="ins-item text-center">
                  <img className="pr-3" src={dot} alt="dot" />
                  Ung thư
                </p>
              </div>
            </div>
            <div className="col-md-4 ins-list">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="ins-item text-center">
                  <img className="pr-3" src={dot} alt="dot" />
                  Ung thư
                </p>
              </div>
            </div>
            <div className="col-md-4 ins-list">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="ins-item text-center">
                  <img className="pr-3" src={dot} alt="dot" />
                  Ung thư
                </p>
              </div>
            </div>
            <div className="col-md-4 ins-list">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="ins-item text-center">
                  <img className="pr-3" src={dot} alt="dot" />
                  Ung thư
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}