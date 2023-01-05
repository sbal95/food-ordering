import React from 'react'
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profile';
import Input from '../../components/form/Input'

const Account = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        actions.resetForm();
    }

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: '',
            number: '',
            email: '',
            persons: '',
            date: ''
        },
        onSubmit,
        validationSchema: profileSchema
    });

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: errors.fullName,

        },
        {
            id: 2,
            name: "email",
            type: "mail",
            placeholder: "Your Email",
            value: values.email,
            errorMessage: errors.email,
            touched: errors.email,

        },
        {
            id: 3,
            name: "number",
            type: "number",
            placeholder: "Your Phone Number",
            value: values.number,
            errorMessage: errors.number,
            touched: errors.number,

        },

        {
            id: 4,
            name: "adress",
            type: "text",
            placeholder: "Your Adress",
            value: values.adress,
            errorMessage: errors.adress,
            touched: errors.adress,

        },
        {
            id: 5,
            name: "job",
            type: "text",
            placeholder: "Your Job",
            value: values.job,
            errorMessage: errors.job,
            touched: errors.job,

        },
        {
            id: 6,
            name: "bio",
            type: "text",
            placeholder: "Your bio",
            value: values.bio,
            errorMessage: errors.bio,
            touched: errors.bio,

        }


    ]
  return (
      <form className="w-full h-full lg:py-4 lg:px-10 mt-5 lg:mt-0 gap-y-6 flex-col flex">
          <div className="text-4xl font-dancing px-5 py-3">
              <span>Account Settings</span>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">

              {inputs.map((input) => (
                  <Input key={input.id} {...input}
                      onChange={handleChange}
                      onBlur={handleBlur} />))}
          </div>
          <div>
              <button className="btn-primary">Update</button>
          </div>
      </form>
  )
}

export default Account