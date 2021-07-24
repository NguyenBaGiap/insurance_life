import React from 'react'
import classNames from 'classnames'

// for landing page
export default function CardAdsense({
  data: { title, contents, isRightContent, image },
}) {
  return (
    <div className="insurance-benefit">
      <div className="container">
        <div
          className={classNames('row', isRightContent && 'flex-row-reverse')}
        >
          <div className="col-md-6 d-flex justify-content-center flex-column">
            <div data-aos="zoom-in-right">
              <div className="benefit-title">
                <p className="title-gradient container-sm">{title}</p>
              </div>
              <div className="benefit-note pt-md-5 pt-sm-3">
                {contents.map((content, index) => (
                  <p key={index} className="sub-title container-sm d-sm-flex">
                    <img
                      className="pr-3"
                      src={content.image}
                      alt="insurance-adsense"
                    />
                    <span>{content.content}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div data-aos="zoom-in-left">
              <img className="mw-100" src={image} alt="img-benefit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
