import React from 'react'
import Title from './ui/Title'
import Slider from "react-slick";
import Image from 'next/image';


function Customers() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className='container mx-auto text-center mb-32'>
      <div className='text-3xl'>
        <Title>What Says Our Customers </Title>
      </div>
      <div className='' >
        <Slider {...settings}>
          <div className='gap-5 pt-10 container' >
            <div className='container bg-secondary text-white p-5 rounded-lg '>
              <div className='text-start text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat adipisci reprehenderit quis architecto cum voluptates totam quod odit recusandae repudiandae quidem at maiores voluptatibus, iure quia nam mollitia. Aut.
              </div>
              <div className='text-start pt-4 font-semibold'>
                Jack RUSSEL
              </div>
              <div className='text-start pt-1 font-light text-sm pb-3'>
                Orlando
              </div>
            </div>
            <div className='relative mt-6 mb-10 rounded-full w-1/6 pt-24'>
              <Image src="/images/hero-bg.jpg" alt='' layout="fill"
              className='rounded-full
              border-primary
              border-4
              object-cover
              '
              />
            </div>
          </div>

          <div className='gap-5 pt-10 container' >
            <div className='container bg-blue-300 text-white p-5 rounded-lg '>
              <div className='text-start text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat adipisci reprehenderit quis architecto cum voluptates totam quod odit recusandae repudiandae quidem at maiores voluptatibus, iure quia nam mollitia. Aut.
              </div>
              <div className='text-start pt-4 font-semibold'>
                Jack RUSSEL
              </div>
              <div className='text-start pt-1 font-light text-sm pb-3'>
                Orlando
              </div>
            </div>
            <div className='relative mt-6 mb-10 rounded-full w-1/6 pt-24'>
              <Image src="/images/hero-bg.jpg" alt='' layout="fill"
                className='rounded-full
              border-primary
              border-4
              object-cover
              '
              />
            </div>
          </div>

          <div className='gap-5 pt-10 container' >
            <div className='container bg-green-300 text-white p-5 rounded-lg '>
              <div className='text-start text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat adipisci reprehenderit quis architecto cum voluptates totam quod odit recusandae repudiandae quidem at maiores voluptatibus, iure quia nam mollitia. Aut.
              </div>
              <div className='text-start pt-4 font-semibold'>
                Jack RUSSEL
              </div>
              <div className='text-start pt-1 font-light text-sm pb-3'>
                Orlando
              </div>
            </div>
            <div className='relative mt-6 mb-10 rounded-full w-1/6 pt-24'>
              <Image src="/images/hero-bg.jpg" alt='' layout="fill"
                className='rounded-full
              border-primary
              border-4
              object-cover
              '
              />
            </div>
          </div>

          <div className='gap-5 pt-10 container' >
            <div className='container bg-red-500 text-white p-5 rounded-lg '>
              <div className='text-start text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat adipisci reprehenderit quis architecto cum voluptates totam quod odit recusandae repudiandae quidem at maiores voluptatibus, iure quia nam mollitia. Aut.
              </div>
              <div className='text-start pt-4 font-semibold'>
                Jack RUSSEL
              </div>
              <div className='text-start pt-1 font-light text-sm pb-3'>
                Orlando
              </div>
            </div>
            <div className='relative mt-6 mb-10 rounded-full w-1/6 pt-24'>
              <Image src="/images/hero-bg.jpg" alt='' layout="fill"
                className='rounded-full
              border-primary
              border-4
              object-cover
              '
              />
            </div>
          </div>
          
        </Slider>
      </div>
    </div>
  )
}

export default Customers