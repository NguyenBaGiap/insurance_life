import { simplePostRequest } from './api'

export class PaymentRequestClient {
  submitLoginNEO = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/login-vpo`,
      formValues
    )
  }
}
