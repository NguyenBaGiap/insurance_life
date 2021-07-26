import React from 'react'
import logoVpbank from 'static/img/logo-vpbank.svg'
import { Link } from 'react-router-dom'
import 'static/styles/_header.scss'
import { useHistory } from 'react-router'

export default function AppHeader() {
  const {
    location: { pathname },
  } = useHistory()
  return (
    <header className="app-header">
      <div className="container d-flex justify-content-md-center justify-content-lg-between">
        <div className="logo mb-3 mb-lg-0 me-lg-auto">
          <Link to="/">
            <img className="logo-vpbank" src={logoVpbank} alt="logo-vpbank" />
          </Link>
        </div>
        <ul className="menu d-none d-lg-flex">
          <li className="menu-item">
            <Link to="/" className="nav-link">
              Trang chủ
            </Link>
            {pathname === '/' && <div className="process-active" />}
          </li>
          <li className="menu-item">
            <Link to="/product" className="nav-link">
              Sản phẩm
            </Link>
            {pathname === '/product' && <div className="process-active" />}
          </li>
          <li className="menu-item">
            <Link to="/information" className="nav-link">
              Tra cứu thông tin
            </Link>
            {pathname === '/information' && <div className="process-active" />}
          </li>
          <li className="menu-item">
            <Link to="/contact" className="nav-link">
              Liên hệ
            </Link>
            {pathname === '/contact' && <div className="process-active" />}
          </li>
        </ul>
      </div>
    </header>
  )
}
