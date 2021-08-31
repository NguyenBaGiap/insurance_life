import { simplePostRequest } from './api'

export class PtiRequestClient {
  submitAdvisoryStepOne = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/registry-advisory`,
      formValues
    )
  }

  submitRegisterStepInit = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/registry-insurance`,
      formValues
    )
  }
  submitRegisterStepOne = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/registry-insurance`,
      formValues
    )
  }
}
