import React from 'react'
import { TfiLocationPin } from 'react-icons/tfi'
import { MdCall, MdMailOutline } from 'react-icons/md'
import { FaPinterest, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='bg-secondary p-5 text-white  text-center items-center relative'>
      <div className='grid sm:grid-cols-3 container mx-auto relative '>
        <div className='pt-8'>
          <div className='font-dancing font-semibold text-2xl' >Contact Us</div>
          <div className='pt-5 text-md flex items-center mx-auto font-sans'><a href="" className='flex mx-auto items-center gap-1 hover:text-primary'> <TfiLocationPin />Location</a></div>
          <div className='pt-2 text-md flex items-center mx-auto font-sans'> <a href="" className='flex mx-auto items-center gap-1 hover:text-primary'> <MdCall />Call +01 1234567890 </a></div>
          <div className='pt-2 text-md flex items-center mx-auto font-sans'> <a href="" className='flex mx-auto items-center gap-1 hover:text-primary'> <MdMailOutline />demo@gmail.com </a></div>
        </div>
        <div className='pt-8'>
          <div className='font-dancing font-semibold text-4xl'><a href=""> Feane </a></div>
          <div className='pt-3 text-md flex items-center mx-auto font-sans'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</div>
          <div className='pt-3 text-md flex mx-auto gap-x-1 justify-center'>
            <a href="" className='bg-white text-black p-[6px] rounded-full hover:text-primary' > <FaFacebookF /></a>
            <a href="" className='bg-white text-black p-[6px] rounded-full hover:text-primary' > <FaTwitter /></a>
            <a href="" className='bg-white text-black p-[6px] rounded-full hover:text-primary' > <FaLinkedin /></a>
            <a href="" className='bg-white text-black p-[6px] rounded-full hover:text-primary' > <FaInstagram /></a>
            <a href="" className='bg-white text-black p-[6px] rounded-full hover:text-primary' > <FaPinterest /></a>
          </div>
        </div>
        <div className='pt-8'>
          <div className='font-dancing font-semibold text-2xl' >Openning Hours</div>
          <div className='pt-3 text-sm items-center mx-auto'>Everyday</div>
          <div className='pt-3 text-sm items-center mx-auto'>10.00 Am - 10.00 Pm</div>
        </div>
      </div>
      <div className='pt-16 font-sans text-md'>
        © 2022 All Rights Reserved By Free Html Templates
      </div>
    </div>
  )
}

export default Footer