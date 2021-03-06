import React from 'react'
import AppHeader from 'uies/components/_header/AppHeader'
import 'static/styles/_banner.scss'

class AppBannerContainer extends React.Component {
  render() {
    return (
      <div className="insurance-banner insurance-banner-mobile">
        <section className="banner-header">
          <AppHeader />
        </section>
        <section className="banner-content">{this.props.children}</section>
      </div>
    )
  }
}

export default AppBannerContainer
