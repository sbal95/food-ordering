import Input from '../../components/form/Input'
import { useState } from 'react';
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profile';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';


const Footer = () => {
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
            name: "location",
            type: "location",
            placeholder: "Your location",
            value: values.location,
            errorMessage: errors.location,
            touched: errors.location,

        },
        {
            id: 2,
            name: "email",
            type: "email",
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
            name: "desc",
            type: "text",
            placeholder: "Write a Description",
            value: values.desc,
            errorMessage: errors.desc,
            touched: errors.desc,

        },
        {
            id: 5,
            name: "day",
            type: "text",
            placeholder: "Writa a Day",
            value: values.day,
            errorMessage: errors.day,
            touched: errors.day,

        },
        {
            id: 5,
            name: "time",
            type: "text",
            placeholder: "Writa a Time",
            value: values.time,
            errorMessage: errors.time,
            touched: errors.time,

        },
    ]

    const [icons, seticons] = useState([{
        text: "fa-brands fa-facebook-f",
        link: "http://www.facebook.com"
    }]);

    const [inputLink, setinputLink] = useState("https://");
    const [inputName, setinputName] = useState("fab fa-");


    return (
        <form className="w-full h-full lg:py-4 lg:px-10 mt-5 lg:mt-0 gap-y-6 flex-col flex">
            <div className="text-4xl font-dancing px-5 py-3">
                <span>Footer</span>
            </div>
            <div className="grid gap-4  items-center grid-cols-2">
                {inputs.map((input) => (
                    <Input key={input.id} {...input}
                        onChange={handleChange}
                        onBlur={handleBlur} />))}
            </div>
            <form>
                <div className='grid  grid-cols-2' >
                    <div className='flex gap-x-3'>
                        <Input placeHolder="Icons Link"
                            type="text"
                            defaultvalue="https:"
                            onChange={(e) => setinputLink(e.target.value)}
                            value={inputLink}
                        />
                        <Input placeHolder="Icons Name"
                            type="text"
                            defaultvalue="fab fa-"
                            onChange={(e) => setinputName(e.target.value)}
                            value={inputName}
                        />

                        <button
                            className='btn-primary flex items-center justify-center'
                            type='button'
                            onClick={() => {
                                seticons(icons => [...icons, {
                                    text: inputName, link: inputLink
                                }])
                                setinputName("fab fa-")
                                setinputLink("https://")
                            }}> Add</button>
                    </div>
                    <div className='flex gap-x-3 justify-end'>
                        {icons.map((item, index) => (
                            <div className="flex justify-between items-center gap-x-1 border-[2px] border-x-primary border-y-secondary p-1 rounded-full" key={index}>
                                <Link className='text-xl hover:text-primary' href={`${item.link}`}> <i class={`${item.text}`}></i></Link>
                                <button className='hover:text-red-600' type='button'
                                    onClick={() => seticons(icons.filter((cat) => cat !== item))}
                                >
                                    <i class="fa-solid fa-trash"></i></button>
                            </div>))}
                    </div>
                </div>
            </form>
            <div>
                <button className='btn-primary flex items-center justify-center'> Update</button>
            </div>
        </form>
    )
}

export default Footer