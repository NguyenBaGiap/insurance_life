import React from 'react'
import classNames from 'classnames'
import 'static/styles/_stepper.scss'

class Stepper extends React.Component {
  render() {
    const { title, count, activeStep } = this.props
    return (
      <div className="container container-sm step-container">
        <div className="row">
          <div className="step-bar col-md-12 col-sm-12 pt-4 pb-4">
            {Array.from({ length: count }, (_, i) => i + 1).map(
              (step, index) => (
                <div key={index} className="step-item">
                  <div
                    className={classNames(
                      'step-dots',
                      activeStep === step && 'active'
                    )}
                  >
                    <div
                      className={classNames(
                        'dots',
                        activeStep < step && 'pending'
                      )}
                    />
                  </div>
                  <div
                    className={classNames(
                      'step-line',
                      activeStep <= step && 'pending'
                    )}
                  />
                </div>
              )
            )}
          </div>
          <div className="title col-md-12 col-sm-12">
            <span>{title}</span>
          </div>
        </div>
      </div>
    )
  }
}
Stepper.defaultProps = {
  count: 4,
}

export default Stepper
