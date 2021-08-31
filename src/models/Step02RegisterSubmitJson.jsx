import moment from 'moment'

export class Step02RegisterSubmitJson {
  constructor(formValues) {
    this.tierId = formValues.tierId
    this.billExport = formValues.billExport
    this.participation = formValues.participation
    this.effectiveDate = moment(formValues.effectiveDate).format('DD-MM-yyyy')

    this.condition =
      (typeof formValues.condition === 'string' &&
        formValues.condition === 'true') ||
      formValues.condition === true
  }
}
