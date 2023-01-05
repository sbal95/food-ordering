import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

const Customers = () => {

  function NextBtn({onClick}){
    return <button className='absolute -bottom-16 left-[51%] bg-primary p-1 rounded-full text-white' onClick={onClick}> <FaAngleRight /></button>
  }
  function PrevBtn({ onClick }) {
    return <button className='absolute -bottom-16 right-[51%] bg-primary p-1 rounded-full text-white' onClick={onClick}> <FaAngleLeft /></button>
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true,
    autoplaySpeed:3500,
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          arrows:false,
        }
      },
    ]
    

  };
  return (
    <div className='container mx-auto my-8 mb-32' >
      <Title addClass="text-[40px] text-center"> What Our Says Our Custumers</Title>
      <Slider {...settings}>
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </Slider>
    </div>
  )
}

export default Customers