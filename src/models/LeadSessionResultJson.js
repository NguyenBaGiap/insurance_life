import {
  GENDER_OPTION,
  PACKAGE_OPTION,
  RELATIONSHIP_OPTION,
} from 'utilities/constants'
import moment from 'moment'

export class LeadSessionResultJson {
  constructor(initialValue) {
    const { productId, customerDto, personDto, packageDto } = initialValue
    //customerDto
    this.productId = productId
    this.cusName = customerDto.name
    this.cusLegalId = customerDto.legalId
    this.cusPhone = customerDto.phone
    this.cusEmail = customerDto.email
    // person dto
    this.personId = personDto.id
    this.personName = personDto.name
    this.personBirth = moment(personDto.birth, 'DD-MM-yyyy').get()
    this.personLegalId = personDto.legalId
    this.personAddress = personDto.address
    //packageDto
    this.priceId = packageDto.priceId
    this.price = packageDto.price
    this.exportBill = packageDto.exportBill
    this.effectiveDate = moment(packageDto.effectiveDate, 'DD-MM-yyyy').get()
    this.tierId = packageDto.tierId
      ? PACKAGE_OPTION.filter((pack) => pack.value === packageDto.tierId)[0]
      : {}
    this.personGender = personDto.gender
      ? GENDER_OPTION.filter((gen) => gen.value === personDto.gender)[0]
      : {}
    this.personRelationship = personDto.relationship
      ? RELATIONSHIP_OPTION.filter(
          (rel) => rel.value === personDto.relationship
        )[0]
      : {}
  }
}
