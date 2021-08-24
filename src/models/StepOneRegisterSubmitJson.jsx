export class StepOneRegisterSubmitJson {
  constructor(formValues, params) {
    this.cusName = formValues.cusName
    this.email = formValues.email
    this.legalId = formValues.legalId
    this.phone = formValues.phone
    this.typeId = 8 // fix by non_life
    this.tier = formValues.tier
    this.relationship = formValues.relationship?.value
    this.daoSale = params.get('dao_sale')
  }
}
