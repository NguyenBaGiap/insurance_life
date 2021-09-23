import { change } from 'redux-form'
import { simplePostRequest } from 'services/api'
import moment from 'moment'

function ErrorValidate(field, message) {
  this[field] = message
}

export const asyncValidateRegisterStep = async (values, props) => {
  if (values.tierId && values.effectiveDate && values.personBirth) {
    try {
      props.handleLoadingAmount()
      const submitPrice = {
        productId: values.productId,
        birth: moment(values.personBirth).format('DD-MM-yyyy'),
        effectiveDate: moment(values.effectiveDate).format('DD-MM-yyyy'),
        tierId: values.tierId.value,
      }
      const {
        data: { id, amountDisplay },
      } = await simplePostRequest('/v1/sale/calculating-money', submitPrice)
      props.dispatch(change(props.form, 'priceId', id))
      props.dispatch(change(props.form, 'price', amountDisplay))
    } catch (e) {
      props.dispatch(change(props.form, 'price', null))
      throw new ErrorValidate('tierId', e.messages || e.data)
    } finally {
      props.handleLoadingAmount()
    }
  }
}
