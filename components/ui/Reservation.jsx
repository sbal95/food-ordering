import React from 'react'
import Input from '../form/Input'
import Title from './Title'
import { ErrorMessage, useFormik } from 'formik';
import { resolve } from 'styled-jsx/css';
import { reservationsSchema } from '../../schema/reservation';




const Reservation = () => {

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
        validationSchema: reservationsSchema
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
            name: "number",
            type: "number",
            placeholder: "Your Phone Number",
            value: values.number,
            errorMessage: errors.number,
            touched: errors.number,

        },
        {
            id: 3,
            name: "email",
            type: "mail",
            placeholder: "Your Email",
            value: values.email,
            errorMessage: errors.email,
            touched: errors.email,

        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons",
            value: values.persons,
            errorMessage: errors.persons,
            touched: errors.persons,

        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            placeholder: "date",
            value: values.date,
            errorMessage: errors.date,
            touched: errors.date,

        }


    ]
    return (
        <div className='relative container grid grid-cols-1 lg:grid-cols-2 mx-auto gap-x-20 py-10'>
            <Title addClass='text-5xl pb-5 lg:col-span-2 '>Book A Table</Title>
            <form className='pt-10 container grid mx-auto gap-y-5 w-full h-full' onSubmit={handleSubmit}>
                
                {inputs.map((input) => (
                    <Input key={input.id} {...input} 
                    onChange={handleChange} 
                    onBlur={handleBlur} />))}

                <div className='pt-3'>
                    <button className='bg-primary text-white text-sm py-2 px-14 rounded-3xl hover:bg-yellow-400' type='submit' > BOOK NOW</button>
                </div>
            </form>
            <div className='container mx-auto m-10 grid col-span-1' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6432.062650456604!2d-81.47109658879977!3d28.476325424085985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ec39415df75%3A0xf985d8fc7734a5a1!2sUniversal%20Studios%20Florida!5e0!3m2!1str!2str!4v1670412789194!5m2!1str!2str"
                    className='lg:w-full lg:h-full h-80 w-80 w- flex mx-auto rounded-xl'>
                </iframe>
            </div>
        </div>
    )
}

export default Reservation