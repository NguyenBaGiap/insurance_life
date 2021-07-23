import React from 'react'
import AppHeader from 'uies/components/_header/AppHeader'
import family from 'static/img/VPB-bg.png'
import 'static/styles/_banner.scss'

function AppBanner() {
  return (
    <div className="insurance-banner">
      <AppHeader />
      <div className="container-fluid app-banner">
        <img src={family} alt="bg-banner" />
        <div className="container contents">
          <div className="row d-flex flex-md-row flex-column-reverse">
            <div className="col-md-6">
              <div className="title text-white font-weight-bold d-flex flex-column">
                <span>Mua bảo hiểm online</span>
                <span>qua VPBank</span>
              </div>
              <div className="content-text d-flex flex-column text-white">
                <span>Những hoài bão trong công việc</span>
                <span>Những ước mơ về hạnh phúc trong gia đình</span>
                <span>Tất cả đều trong tầm tay khi bạn có sức khỏe...</span>
              </div>
              <div className="register-button">
                <button className="btn">Đăng ký ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBanner
