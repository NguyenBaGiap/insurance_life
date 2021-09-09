import moment from 'moment'

export class Step02RegisterSubmitJson {
  constructor(formValues) {
    this.priceId = formValues.priceId
    this.personId = formValues.personId
    this.tierId = formValues.tierId.value
    this.exportBill = formValues.exportBill
    this.participation = formValues.participation
    this.effectiveDate = moment(formValues.effectiveDate).format('DD-MM-yyyy')
    this.condition = !!Number(formValues.condition)
  }
}
