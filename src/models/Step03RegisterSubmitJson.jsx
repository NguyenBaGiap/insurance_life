import moment from 'moment'

export class Step03RegisterSubmitJson {
  constructor(formValues) {
    this.cusName = formValues.cusName
    this.cusLegalId = formValues.cusLegalId
    this.cusPhone = formValues.cusPhone
    this.cusEmail = formValues.cusEmail
    this.personId = formValues.personId
    this.relationship = formValues.relationship.value
    this.personName = formValues.personName
    this.personGender = formValues.personGender.value
    this.personBirth = moment(formValues.personBirth).format('DD-MM-yyyy')
    this.personLegalId = formValues.personLegalId
    this.personAddress = formValues.personAddress
    this.priceId = formValues.priceId
    this.tierId = formValues.tierId.value
    this.exportBill = formValues.exportBill
    this.effectiveDate = moment(formValues.effectiveDate).format('DD-MM-yyyy')
  }
}
