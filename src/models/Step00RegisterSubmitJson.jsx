export class Step00RegisterSubmitJson {
  constructor(formValues) {
    this.cusName = formValues.cusName
    this.email = formValues.email
    this.cuslegalId = formValues.cusLegalId
    this.phone = formValues.phone
    this.participation = formValues.participation
    this.relationship = formValues.relationship?.value
    // get in params
    this.productId = formValues.productId
    this.tier = formValues.tier
    this.daoSale = formValues.daoSale
  }
}
