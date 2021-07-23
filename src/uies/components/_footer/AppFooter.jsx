import React from 'react'
import { Link } from 'react-router-dom'
import 'static/styles/_footer.scss'
import classNames from 'classnames'

const Item = ({ value }) => {
  return (
    <div className="item">
      {!value.isImg && <Link to={value.url}>{value.content}</Link>}
      {value.isImg && (
        <Link to={value.url}>
          <img src={value.content} alt="vpbank-footer" />
        </Link>
      )}
    </div>
  )
}

const ColContent = ({ data, mobileShow }) => {
  return (
    <React.Fragment>
      <div
        className={classNames(
          'col-md-4 col-item',
          !mobileShow && 'd-none d-md-block'
        )}
      >
        {data.map((value, index) => (
          <Item key={index} value={value} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default function AppFooter({
  data: { address, products, information },
}) {
  return (
    <div className="insurance-footer p-5">
      <div className="container">
        <div className="row">
          <ColContent data={address} mobileShow={true} />
          <ColContent data={products} mobileShow={false} />
          <ColContent data={information} mobileShow={false} />
        </div>
      </div>
    </div>
  )
}
