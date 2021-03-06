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
    sessionStorage.removeItem('access_token')
    const {
      query: { dao },
    } = this.props.location
    if (dao) {
      sessionStorage.setItem('daoSale', dao)
    }
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
                        ????ng k?? B???o hi???m Phi nh??n th???
                      </span>
                      <span className="font-weight-bold">
                        tr???c tuy???n c??ng VPBank
                      </span>
                      <span className="description mt-3">
                        ????n gi???n - Nhanh ch??ng - D??? hi???u
                      </span>
                    </div>
                    <div className="content-text d-flex flex-column text-white">
                      <span>Nh???ng ho??i b??o trong c??ng vi???c</span>
                      <span>Nh???ng ?????c m?? v??? h???nh ph??c trong gia ????nh</span>
                      <span>
                        T???t c??? ?????u trong t???m tay khi b???n c?? s???c kh???e...
                      </span>
                    </div>
                    <div className="register-button">
                      <button
                        type="button"
                        className="btn"
                        onClick={this.handleRedirectRegister()}
                      >
                        ????ng k?? ngay
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
