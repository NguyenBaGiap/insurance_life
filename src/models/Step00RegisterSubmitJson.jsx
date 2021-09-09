export class Step00RegisterSubmitJson {
  constructor(formValues) {
    this.cusName = formValues.cusName
    this.cusEmail = formValues.cusEmail
    this.cusLegalId = formValues.cusLegalId
    this.cusPhone = formValues.cusPhone
    this.participation = formValues.participation
    this.relationship = formValues.relationship?.value
    // get in params
    this.productId = formValues.productId
    this.daoSale = formValues.daoSale
    this.tierId = formValues.tierId.value
  }
}
