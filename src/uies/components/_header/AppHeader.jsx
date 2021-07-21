import React from 'react'
import logoVpbank from 'static/img/logo-vpbank.svg'
import { Link } from 'react-router-dom'
import 'static/styles/_header.scss'

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="container d-flex justify-content-center justify-content-lg-between">
        <div className="logo mb-3 mb-lg-0 me-lg-auto">
          <Link to="/">
            <img className="logo-vpbank" src={logoVpbank} alt="logo-vpbank" />
          </Link>
        </div>
        <ul className="menu d-none d-lg-flex">
          <li className="menu-item active">
            <Link to="/" className="nav-link">
              Trang chủ
            </Link>
            <div className="process-active" />
          </li>
          <li className="menu-item">
            <Link to="/product">Sản phẩm</Link>
            <div className="process-active" />
          </li>
          <li className="menu-item">
            <Link to="/information">Tra cứu thông tin</Link>
            <div className="process-active" />
          </li>
          <li className="menu-item">
            <Link to="/contact">Liên hệ</Link>
            <div className="process-active" />
          </li>
        </ul>
      </div>
    </header>
  )
}
