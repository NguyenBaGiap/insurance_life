import moment from 'moment'
import { PACKAGE_OPTION } from 'utilities/constants'

export class Step02RegisterSubmitJson {
  constructor(formValues) {
    this.priceId = formValues.priceId
    this.personId = formValues.personId
    this.tierId = formValues.tierId.value
    this.billExport = formValues.billExport
    this.participation = formValues.participation
    this.effectiveDate = moment(formValues.effectiveDate).format('DD-MM-yyyy')
    this.condition =
      (typeof formValues.condition === 'string' &&
        formValues.condition === 'true') ||
      formValues.condition === true
  }
}

export class Step02RegisterInitialValues {
  constructor(initialValues) {
    const { productId, packageDto, personDto } = initialValues
    this.effectiveDate = new Date().getTime()
    this.price = packageDto.price
    this.priceId = packageDto.priceId
    this.billExport = Boolean(packageDto.exportBill)
    this.condition = true
    this.participation = true
    this.personId = personDto.id
    this.birth = personDto.birth
    this.productId = productId
    if (packageDto.tierId) {
      this.tierId = PACKAGE_OPTION.filter(
        (pack) => pack.value === packageDto.tierId
      )[0]
    } else {
      this.tierId = {}
    }
  }
}
