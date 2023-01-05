import React from 'react'
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { useFormik, handleSubmit } from 'formik';
import { LoginSchema } from '../../schema/login';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs'

const Login = () => {


    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit,
        validationSchema: LoginSchema
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "mail",
            placeholder: "Your Email",
            value: values.email,
            errorMessage: errors.email,
            touched: errors.email,

        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: errors.password,

        },
    ]

    return (
        <div className='mx-auto md:px-32 sm:px-16 px-8 pb-44 lg:container'>
            <form className='flex flex-col items-center my-20  w-full mx-auto  '
                onSubmit={handleSubmit}>
                <Title addClass="text-[40px] pb-10">Login</Title>
                <div className='flex flex-col gap-y-3 w-full'>
                    {inputs.map((input) => (
                        <Input key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className='flex flex-col w-full gap-y-3 mt-6 mb-10'>
                    <button className='btn-primary '>LOGIN</button>
                    <button className='btn-primary !bg-secondary relative text-white w-full p-3 rounded-3xl flex items-center justify-center gap-x-2'><BsGithub /><span >GITHUB </span> </button>
                    <Link href="/auth/Register"><span className='underline underline-offset-1 text-xs cursor-pointer text-secondary'> Do You No Have  Account ? </span></Link>
                </div>
            </form>
        </div>
    )
}

export default Login