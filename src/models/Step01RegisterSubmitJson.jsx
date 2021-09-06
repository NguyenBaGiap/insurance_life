import moment from 'moment'
import { GENDER_OPTION } from '../utilities/constants'

export class Step01RegisterSubmitJson {
  constructor(formValues) {
    this.cusName = formValues.cusName
    this.legalId = formValues.legalId
    this.relationship = formValues.relationship.value
    this.gender = formValues.gender.value
    this.daoSale = formValues.daoSale
    this.address = formValues.address
    this.birth = moment(formValues.birth).format('DD-MM-yyyy')
    this.leadId = formValues.leadId
  }
}

export class Step01RegisterInitialValues {
  constructor(initialValues) {
    const { personDto } = initialValues
    this.cusName = personDto.name
    this.gender = personDto.value
    this.birth = personDto.birth
    this.address = personDto.address
    this.leadId = personDto.leadId
    this.legalId = personDto.legalId
    this.daoSale = personDto.daoSale
    if (personDto.relationship) {
      this.relationship = GENDER_OPTION.filter(
        (gen) => gen.value === personDto.relationship
      )[0]
    } else {
      this.relationship = {}
    }
  }
}
