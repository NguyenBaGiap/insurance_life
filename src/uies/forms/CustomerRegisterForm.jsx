import React from 'react'
import { Field } from 'redux-form'
import { required, emailFormat } from 'utilities/validate'
import SimpleTextField from 'uies/components/_text_field/SimpleTextField'

function CustomerRegisterForm({ handleSubmit, pristine, submitting }) {
  const handleSubmitUI = async (values) => {
    await handleSubmit(values)
  }
  return (
    <form className="container p-5" onSubmit={handleSubmitUI}>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <Field
            name="fullName"
            label="Tên khách hàng"
            type="text"
            validate={[required, emailFormat]}
            //loading
            required
            component={SimpleTextField}
          />
        </div>
        <div className="col-md-12 col-sm-12">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
export default CustomerRegisterForm
