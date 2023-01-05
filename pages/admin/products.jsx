import React, { useState } from 'react'
import Image from 'next/image'

const Products = () => {
    const products = [
        {
            resim: "/images/hamburger.jpg",
            kod: "63049e952...",
            title: "Good Burger",
            price: "15"
        },
        {
            resim: "/images/hero-bg.jpg",
            kod: "63049e952...",
            title: "Good Burger",
            price: "15"
        }
    ]



    return (



        <div className="flex flex-col w-full p-10 gap-y-6 overflow-x-auto">
            <div className="text-4xl font-dancing px-5 py-3">
                <span>Products</span>
            </div>
            <div className='flex w-full max-h-96 min-w-[1000px] rounded-lg'>
                <table class="w-full  ">
                    <thead className='bg-gray-700 '>
                        <tr className='text-gray-300'>
                            <th class="text-center pl-7 p-2">IMAGE</th>
                            <th class="text-center pl-7 p-2">ID</th>
                            <th class="text-center pl-7 p-2">TITLE</th>
                            <th class="text-center pl-7 p-2">PRICE</th>
                            <th class="text-center pl-7 p-2">ACTION</th>
                        </tr>
                    </thead>
                    {products.map((index) => (<tbody key={index.id} {...products} className='bg-secondary text-gray-400'>
                        <tr className=' hover:bg-primary transition-all' >
                            <td class="p-3 border-b-[1px] border-gray-700  "><Image src={`${index.resim}`}
                                alt=''
                                width={75}
                                height={75}
                                className='relative -right-2/4'
                            />
                            </td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7 text-center">{index.kod}</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7 text-center">{index.title}</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7 text-center">{index.price}</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7 text-center"><button className="btn-primary !bg-red-500" >Delete</button></td>
                        </tr>
                    </tbody>))}

                </table>
            </div>
        </div>



    )
}

export default Products