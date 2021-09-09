export class PaymentInfoResultJson {
  constructor(initialValue) {
    const { price, numberContract, remark, cif, nameAccount } = initialValue
    this.accountName = nameAccount
    this.cif = cif
    this.price = price
    this.numberContract = numberContract
    this.remark = remark
  }
}
