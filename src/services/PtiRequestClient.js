import { simpleGetRequest, simplePostRequest } from './api'

export class PtiRequestClient {
  fetchPackages = async () => {
    return await simpleGetRequest(
      `/v1/web/non-life/type-insurance/tier-by-product?productId=1`,
      null
    )
  }
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
      `/v1/web/non-life/customer/step-2`,
      formValues
    )
  }
  submitRegisterStepSecond = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/step-3`,
      formValues
    )
  }

  submitRegisterStepThird = async (formValues) => {
    return await simplePostRequest(
      `/v1/web/non-life/customer/send-contract`,
      formValues
    )
  }
}
