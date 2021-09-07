import React from 'react'
import bannerStep from 'static/img/banner/group1.png'
import AppBannerContainer from 'uies/components/_banner/AppBannerContainer'

class AppBannerStep extends React.Component {
  render() {
    const { title, subTitle } = this.props
    return (
      <AppBannerContainer>
        <div className="container-fluid banner-step position-relative">
          <img
            src={bannerStep}
            alt="bg-banner"
            className="d-none d-md-block position-absolute mh-100 end-0"
          />
          <div className="container pt-5">
            <div className="row d-flex flex-grow-1">
              <div className="col-md-8">
                <div className="content-title text-white font-weight-bold d-flex flex-column">
                  <span className="font-weight-bold">{title}</span>
                  <span className="font-weight-bold">{subTitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppBannerContainer>
    )
  }
}
AppBannerStep.defaultProps = {
  title: 'Đăng ký mua Bảo hiểm Bệnh hiểm nghèo',
  subTitle: 'PTI liên kết với VPBank',
}

export default AppBannerStep
