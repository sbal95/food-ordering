import { GiCampCookingPot, GiChecklist } from 'react-icons/gi';
import { RiEBike2Line } from 'react-icons/ri';
import { MdOutlineDoneOutline } from 'react-icons/md';
import Image from 'next/image'

const cart = () => {
    return (
        <div className='overflow-x-auto'>
            <div className='justify-between items-center flex flex-col p-10 min-h-[calc(100vh_-_412px)] min-w-[1000px] gap-y-10'>
                <div className='flex items-center flex-1   w-full'>
                    <table className='w-full text-sm text-center text-gray-500 ' >
                        <thead className='text-xs text-gray-300 uppercase bg-gray-700'>
                            <tr>
                                <th scope='col' className='py-3 px-6'>Product</th>
                                <th scope='col' className='py-3 px-6'>Extras</th>
                                <th scope='col' className='py-3 px-6'>Price</th>
                                <th scope='col' className='py-3 px-6'>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-secondary border-gray-700 hover:bg-primary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-3'>
                                    <Image src="/images/hero-bg.jpg" alt="" width={50} height={50} />
                                    <span>Good Pizza</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <span>mayonez, acı sos, ketçap</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <span>$20</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <span>1</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-evenly w-full bg-primary p-5 '>
                    <div className='flex-col flex items-center p-1'>
                        <GiChecklist className='text-3xl' />
                        <span className='text-lg'>Payment</span>
                    </div>
                    <div className='flex-col flex items-center p-1 animate-pulse'>
                        <GiCampCookingPot className='text-3xl' />
                        <span className='text-lg'>Preparing</span>
                    </div>
                    <div className='flex-col flex items-center p-1 text-center'>
                        <RiEBike2Line className='text-3xl' />
                        <span className='text-lg'>On The Way</span>
                    </div>
                    <div className='flex-col flex items-center p-1'>
                        <MdOutlineDoneOutline className='text-3xl' />
                        <span className='text-lg'>Delivered</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default cart