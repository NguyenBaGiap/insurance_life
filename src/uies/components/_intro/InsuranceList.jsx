import React from 'react'
import heathyInsIcon from 'static/img/_intro/heathyIns.svg'
import carInsIcon from 'static/img/_intro/carIns.svg'
import houseInsIcon from 'static/img/_intro/houseIns.svg'
import travelInsIcon from 'static/img/_intro/visitIns.svg'
import ptiLogo from 'static/img/_intro/pti-logo.svg'
import dot from 'static/img/_intro/dot.svg'
import 'static/styles/_ins_list.scss'

const TABS = [
  {
    name: 'PTI',
    img: heathyInsIcon,
    contents: [
      'Ung thư',
      'Cấy ghép nội tạng',
      'Tăng huyết áp động mạch phổi',
      'Đột quỵ',
      'U não lành tính',
      'Thay thế van tim',
      'Suy thận',
      'Phẫu thuật thông động mạch vành',
      'Bệnh Parkinson',
      'Liệt vĩnh viễn các chi',
      'Đa xơ cứng',
      'Bệnh gan giai đoạn cuối',
      'Nhồi máu cơ tim lần đầu',
      'Phẫu thuật ghép động mạch chủ',
    ],
  },
  {
    name: 'HOUSE',
    img: houseInsIcon,
  },
  {
    name: 'CAR',
    img: carInsIcon,
  },
  {
    name: 'TRAVEL',
    img: travelInsIcon,
  },
]

const TabComponent = ({ input: { name, img }, onClick }) => {
  return (
    <div className="col-md-3">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <button
          type="button"
          className="border-0 bg-white"
          onClick={onClick(name)}
        >
          <img src={img} alt="car-ins" />
        </button>
      </div>
    </div>
  )
}

const TabContent = ({ title, subTitle, description, contents }) => {
  return (
    <div className="intro-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
              <p className="big-title font-weight-bold text-center justify-content-center align-items-center d-flex">
                <img className="pr-3" src={ptiLogo} alt="pti-logo" />
                {title}
              </p>
              <p className="sub-title text-center">{subTitle}</p>
              <p className="title-gradient text-center m-5">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container contents">
        <div className="row">
          {contents.map((content, index) => (
            <div key={index} className="col-md-4 ins-list">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                <p className="ins-item text-left">
                  <img className="pr-3" src={dot} alt="dot" />
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function InsuranceList() {
  const [active, setActive] = React.useState('PTI')
  const handleSelectTab = (value) => () => setActive(value)
  return (
    <div className="insurance-intro">
      <div className="intro-menu d-none d-md-flex align-items-center">
        <div className="container menu-list p-3">
          <div className="row">
            {TABS.map((tab, index) => (
              <TabComponent key={index} input={tab} onClick={handleSelectTab} />
            ))}
          </div>
        </div>
      </div>
      <React.Fragment>
        {active === 'PTI' && (
          <TabContent
            title="Bảo hiểm Bệnh hiểm nghèo"
            subTitle="Nhận ngay 100% số tiền bảo hiểm khi không may mắc bệnh hiểm nghèo"
            description="Danh sách các bệnh hiểm nghèo được bảo hiểm"
            contents={TABS[0].contents}
          />
        )}
      </React.Fragment>
    </div>
  )
}
