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
    //this.personBirth = personDto.birth
    if (personDto.birth) {
      this.personBirth = moment(personDto.birth, 'DD-MM-YYYY')
    }
    this.personLegalId = personDto.legalId
    this.personAddress = personDto.address
    this.leadId = personDto.leadId
    this.gender = personDto.gender || {}
    //packageDto
    this.priceId = packageDto.priceId
    this.price = packageDto.price
    this.exportBill = packageDto.exportBill
    // this.effectiveDate = new Date().getTime()
    if (packageDto.effectiveDate) {
      this.effectiveDate = moment(packageDto.effectiveDate, 'DD-MM-YYYY')
    } else {
      this.effectiveDate = new Date().getTime()
    }
    this.tierId = packageDto.tierId
      ? PACKAGE_OPTION.filter((pack) => pack.value === packageDto.tierId)[0]
      : {}
    this.personGender = personDto.gender
      ? GENDER_OPTION.filter((gen) => gen.value === personDto.gender)[0]
      : {}
    this.relationship = personDto.relationship
      ? RELATIONSHIP_OPTION.filter(
          (rel) => rel.value === personDto.relationship
        )[0]
      : {}
    // commit
    this.condition = true
    this.participation = true
  }
}
