import React from 'react'
import Slider from 'react-slick'
import { TabContent } from 'uies/components/_intro/InsuranceList'
import { introduction } from 'utilities/initialHomePage'
import 'static/styles/_ins_list.scss'

class InsuranceListMobile extends React.Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
  }
  beforeChangeSlide = (current, next) => {
    this.setState({ oldSlide: current, activeSlide: next })
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      beforeChange: this.beforeChangeSlide,
    }
    return (
      <div className="insurance-intro-mobile d-block d-md-none">
        <div className="list-logo">
          <Slider {...settings}>
            {introduction.map((tab, index) => (
              <img
                key={index}
                src={tab.img}
                alt="icon-logo"
                className="img-fluid"
              />
            ))}
          </Slider>
        </div>
        <div className="content-slide-mobile container pt-5">
          {introduction.map((tab, index) => {
            if (tab.activeSlide === this.state.activeSlide) {
              return <TabContent key={index} data={tab} />
            }
            return null
          })}
        </div>
      </div>
    )
  }
}

export default InsuranceListMobile
