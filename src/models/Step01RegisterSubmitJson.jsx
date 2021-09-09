import moment from 'moment'

export class Step01RegisterSubmitJson {
  constructor(formValues) {
    this.personName = formValues.personName
    this.personLegalId = formValues.personLegalId
    this.relationship = formValues.relationship.value
    this.personGender = formValues.personGender.value
    this.daoSale = formValues.daoSale
    this.personAddress = formValues.personAddress
    this.personBirth = moment(formValues.personBirth).format('DD-MM-yyyy')
    this.leadId = formValues.leadId
  }
}
