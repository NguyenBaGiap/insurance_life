import React from 'react'
import family from 'static/img/VPB-bg.png'
import AppBannerContainer from 'uies/components/_banner/AppBannerContainer'
import AppFooter from 'uies/components/_footer/AppFooter'
import CardAdsense from 'uies/components/_adsense/CardAdsense'
import InsurancePackage from 'uies/components/_package/InsurancePackage'
import CustomerComment from 'uies/components/_comment/CustomerComment'
import EmailFollowForm from 'uies/forms/EmailFollowForm'
import InsuranceList from 'uies/components/_intro/InsuranceList'
import 'static/styles/_landing_page.scss'

export default function LandingPage(props) {
  const { initialValues, onSubmitEmail } = props
  const handleRedirectRegister = () => {
    props.history.push('/pti/register/initial', 'register')
  }
  const handleRedirectAdvise = () => {
    props.history.push('/pti/register/initial', 'advise')
  }
  return (
    <React.Fragment>
      <section id="section-header">
        <AppBannerContainer>
          <div className="container-fluid banner-home position-relative">
            <img
              src={family}
              alt="bg-banner"
              className="d-none d-md-block position-absolute mh-100 end-0"
            />
            <div className="container contents">
              <div className="row d-flex flex-md-row flex-column-reverse">
                <div className="col-md-6">
                  <div className="content-title text-white font-weight-bold d-flex flex-column">
                    <span>Mua bảo hiểm online</span>
                    <span>qua VPBank</span>
                  </div>
                  <div className="content-text d-flex flex-column text-white">
                    <span>Những hoài bão trong công việc</span>
                    <span>Những ước mơ về hạnh phúc trong gia đình</span>
                    <span>Tất cả đều trong tầm tay khi bạn có sức khỏe...</span>
                  </div>
                  <div className="register-button">
                    <button
                      type="button"
                      className="btn"
                      onClick={handleRedirectRegister}
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppBannerContainer>
      </section>

      <section id="section-intro">
        <InsuranceList />
      </section>

      <section id="section-benefit">
        <CardAdsense data={initialValues.benefit} />
      </section>

      <section id="section-customer-potential">
        <CardAdsense data={initialValues.customerPotential} />
      </section>

      <section id="section-package">
        <InsurancePackage
          data={initialValues.insurancePackage}
          handleRedirectRegister={handleRedirectRegister}
          handleRedirectAdvise={handleRedirectAdvise}
        />
      </section>

      <section id="section-comment">
        <CustomerComment data={initialValues.customerComment} />
      </section>

      <section id="section-email-form">
        <EmailFollowForm onSubmit={onSubmitEmail} />
      </section>

      <section id="section-header">
        <AppFooter data={initialValues.footer} />
      </section>
    </React.Fragment>
  )
}
