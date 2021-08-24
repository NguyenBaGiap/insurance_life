import { simplePostRequest } from './api'

export class PtiRequestClient {
  submitRegisterStepOne = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/registry-insurance`,
      formValues
    )
  }
  submitAdvisoryStepOne = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/registry-advisory`,
      formValues
    )
  }
}
