export class PaymentInfoResultJson {
  constructor(initialValue) {
    const { amountDisplay, numberContract, remark, cif, nameAccount } =
      initialValue
    this.accountName = nameAccount
    this.cif = cif
    this.price = amountDisplay
    this.numberContract = numberContract
    this.remark = remark
  }
}
