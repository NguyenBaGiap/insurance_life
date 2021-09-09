export class PaymentSubmitJson {
  constructor(formValues) {
    const {
      cif,
      remark,
      accountOptions: {
        value: { accountNumber, categoryAccount, cardNumber, cardType },
      },
    } = formValues
    this.cif = cif
    this.remark = remark
    this.accountNumber = accountNumber
    this.categoryAccount = categoryAccount
    this.cardNumber = cardNumber
    this.cardType = cardType
  }
}
