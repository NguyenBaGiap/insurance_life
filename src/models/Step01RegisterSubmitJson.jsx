import moment from 'moment'

export class Step01RegisterSubmitJson {
  constructor(formValues) {
    this.cusName = formValues.cusName
    this.legalId = formValues.legalId
    this.relationship = formValues.relationship.value
    this.gender = formValues.gender.value
    this.daoSale = formValues.daoSale
    this.address = formValues.address
    this.birth = moment(formValues.birth).format('DD-MM-yyyy')
    this.leadId = formValues.leadId
  }
}
