import React from 'react'
import bannerStep from 'static/img/banner/group1.png'
import AppBannerContainer from './AppBannerContainer'

class AppBannerStep extends React.Component {
  render() {
    return (
      <AppBannerContainer>
        <div className="container-fluid banner-step position-relative">
          <img
            src={bannerStep}
            alt="bg-banner"
            className="d-none d-md-block position-absolute mh-100 end-0"
          />
          <div className="container contents">
            <div className="row d-flex flex-grow-1">
              <div className="col-md-6">
                <div className="content-title text-white font-weight-bold d-flex flex-column">
                  <span>Đăng ký mua Bảo hiểm Bệnh hiểm nghèo</span>
                  <span>PTI liên kết với VPBank</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppBannerContainer>
    )
  }
}

export default AppBannerStep
