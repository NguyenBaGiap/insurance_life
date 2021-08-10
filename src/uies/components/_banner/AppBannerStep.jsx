import React from 'react'
import AppHeader from 'uies/components/_header/AppHeader'
import bannerStep from 'static/img/banner/bg.svg'
import 'static/styles/_banner_step.scss'

class AppBannerStep extends React.Component {
  render() {
    return (
      <div className="insurance-banner">
        <AppHeader />
        <div className="d-flex flex-row">
          <div className="container contents">
            <div className="row d-flex flex-md-row">
              <div className="col-md-6">
                <div className="text-white font-weight-bold d-flex flex-column">
                  <span>Đăng ký mua Bảo hiểm Bệnh hiểm nghèo</span>
                  <span>PTI liên kết với VPBank</span>
                </div>
              </div>
            </div>
          </div>
          <div className="img-fluid">
            <img
              src={bannerStep}
              alt="bg-banner"
              className="d-none d-md-block"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AppBannerStep
