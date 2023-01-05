import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from 'react-icons/hi'
import Link from 'next/link'

const MenuItem = () => {
    return (

        <div className='rounded-2xl container bg-slate-900 text-white text-justify hover:scale-105 transition-all'>
            <div className=' bg-[#f1f2f3] rounded-t-lg rounded-bl-3xl  py-2 '>
                <Link href="/products"></Link>
                <div className='relative w-40 h-40 mx-auto '>
                    <Image src='/images/hamburger.jpg' alt=''
                        layout='fill'
                        className=' rounded-full object-cover' />
                </div>
            </div>
            <div className=' my-3 p-3'>
                <p className=' mt-5 text-2xl font-bold' > Delicious Burger</p>
                <p className=' mt-5'>Veniam debitis quaerat officiis quasi cupiditate quo,
                    quisquam velit, magnam voluptatem repellendus sed eaque</p>
                <div className='flex justify-between px-3 mt-10 items-center'>
                    <p>$20</p>
                    <Link href="/products"><button className=' bg-orange-400 rounded-full p-2 hover:bg-primary' ><HiShoppingCart /></button></Link>
                </div>

            </div>
        </div>

    )
}

export default MenuItem