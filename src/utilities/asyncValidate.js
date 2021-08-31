import { change } from 'redux-form'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const asyncValidateStep02 = async (values, dispatch, props) => {
  if (values.insurancePackage && values.effectiveDate) {
    console.log(' vao day sau 1s', values.insurancePackage)
    props.handleLoadingAmount()
    await sleep(3000) // call api
    dispatch(change('StepSecondForm', 'amount', 1000))
    props.handleLoadingAmount()
  }
}
