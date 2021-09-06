import moment from 'moment'
import {
  PACKAGE_OPTION,
  GENDER_OPTION,
  RELATIONSHIP_OPTION,
} from 'utilities/constants'

export class Step03RegisterSubmitJson {
  constructor(formValues) {
    this.cusName = formValues.cusName
    this.cusLegalId = formValues.cusLegalId
    this.cusPhone = formValues.cusPhone
    this.cusEmail = formValues.cusEmail
    this.personId = formValues.personId
    this.personRelationship = formValues.personRelationship.value
    this.personName = formValues.personName
    this.personGender = formValues.personGender.value
    this.personBirth = moment(formValues.personBirth).format('DD-MM-yyyy')
    this.personLegalId = formValues.personLegalId
    this.personAddress = formValues.personAddress
    this.priceId = formValues.priceId
    this.tierId = formValues.tierId.value
    this.exportBill = formValues.exportBill
    this.effectiveDate = moment(formValues.effectiveDate).format('DD-MM-yyyy')
  }
}

export class Step03RegisterInitialValue {
  constructor(initialValue) {
    const { productId, customerDto, personDto, packageDto } = initialValue
    this.productId = productId
    this.cusName = customerDto.name
    this.cusLegalId = customerDto.legalId
    this.cusPhone = customerDto.phone
    this.cusEmail = customerDto.email
    this.personId = personDto.id
    this.personName = personDto.name
    this.personBirth = moment(personDto.birth, 'DD-MM-yyyy').get()
    this.personLegalId = personDto.legalId
    this.personAddress = personDto.address
    this.priceId = packageDto.priceId
    this.price = packageDto.price
    this.exportBill = packageDto.exportBill
    this.effectiveDate = moment(packageDto.effectiveDate, 'DD-MM-yyyy').get()
    this.tierId = PACKAGE_OPTION.filter(
      (pack) => pack.value === packageDto.tierId
    )[0]
    this.personGender = GENDER_OPTION.filter(
      (gen) => gen.value === personDto.gender
    )[0]
    this.personRelationship = RELATIONSHIP_OPTION.filter(
      (rel) => rel.value === personDto.relationship
    )[0]
  }
}
