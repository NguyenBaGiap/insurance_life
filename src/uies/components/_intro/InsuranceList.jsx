import React from 'react'
import { introduction } from 'utilities/initialHomePage'
import dot from 'static/img/_intro/dot.svg'
import 'static/styles/_ins_list.scss'

const TabComponent = ({ input: { activeSlide, img }, onClick }) => {
  return (
    <div className="col-md-3">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <button
          type="button"
          className="border-0 bg-white"
          onClick={onClick(activeSlide)}
        >
          <img src={img} alt="car-ins" />
        </button>
      </div>
    </div>
  )
}

export const TabContent = ({
  data: { title, logo, subTitle, description, contents },
}) => {
  return (
    <div className="intro-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
              <p className="big-title font-weight-bold text-center justify-content-center align-items-center">
                <img className="pr-3" src={logo} alt="icon-logo" />
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
  const [active, setActive] = React.useState(0)
  const handleSelectTab = (value) => () => setActive(value)
  return (
    <div className="insurance-intro d-none d-md-block">
      <div className="intro-menu d-md-flex align-items-center">
        <div className="container menu-list p-3">
          <div className="row">
            {introduction.map((tab, index) => (
              <TabComponent key={index} input={tab} onClick={handleSelectTab} />
            ))}
          </div>
        </div>
      </div>
      <React.Fragment>
        {introduction.map((tab, index) => {
          if (tab.activeSlide === active) {
            return <TabContent key={index} data={tab} />
          }
          return null
        })}
      </React.Fragment>
    </div>
  )
}
