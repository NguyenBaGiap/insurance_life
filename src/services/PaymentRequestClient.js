import { simpleGetRequest, simplePostRequest } from './api'

export class PaymentRequestClient {
  fetchPaymentInfo = async () => {
    return await simpleGetRequest(
      `/v1/web/non-life/customer/payment-info`,
      null
    )
  }
  submitLoginNEO = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/login-vpo`,
      formValues
    )
  }
  submitPaymentTransaction = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/init-payment`,
      formValues
    )
  }
  submitPaymentByOTP = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/submit-payment`,
      formValues
    )
  }
  submitResentOTPPayment = async ({ uuid }) => {
    const urlSearchParams = new URLSearchParams()
    urlSearchParams.set('uuid', uuid)
    return await simpleGetRequest(
      `/v1/web/non-life/customer/resend-OTP`,
      urlSearchParams.toString()
    )
  }
}
