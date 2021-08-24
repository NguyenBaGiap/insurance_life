import React from 'react'
import { Modal } from 'react-bootstrap'
import welcomeIcon from 'static/img/welcome.icon.svg'
import 'static/styles/_popup.scss'

class PopupWelCome extends React.Component {
  render() {
    const { isOpen, handleCloseModal } = this.props
    return (
      <Modal
        className="popup-welcome"
        show={isOpen}
        centered={true}
        onHide={handleCloseModal}
      >
        <div className="img-icon d-flex justify-content-center">
          <img src={welcomeIcon} alt="welcome-cus" className="img-fluid" />
        </div>
        <div className="container description text-center">
          <h3 className="pt-4">Chào mừng Quý Khách</h3>
          <p className="p-3">
            Cảm ơn Quý Khách đã quan tâm đến sản phẩm của VPBank. Chúng tôi sẽ
            liên hệ và tư vấn cho Quý Khách trong thời gian sớm nhất.
          </p>
        </div>
        <div className="action-popup-welcome d-flex justify-content-center">
          <button className="btn btn-close-popup" onClick={handleCloseModal}>
            Đóng
          </button>
        </div>
      </Modal>
    )
  }
}

export default PopupWelCome
