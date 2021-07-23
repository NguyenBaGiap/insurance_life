import React from 'react'
import { Link } from 'react-router-dom'
import 'static/styles/_footer.scss'

const Item = ({ value }) => {
  return (
    <div className="item">
      {!value.isImg && <Link to={value.url}>{value.content}</Link>}
      {value.isImg && (
        <Link to="/">
          <img src={value.content} alt="vpbank-footer" />
        </Link>
      )}
    </div>
  )
}

const ColContent = ({ data }) => {
  return (
    <div className="col-md-4 col-item">
      {data.map((value, index) => (
        <Item key={index} value={value} />
      ))}
    </div>
  )
}

export default function AppFooter({
  initialValues: { address, products, information },
}) {
  return (
    <div className="insurance-footer p-5">
      <div className="container">
        <div className="row">
          <ColContent data={address} />
          <ColContent data={products} />
          <ColContent data={information} />
          {/*<div className="col-md-4">*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">*/}
          {/*      <img src={logoFooter} alt="vpbank-footer" />*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <div className="item pt-3">*/}
          {/*    <Link className="head" to="/">*/}
          {/*      Ngân hàng TMCP Việt Nam Thịnh Vượng*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Trụ sở chính: 89 Láng Hạ, Quận Đống Đa, Hà Nội</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Hotline: 1900 54 54 75</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Email: customercare@vpbank.com.vn</Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="col-md-4">*/}
          {/*  <div className="item pt-3">*/}
          {/*    <Link className="head big-head" to="/">*/}
          {/*      Sản phẩm*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Bảo hiểm sức khỏe</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Bảo hiểm nhà</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Bảo hiểm xe cơ giới</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Bảo hiểm du lịch</Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="col-md-4">*/}
          {/*  <div className="item pt-3">*/}
          {/*    <Link className="head big-head" to="/">*/}
          {/*      Tra cứu thông tin*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Tra cứu GCN & Bồi thường</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Tra cứu hóa đơn điện tử</Link>*/}
          {/*  </div>*/}
          {/*  <div className="item">*/}
          {/*    <Link to="/">Tra cứu lịch sử bồi thường</Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}
