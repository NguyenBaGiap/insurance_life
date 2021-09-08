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
}
