export class Step00RegisterSubmitJson {
  constructor(formValues, params) {
    this.cusName = formValues.cusName
    this.email = formValues.email
    this.legalId = formValues.legalId
    this.phone = formValues.phone
    this.productId = 1 // fix
    this.tier = formValues.tier
    this.relationship = formValues.relationship?.value
    this.daoSale = params.get('dao')
  }
}
