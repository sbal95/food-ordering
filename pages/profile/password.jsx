import React from 'react'
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profile';
import Input from '../../components/form/Input'

const Password = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        actions.resetForm();
    }

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            password: '',
            passwordAgain: '',
        },
        onSubmit,
        validationSchema: profileSchema
    });

    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "New Password",
            value: values.password,
            errorMessage: errors.password,
            touched: errors.password,

        },
        {
            id: 2,
            name: "passwordAgain",
            type: "password",
            placeholder: "New Pasword Again",
            value: values.passwordAgain,
            errorMessage: errors.passwordAgain,
            touched: errors.passwordAgain,

        },
    ]
    return (



        <form className="w-full h-full lg:py-4 lg:px-10 mt-5 lg:mt-0 gap-y-6 flex-col flex" onSubmit={handleSubmit}>
            <div className="text-4xl font-dancing px-5 py-3">
                <span>Password</span>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">

                {inputs.map((input) => (
                    <Input key={input.id} {...input}
                        onChange={handleChange}
                        onBlur={handleBlur} />))}
            </div>
            <div>
                <button className="btn-primary" type='submit'>Update</button>
            </div>
        </form>
    )
}

export default Password