import Image from 'next/image'
import Title from './ui/Title'
import { MdShoppingCart } from 'react-icons/md'

const CampaignItem = () => {

    return  (
        <div className='bg-secondary flex-1  p-5 py-5 px-[15px]
        rounded-md flex items-center gap-x-4'>

            <div className='relative sm:h-40 sm:w-40 w-36 h-36 after:content-[""]
            border-[5px] border-primary rounded-full overflow-hidden '>
                <Image src='/images/hamburger.jpg'
                alt=''
                layout='fill'
                className='rounded-full hover:scale-110 transition-all'
                objectFit='cover'/>
            </div>

            <div className='text-white'>

                <Title addClass="text-2xl">Tasty Thursdays</Title>

                <div className=' font-dancing my-3'>
                    <span className='text-[40px]' >20%</span>
                    <span className='text-s inline-block ml-1' >off</span>
                </div>
                <button className='flex items-center gap-x-2
                btn-primary sm:text-md text-sm'>
                <MdShoppingCart size={20} />  Order Now  </button>
            </div>
        </div>
    )
}



const Campaigns = () => {
    return (
        <div className='flex justify-between container mx-auto py-20  gap-6 flex-wrap'>
            <CampaignItem/>
            <CampaignItem />
        </div>
    )
}


export default Campaigns;