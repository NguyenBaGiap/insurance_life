import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import moment from 'moment'
import {
  required,
  normalizeDate,
  normalizeMoney,
  validatePTIStep,
} from 'utilities/validate'
import { LIST_QUESTION } from 'utilities/constants'
import SimpleTextField from 'uies/components/_field/SimpleTextField'
import SimpleSelectField from 'uies/components/_field/SimpleSelectField'
import SimpleDateField from 'uies/components/_field/SimpleDateField'
import SimpleCheckBoxField from 'uies/components/_field/SimpleCheckBoxField'
import { simplePostRequest } from 'services/api'
import dot from 'static/img/_intro/dot.svg'

class StepSecondForm extends React.Component {
  state = {
    isLoadingAmount: false,
  }
  handleLoadingPrice = (isLoadingAmount) => {
    this.setState({ isLoadingAmount })
  }
  inputCalculatePrice = (value) => {
    const {
      currentFormValues: { productId, tierId, effectiveDate, personBirth },
    } = this.props
    return {
      productId,
      birth: moment(personBirth).format('DD-MM-yyyy'),
      effectiveDate: moment(effectiveDate).format('DD-MM-yyyy'),
      tierId: tierId?.value,
      ...value,
    }
  }
  asyncRequestPrice = async (formValues) => {
    const { form, dispatch } = this.props
    try {
      this.handleLoadingPrice(true)
      const {
        data: { id, amountDisplay },
      } = await simplePostRequest('/v1/sale/calculating-money', formValues)
      dispatch(change(form, 'priceId', id))
      dispatch(change(form, 'price', amountDisplay))
    } catch (e) {
      toastr.warning(
        'Thông báo',
        e.message || e.data || 'Chưa có sản phẩm phù hợp.',
        {
          timeOut: 5000,
          position: 'top-right',
        }
      )
      dispatch(change(form, 'price', null))
      dispatch(change(form, 'priceId', null))
    } finally {
      this.handleLoadingPrice(false)
    }
  }
  onChangePackage = async (e, newValue, previousValue) => {
    if (newValue.value !== previousValue?.value) {
      const submitValues = this.inputCalculatePrice({
        tierId: newValue.value,
      })
      await this.asyncRequestPrice(submitValues)
    }
  }
  onChangeEffectiveDate = async (e, newValue, previousValue) => {
    if (newValue !== previousValue) {
      const submitValues = this.inputCalculatePrice({
        effectiveDate: moment(newValue).format('DD-MM-yyyy'),
      })
      await this.asyncRequestPrice(submitValues)
    }
  }
  render() {
    const { handleSubmit, handleGoBack, isParticipation, insurancePackage } =
      this.props
    const { isLoadingAmount } = this.state
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
              placeholder="Chọn gói bảo hiểm"
              validate={[required]}
              required
              component={SimpleSelectField}
              onChange={this.onChangePackage}
              selectableValues={insurancePackage}
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3">
            <Field
              name="effectiveDate"
              label="Ngày hiệu lực"
              normalize={normalizeDate}
              component={SimpleDateField}
              onChange={this.onChangeEffectiveDate}
              min={new Date()}
              validate={[required]}
              required
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-sm-3 pt-md-3 step-2-money">
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
            <h4 className="participation-confirm">
              Vui lòng lựa chọn 1 trong 2 đáp án Có hoặc Không. Nếu Khách hàng
              có 01 trong các điều kiện trên thì chọn Có, nếu không nằm trong
              điều kiện nào thì chọn Không.
            </h4>
          </div>
          <div
            id="box-btn-confirm"
            className="col-md-12 col-sm-12 pt-3 d-flex align-items-baseline"
          >
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-confirm-custom">
                <Field
                  name="condition"
                  component="input"
                  type="radio"
                  value={0}
                />
                &nbsp; Có
              </label>
              <label className="btn btn-confirm-custom active">
                <Field
                  name="condition"
                  component="input"
                  type="radio"
                  value={1}
                />
                &nbsp; Không
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 pt-3">
            {!isParticipation && (
              <span className="text-danger step-2-question">
                Vui lòng tích chọn cam kết.
              </span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 d-flex justify-content-md-start align-items-baseline">
            <div className="field-participation">
              <Field name="participation" component={SimpleCheckBoxField} />
            </div>
            <div className="participation-confirm">
              <p>
                Chúng tôi (Tôi và người có tên ở trên) đồng ý tham gia chương
                trình bảo hiểm. Tôi cam kết với kiến thức và sự hiểu biết tốt
                nhất của tôi đảm bảo rằng những thông tin bên trên là đúng, đầy
                đủ và là cơ sở để phát hành hợp đồng bảo hiểm. Chúng tôi xác xác
                nhận hiểu rõ các điều khoản, điều kiện và quy tắc của chương
                trình bảo hiểm.
              </p>
              <p>
                Tôi đồng ý thông báo cho PTI ngay lập tức nếu có sự thay đổi về
                tình trạng sức khỏe và/hoặc thông tin cá nhân trước ngày bắt đầu
                bảo hiểm.
              </p>
              <p>
                Tôi đồng ý để PTI tìm kiếm thông tin y tế từ các cơ sở y tế
                chúng tôi đã điều trị hoặc từ các công ty bảo hiểm đã chấp thuận
                giấy yêu cầu bảo hiểm của chúng tôi. Tôi đại diện cho người có
                tên ở trên đồng ý cho việc cung cấp những thông tin trên.
              </p>
              <p>
                Tôi đồng ý chia sẻ các thông tin kê khai trên đây từ VPBank cho
                Công ty bảo hiểm PTI để đăng ký tham gia bảo hiểm.
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
            <button
              type="submit"
              className="btn-submit"
              disabled={!isParticipation}
            >
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
  validate: validatePTIStep,
  asyncChangeFields: ['price', 'priceId'],
  destroyOnUnmount: true,
  enableReinitialize: true,
})(StepSecondForm)
