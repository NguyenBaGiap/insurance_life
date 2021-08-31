export class Step01RegisterSubmitJson {
  constructor(formValues, initialState) {
    this.cusName = formValues.cusName
    this.legalId = formValues.legalId
    this.relationship = formValues.relationship.value
    this.gender = formValues.gender.value
    this.daoSale = formValues.daoSale
    this.address = formValues.address
    this.birth = formValues.birth
    this.leadId = initialState.leadId
  }
}
