import { connect } from 'react-redux'
import { submitRegisterStep1 } from 'redux/actions/registerActions'
import StepOneRegister from 'uies/templates/_pti/_step_one/StepOneRegister'

const mapStateToProps = () => ({
  initialValues: {
    birthDateUserTarget: null,
    fullNameUserBuy: 'a',
    pidUserBuy: 'a',
    mobileNumberUserBuy: 'a',
    emailUserBuy: 'a@gmail.com',
    relationshipWithUserBuy: {
      value: 'chocolate',
      label: 'Chocolate',
    },
    fullNameUserTarget: 'a',
    genderUserTarget: {
      value: '1',
      label: 'Nam',
    },
    pidUserTarget: 'a',
    addressUserTarget: 'a',
    daoSale: '1111',
  },
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(submitRegisterStep1(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(StepOneRegister)
