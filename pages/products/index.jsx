import React from 'react'
import Header from '../../components/layout/Header'
import Image from 'next/image'




function index() {
  return (
    <div>
      <Header />

      <div className=' relative grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5 lg:mt-3 mx-auto h-screen items-center'>
        <div className='w-full h-full flex mx-auto items-center'>
          <Image
            src='/images/hamburger.jpg'
            alt=''
            width={600}
            height={600}
            className='mx-auto items-center object-contain'


          />
        </div>
        <div className=' lg:pl-3 pl-10'>
          <div className='grid grid-cols-1 gap-y-10'>
            <div className=' font-dancing font-bold text-5xl'>
              Good Pizza
            </div>
            <div className='text-primary text-2xl underline decoration-solid decoration-primary'>
              $13
            </div>
            <div className='w-2/3'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              consectetur provident eius possimus distinctio corporis
              sit vitae quis molestiae praesentium. Architecto sequi
              exercitationem, doloribus accusamus possimus qui voluptate dolorum consectetur!
            </div>
            <div className='grid gap-y-5'>
              <div className='font-semibold text-2xl grid-cols-1'>Choose The Size</div>
              <div className='grid sm:grid-flow-col sm:auto-cols-max sm:gap-x-10 gap-y-5 items-center'>
                <input type="image" src="/images/hero-bg.jpg" alt="" width={44} height={44} className='object-cover rounded-full' />
                <input type="image" src="/images/hero-bg.jpg" alt="" width={55} height={55} className='object-cover rounded-full' />
                <input type="image" src="/images/hero-bg.jpg" alt="" width={66} height={66} className='object-cover rounded-full' />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-y-3 '>
              <div className='font-medium' >Choose additional ingredients</div>
              <div className='grid sm:grid-flow-col sm:auto-cols-max sm:gap-x-5 gap-y-5 '>
                <div className='gap-x-2 flex'><input type="checkbox" name="" id="" /><p>Ketçap  </p> </div>
                <div className='gap-x-2 flex'><input type="checkbox" name="" id="" /><p>Mayonez </p> </div>
                <div className='gap-x-2 flex'><input type="checkbox" name="" id="" /><p>Acı Sos </p> </div>
              </div>
            </div>
            <div>
              <button className='bg-primary p-3 rounded-3xl'>Add To Card</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default index