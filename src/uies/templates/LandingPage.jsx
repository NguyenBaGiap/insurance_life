import React from 'react'
import './index.scss'
import AppBanner from 'uies/components/_banner/AppBanner'
// intro
import heathyInsIcon from 'static/img/_intro/heathyIns.svg'
import ptiLogo from 'static/img/_intro/pti-logo.svg'
import carInsIcon from 'static/img/_intro/carIns.svg'
import houseInsIcon from 'static/img/_intro/houseIns.svg'
import travelInsIcon from 'static/img/_intro/visitIns.svg'
import dot from 'static/img/_intro/dot.svg'
//benefit
import family from 'static/img/_benefit/family.svg'
import secure from 'static/img/_benefit/secure.svg'
//customer
import family2 from 'static/img/_customer/family.svg'
import user from 'static/img/_customer/user.svg'
//package
import silver from 'static/img/_package/silver.svg'
// import gold from 'static/img/_package/gold.svg'
// import diamond from 'static/img/_package/diamond.svg'
// cmt
import cmt from 'static/img/cmt.svg'
import user1 from 'static/img/_customer/user1.svg'
//footer
import AppFooter from 'redux/containers/components/AppFooter'

export default function LandingPage() {
  return (
    <React.Fragment>
      <AppBanner />
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
                <div
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                >
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
                <div
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="ins-item text-center">
                    <img className="pr-3" src={dot} alt="dot" />
                    Ung thư
                  </p>
                </div>
              </div>
              <div className="col-md-4 ins-list">
                <div
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="ins-item text-center">
                    <img className="pr-3" src={dot} alt="dot" />
                    Ung thư
                  </p>
                </div>
              </div>
              <div className="col-md-4 ins-list">
                <div
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="ins-item text-center">
                    <img className="pr-3" src={dot} alt="dot" />
                    Ung thư
                  </p>
                </div>
              </div>
              <div className="col-md-4 ins-list">
                <div
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="ins-item text-center">
                    <img className="pr-3" src={dot} alt="dot" />
                    Ung thư
                  </p>
                </div>
              </div>
              <div className="col-md-4 ins-list">
                <div
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                >
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
      <div className="insurance-benefit">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center flex-column">
              <div data-aos="zoom-in-right">
                <div className="benefit-title">
                  <p className="title-gradient">
                    Lợi ích của Người được bảo hiểm khi tham gia sản phẩm Bảo
                    hiểm Bệnh hiểm nghèo
                  </p>
                </div>
                <div className="benefit-note pt-5">
                  <p className="sub-title">
                    <img className="pr-3" src={secure} alt="" />
                    Bảo vệ trước các bệnh các bệnh hiểm nghèo ngay từ giai đoạn
                    đầu
                  </p>
                  <p className="sub-title">
                    <img className="pr-3" src={secure} alt="" />
                    Đảm bảo kế hoạch tài chính cho bản thân và gia đình
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="zoom-in-left">
                <img className="mw-100" src={family} alt="img-benefit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="insurance-benefit insurance-customer">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-6 d-flex justify-content-center flex-column-reverse">
              <div data-aos="zoom-in-right">
                <div className="benefit-title">
                  <p className="title-gradient">Đối tượng bảo hiểm</p>
                </div>
                <div className="benefit-note pt-5">
                  <p className="sub-title">
                    <img className="pr-3" src={user} alt="" />
                    Công dân Việt Nam hoặc người nước ngoài đang cư trú trong
                    lãnh thổ Việt Nam không quá độ tuổi quy định và không bị
                    bệnh ung thư, bệnh hiểm nghèo theo định nghĩa (tại thời điểm
                    tham gia bảo hiểm), tâm thần hoặc bị thương tật vĩnh viễn từ
                    80% trở lên.
                  </p>
                  <p className="sub-title">
                    <img className="pr-3" src={user} alt="" />
                    Độ tuổi quy định: Từ đủ 01 tuổi đến 60 tuổi. Mở rộng độ tuổi
                    đến 65 tuổi nếu tham gia liên tục từ năm 60 tuổi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="zoom-in-left">
                <img className="mw-100" src={family2} alt="img-benefit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="insurance-package">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-12 pb-5 text-center">
              <div data-aos="zoom-in">
                <p className="title-gradient">Lựa chọn gói bảo hiểm</p>
                <p className="sub-title">
                  Số tiền bảo hiểm: 100.000 VNĐ/người/năm
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
              <div className=" package-item">
                <div className="content p-4">
                  <div data-aos="fade-up">
                    <img src={silver} alt="silver" className="d-flex" />
                    <p className="text-center font-weight-bold pt-2 package-name">
                      Gói Bạc
                    </p>
                    <p className="sub-title text-center pt-3">
                      Số tiền bảo hiểm
                    </p>
                    <p className="package-total">110.000.000</p>
                    <p className="package-min sub-title text-center">
                      Mức phí chỉ từ &nbsp;
                      <span className="font-weight-bold">220.000</span>
                    </p>
                  </div>
                </div>
                <div className="action p-4 justify-content-center">
                  <button className="btn register border-0 mr-3">
                    Đăng ký ngay
                  </button>
                  <button className="btn advisory bg-white">Tư vấn</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
              <div className=" package-item">
                <div className="content p-4">
                  <div data-aos="fade-up">
                    <img src={silver} alt="silver" className="d-flex" />
                    <p className="text-center font-weight-bold pt-2 package-name">
                      Gói Bạc
                    </p>
                    <p className="sub-title text-center pt-3">
                      Số tiền bảo hiểm
                    </p>
                    <p className="package-total">110.000.000</p>
                    <p className="package-min sub-title text-center">
                      Mức phí chỉ từ &nbsp;
                      <span className="font-weight-bold">220.000</span>
                    </p>
                  </div>
                </div>
                <div className="action p-4 justify-content-center">
                  <button className="btn register border-0 mr-3">
                    Đăng ký ngay
                  </button>
                  <button className="btn advisory bg-white">Tư vấn</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
              <div className=" package-item">
                <div className="content p-4">
                  <div data-aos="fade-up">
                    <img src={silver} alt="silver" className="d-flex" />
                    <p className="text-center font-weight-bold pt-2 package-name">
                      Gói Bạc
                    </p>
                    <p className="sub-title text-center pt-3">
                      Số tiền bảo hiểm
                    </p>
                    <p className="package-total">110.000.000</p>
                    <p className="package-min sub-title text-center">
                      Mức phí chỉ từ &nbsp;
                      <span className="font-weight-bold">220.000</span>
                    </p>
                  </div>
                </div>
                <div className="action p-4 justify-content-center">
                  <button className="btn register border-0 mr-3">
                    Đăng ký ngay
                  </button>
                  <button className="btn advisory bg-white">Tư vấn</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="insurance-comment">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className=" box-title">
                <p className="title-gradient">Khách hàng nói về chúng tôi</p>
                <img src={cmt} alt="cus-cmt" />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
              <div className="customer p-3">
                <div className="user-detail d-flex">
                  <img src={user1} alt="" />
                  <p className="d-flex flex-column justify-content-end">
                    <span className="font-weight-bold user-name">
                      Lê Vinh Quang
                    </span>
                    <span className="sub-title">Kỹ sư công nghệ thông tin</span>
                  </p>
                </div>
                <div className="user-comment">
                  <p className="text-left p-3">
                    Tôi rất bất ngờ vì quy trình mua bảo hiểm online rất nhanh
                    chóng và dễ dàng, không cần phải gặp trực tiếp nhân viên bán
                    hàng, tuân thủ đúng quy định giãn cách xã hội khi dịch
                    Covid-19 bùng phát.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
              <div className="customer p-3">
                <div className="user-detail d-flex">
                  <img src={user1} alt="" />
                  <p className="d-flex flex-column justify-content-end">
                    <span className="font-weight-bold user-name">
                      Lê Vinh Quang
                    </span>
                    <span className="sub-title">Kỹ sư công nghệ thông tin</span>
                  </p>
                </div>
                <div className="user-comment">
                  <p className="text-left p-3">
                    Tôi rất bất ngờ vì quy trình mua bảo hiểm online rất nhanh
                    chóng và dễ dàng, không cần phải gặp trực tiếp nhân viên bán
                    hàng, tuân thủ đúng quy định giãn cách xã hội khi dịch
                    Covid-19 bùng phát.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 ps-md-0 pb-5 pt-5 pb-md-0 d-flex justify-content-center">
              <div className="customer p-3">
                <div className="user-detail d-flex">
                  <img src={user1} alt="" />
                  <p className="d-flex flex-column justify-content-end">
                    <span className="font-weight-bold user-name">
                      Lê Vinh Quang
                    </span>
                    <span className="sub-title">Kỹ sư công nghệ thông tin</span>
                  </p>
                </div>
                <div className="user-comment">
                  <p className="text-left p-3">
                    Tôi rất bất ngờ vì quy trình mua bảo hiểm online rất nhanh
                    chóng và dễ dàng, không cần phải gặp trực tiếp nhân viên bán
                    hàng, tuân thủ đúng quy định giãn cách xã hội khi dịch
                    Covid-19 bùng phát.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="insurance-follow p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="follow-title text-sm-left text-md-center">
                Đăng ký email để nhận những ưu đãi sớm nhất
              </p>
              <p className="follow-note text-md-center text-lg-left">
                Hãy để lại email của bạn, chúng tôi sẽ liên hệ ngay
              </p>
            </div>
            <div className="col-md-12 user-input d-flex justify-content-center mt-5">
              <input
                className="form-control border-0"
                type="text"
                placeholder="Nhập email của bạn"
              />
              <button>Gửi ngay</button>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </React.Fragment>
  )
}
