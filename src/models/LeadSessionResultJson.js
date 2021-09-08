import { GENDER_OPTION, RELATIONSHIP_OPTION } from 'utilities/constants'
import moment from 'moment'
import _ from 'lodash'

export class LeadSessionResultJson {
  constructor(initialValue, insurancePackage) {
    const { productId, staffCode, customerDto, personDto, packageDto } =
      initialValue
    //customerDto
    this.daoSale = staffCode
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
    if (packageDto.effectiveDate) {
      this.effectiveDate = moment(packageDto.effectiveDate, 'DD-MM-YYYY')
    } else {
      this.effectiveDate = new Date().getTime()
    }
    this.tierId = packageDto.tierId
      ? _.find(insurancePackage, { value: packageDto.tierId })
      : {}
    this.personGender = personDto.gender
      ? _.find(GENDER_OPTION, { value: personDto.gender })
      : {}

    this.relationship = personDto.relationship
      ? _.find(RELATIONSHIP_OPTION, { value: personDto.relationship })
      : {}
    // commit
    this.condition = true
    this.participation = true
  }
}
