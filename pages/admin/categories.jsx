import Input from '../../components/form/Input'
import { useState } from 'react';

const Categories = () => {
    
    const [inputText, setInputText] = useState("");
    const [categories, setCategories] = useState(["pizza"]);

    return (
        <form className="w-full h-full lg:py-4 lg:px-10 mt-5 lg:mt-0 gap-y-6 flex-col flex">
            <div className="text-4xl font-dancing px-5 py-3">
                <span>Categories</span>
            </div>
            <div className="flex gap-4 flex-1 items-center">
                <Input placeHolder="Add New Category"
                 onChange={(e) => setInputText(e.target.value)}
                 value={inputText}
                />
                <button className='btn-primary w-24 flex justify-center items-center'
                    onClick={() => {
                        setCategories(categories=>[... categories, inputText])
                        setInputText("")
                    }}
                    type="button"
                >Add</button>
            </div>
            <div className='mt-10 gap-y-3 flex flex-col'>
                {categories.map((category, index) => (<div className="flex justify-between" key={index}>
                    <b className='text-xl'>{category}</b>
                    <button className='btn-primary !bg-danger'
                    onClick={() => setCategories(categories.filter((cat) => cat !== category))}
                    
                    >
                        Delete</button>
                </div>))}

            </div>
        </form>
    )
}

export default Categories