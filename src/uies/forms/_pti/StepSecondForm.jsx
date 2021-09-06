import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { asyncValidateRegisterStep } from 'utilities/asyncValidate'
import { required, normalizeDate, normalizeMoney } from 'utilities/validate'
import { PACKAGE_OPTION, LIST_QUESTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import SimpleCheckBoxField from 'uies/components/_field/SimpleCheckBoxField'
import dot from 'static/img/_intro/dot.svg'

class StepSecondForm extends React.Component {
  state = {
    reRender: true,
  }
  handleClickCondition = () => {
    this.setState({
      reRender: !this.state.reRender,
    })
  }
  render() {
    const { handleSubmit, handleGoBack, isLoadingAmount } = this.props
    return (
      <form
        autoComplete="off"
        className="container mt-5 form-step-2"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 title-form pt-3">
            <h3>Chọn gói bảo hiểm</h3>
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="tierId"
              label="Gói bảo hiểm"
              validate={[required]}
              //loading
              required
              component={SimpleSelectField}
              selectableValues={PACKAGE_OPTION}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="effectiveDate"
              label="Ngày hiệu lực"
              normalize={normalizeDate}
              component={SimpleDateField}
              validate={[required]}
              required
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="price"
              label="Tổng số tiền"
              type="text"
              normalize={normalizeMoney}
              disabled
              loading={isLoadingAmount}
              component={SimpleTextField}
            />
          </div>
          <div className="col-md-12 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="exportBill"
              component={SimpleCheckBoxField}
              label="Xuất hóa đơn VAT"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 pt-5">
            <h3>Câu hỏi sức khỏe</h3>
          </div>
          {LIST_QUESTION.map((questions, index) => (
            <div
              className="col-md-12 col-sm-12 pt-2 step-2-question"
              key={index}
            >
              <p>
                <strong>{index + 1}.</strong> &nbsp;
                <span>{questions.label}</span>
              </p>
              {questions.subs &&
                questions.subs.map((sub, i) => (
                  <p className=" pl-3" key={i}>
                    <img src={dot} alt="dots" className="pr-2" />
                    <span>{sub}</span>
                  </p>
                ))}
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 pt-3">
            <h4>
              Vui lòng lựa chọn 1 trong 2 đáp án Có hoặc Không. Nếu Khách hàng
              có 01 trong các điều kiện trên thì ấn vào Có, nếu không nằm trong
              điều kiện nào thì ấn vào Không.
            </h4>
          </div>
          <div
            id="box-btn-confirm"
            className="col-md-12 col-sm-12 pt-3 d-flex align-items-baseline"
          >
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                className="btn btn-confirm-custom"
                onClick={this.handleClickCondition}
              >
                <Field
                  name="condition"
                  component="input"
                  type="radio"
                  value={false}
                />
                &nbsp; Có
              </label>
              <label
                className="btn btn-confirm-custom active"
                onClick={this.handleClickCondition}
              >
                <Field
                  name="condition"
                  component="input"
                  type="radio"
                  value={true}
                />
                &nbsp; Không
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 pt-3 d-flex justify-content-md-start align-items-baseline">
            <div className="field-participation">
              <Field
                name="participation"
                component={SimpleCheckBoxField}
                validate={[required]}
              />
            </div>
            <div className="participation-confirm">
              <p>
                Chúng tôi (tôi và người có tên ở trên) đồng ý tham gia chương
                trình bảo hiểm. Tôi cam kết với kiến thức và sự hiểu biết tốt
                nhất của tôi đảm bảo rằng những thông tin bên trên là đúng, đầy
                đủ và là cơ sở để phát hành hợp đồng bảo hiểm. Chúng tôi xác
                nhận hiểu rõ các điều khoản, điều kiện và quy tắc của chương
                trình bảo hiểm.
              </p>
              <p>
                Tôi đồng ý thông báo cho PTI ngay lập tức nếu có sự thay đổi về
                tình trạng sức khỏe và/ hoặc thông tin cá nhân trước ngày bắt
                đầu bảo hiểm. Tôi đồng ý để PTI tìm kiếm thông tin y tế từ các
                cơ sở y tế chúng tôi đã điều trị hoặc từ các công ty bảo hiểm đã
                chấp thuận giấy yêu cầu bảo hiểm của chúng tôi.
              </p>
              <p>
                Tôi đại diện cho người có tên ở trên đồng ý cho việc cung cấp
                những thông tin trên.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 btn-action pb-5">
            <button
              type="button"
              className="btn-back mr-3"
              onClick={handleGoBack}
            >
              Quay lại
            </button>
            <button type="submit" className="btn-submit">
              Tiếp tục
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'StepSecondForm',
  asyncValidate: asyncValidateRegisterStep,
  asyncChangeFields: ['price', 'tierId', 'priceId', 'effectiveDate'],
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StepSecondForm)
