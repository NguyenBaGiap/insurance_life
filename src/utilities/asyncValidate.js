import { change } from 'redux-form'
import { simplePostRequest } from 'services/api'
import { commonHandleError } from 'redux/actions/registerActions'

export const asyncValidateStep02 = async (values, dispatch, props) => {
  if (values.tierId) {
    try {
      props.handleLoadingAmount()
      const submitPrice = {
        productId: values.productId,
        birth: values.birth,
        tierId: values.tierId.value,
      }
      const {
        data: { id, price },
      } = await simplePostRequest('/v1/sale/calculating-money', submitPrice)
      const priceStr = price
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      dispatch(change('StepSecondForm', 'price', `${priceStr} VNĐ`))
      dispatch(change('StepSecondForm', 'priceId', id))
    } catch (e) {
      commonHandleError(e)
    } finally {
      props.handleLoadingAmount()
    }
  }
}
