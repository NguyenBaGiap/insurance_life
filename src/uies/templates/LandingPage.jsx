import React from 'react'
import './index.scss'
import AppBanner from 'uies/components/_banner/AppBanner'
import AppFooter from 'uies/components/_footer/AppFooter'
import CardAdsense from 'uies/components/_adsense/CardAdsense'
import InsurancePackage from 'uies/components/_package/InsurancePackage'
import CustomerComment from 'uies/components/_comment/CustomerComment'
import EmailFollowForm from 'redux/containers/forms/EmailFollowForm'
import InsuranceList from 'uies/components/_intro/InsuranceList'

export default function LandingPage({ initialValues }) {
  return (
    <React.Fragment>
      <section id="section-header">
        <AppBanner />
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
        <InsurancePackage data={initialValues.insurancePackage} />
      </section>

      <section id="section-comment">
        <CustomerComment data={initialValues.customerComment} />
      </section>

      <section id="section-email-form">
        <EmailFollowForm />
      </section>

      <section id="section-header">
        <AppFooter data={initialValues.footer} />
      </section>
    </React.Fragment>
  )
}
