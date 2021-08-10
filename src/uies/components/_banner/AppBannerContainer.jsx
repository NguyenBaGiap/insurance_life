import React from 'react'
import AppHeader from 'uies/components/_header/AppHeader'
import 'static/styles/_banner.scss'

class AppBannerContainer extends React.Component {
  render() {
    return (
      <div className="insurance-banner">
        <AppHeader />
        {this.props.children}
      </div>
    )
  }
}

export default AppBannerContainer
