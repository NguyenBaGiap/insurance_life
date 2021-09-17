import React from 'react'
import family from 'static/img/VPB-bg.png'
import familyMobile from 'static/img/banner/family_bottom_mobile.png'
import AppBannerContainer from 'uies/components/_banner/AppBannerContainer'
import InsuranceListMobile from 'uies/components/_intro/InsuranceListMobile'
import AppFooter from 'uies/components/_footer/AppFooter'
import CardAdsense from 'uies/components/_adsense/CardAdsense'
import InsurancePackage from 'uies/components/_package/InsurancePackage'
import CustomerComment from 'uies/components/_comment/CustomerComment'
import EmailFollowForm from 'uies/forms/EmailFollowForm'
import InsuranceList from 'uies/components/_intro/InsuranceList'
import 'static/styles/_landing_page.scss'

class LandingPage extends React.Component {
  componentDidMount() {
    sessionStorage.clear()
    this.props.fetchInitialData()
  }

  handleRedirectRegister =
    (id = null) =>
    () => {
      const searchParams = new URLSearchParams(this.props.location.search)
      searchParams.set('product', '1')
      searchParams.set('target', 'register')
      if (id) {
        searchParams.set('tier', id)
      }
      const location = {
        pathname: '/pti/register/step0',
        search: searchParams.toString(),
      }
      this.props.history.push(location)
    }
  handleRedirectAdvise = (id) => () => {
    const searchParams = new URLSearchParams(this.props.location.search)
    searchParams.set('product', '1')
    searchParams.set('target', 'advise')
    if (id) {
      searchParams.set('tier', id)
    }
    const location = {
      pathname: '/pti/register/step0',
      search: searchParams.toString(),
    }
    this.props.history.push(location)
  }
  render() {
    const { initialValues, onSubmitEmail, insurancePackage } = this.props
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
                <div className="row d-flex flex-md-row ">
                  <div className="col-md-12 col-sm-12">
                    <div className="content-title text-white d-flex flex-column">
                      <span className="font-weight-bold">
                        Đăng ký Bảo hiểm Phi nhân thọ
                      </span>
                      <span className="font-weight-bold">
                        trực tuyến cùng VPBank
                      </span>
                      <span className="description mt-3">
                        Đơn giản - Nhanh chóng - Dễ hiểu
                      </span>
                    </div>
                    <div className="content-text d-flex flex-column text-white">
                      <span>Những hoài bão trong công việc</span>
                      <span>Những ước mơ về hạnh phúc trong gia đình</span>
                      <span>
                        Tất cả đều trong tầm tay khi bạn có sức khỏe...
                      </span>
                    </div>
                    <div className="register-button">
                      <button
                        type="button"
                        className="btn"
                        onClick={this.handleRedirectRegister()}
                      >
                        Đăng ký ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-5 d-md-none image-mobile">
              <img src={familyMobile} alt="family" className="img-fluid" />
            </div>
          </AppBannerContainer>
        </section>

        <section id="section-intro">
          <InsuranceList />
          <InsuranceListMobile />
        </section>

        <section id="section-benefit">
          <CardAdsense data={initialValues.benefit} />
        </section>

        <section id="section-customer-potential">
          <CardAdsense data={initialValues.customerPotential} />
        </section>

        <section id="section-package">
          <InsurancePackage
            data={insurancePackage}
            handleRedirectRegister={this.handleRedirectRegister}
            handleRedirectAdvise={this.handleRedirectAdvise}
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
}
export default LandingPage
