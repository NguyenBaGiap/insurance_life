import { change } from 'redux-form'
import { simplePostRequest } from 'services/api'
import { commonHandleError } from 'redux/actions/baseActions'

function ErrorValidate(field, message) {
  this[field] = message
}

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
      dispatch(change('StepSecondForm', 'price', price))
      dispatch(change('StepSecondForm', 'priceId', id))
    } catch (e) {
      commonHandleError(e)
      dispatch(change('StepSecondForm', 'price', null))
      throw new ErrorValidate('tierId', e.messages || e.data)
    } finally {
      props.handleLoadingAmount()
    }
  }
}
