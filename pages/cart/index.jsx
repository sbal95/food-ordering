import Image from 'next/image'
import React from 'react'
import Title from '../../components/ui/Title';
import { useSelector } from 'react-redux';


const Cart = () => {
    const cart = useSelector((state) => state.cart);


    return (
        <div className='min-h-[calc(100vh_-_412px)]'>
            <div className='flex justify-between items-center md:flex-row flex-col'>
                <div className='min-h-[calc(100vh_-_412px)] flex items-center flex-1 p-10 overflow-x-auto w-full'>
                    <table className='w-full text-sm text-center text-gray-500 min-w-[1000px]' >
                        <thead className='text-xs text-gray-300 uppercase bg-gray-700'>
                            <tr>
                                <th scope='col' className='py-3 px-6'>Product</th>
                                <th scope='col' className='py-3 px-6'>Extras</th>
                                <th scope='col' className='py-3 px-6'>Price</th>
                                <th scope='col' className='py-3 px-6'>Quantity</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.products.map((product) =>(<tr className='bg-secondary border-gray-700 hover:bg-primary transition-all'key={product.id}>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-3'>
                                    <Image src="/images/hero-bg.jpg" alt="" width={50} height={50} />
                                    <span>{product.name}</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    {product.extras.map((extras)=> (<span key={extras.id}>{extras.name}, </span>))}
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <span>${product.price}</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <span>{product.quantity}</span>
                                </td>
                            </tr>))}

                        </tbody>
                    </table>
                </div>
                <div className='bg-secondary min-h-[calc(100vh_-_412px)] text-white flex flex-col justify-center p-12 w-full md:w-auto md:text-start !text-center'>
                    <Title addClass='text-[40px]'>CART TOTAL</Title>
                    <div className='flex flex-col gap-y-1'>
                        <span><b>Subtotal:</b> ${cart.total}</span>
                        <span><b>Discount:</b> $0.00</span>
                        <span><b>Total: </b>{cart.total}</span>
                    </div>
                    <div>
                        <button className='btn-primary mt-4 md:w-auto w-52'>CheckOut Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart