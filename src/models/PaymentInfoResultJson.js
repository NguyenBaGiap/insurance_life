import _ from 'lodash'

export class PaymentInfoResultJson {
  constructor(initialValue) {
    const {
      price,
      numberContract,
      remark,
      cif,
      nameAccount,
      accounts: { ca },
      cards: { credit, debit },
    } = initialValue
    this.accountName = nameAccount
    this.cif = cif
    this.price = price
    this.numberContract = numberContract
    this.remark = remark
    const cardList = _.concat(credit, debit).map(
      ({ productName, cardMaskNumber, cardNumber, type }) => ({
        label: `${productName} - ${cardMaskNumber}`,
        value: {
          accountNumber: null,
          categoryAccount: null,
          cardNumber,
          cardType: type,
        },
      })
    )
    const caList = ca.map(({ accountNumber, accountCategory, type }) => ({
      label: `Tài khoản thanh toán - ${accountNumber}`,
      value: {
        accountNumber,
        categoryAccount: accountCategory,
        cardNumber: null,
        cardType: type,
      },
    }))
    this.optionPayment = _.concat(cardList, caList)
  }
}
