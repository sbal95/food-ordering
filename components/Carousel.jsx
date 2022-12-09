import React from 'react'
import Image from 'next/image';
import Title from './ui/Title';
import Slider from "react-slick";




export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 5000,
        appenDots: (dots) => (
            <div style={{
                    color:"yellow",
                    padding: "10px"
                }}>
                    <ul style={{
                        marginTop:"10px"
                    }}>
                        {dots}
                    </ul>
                </div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
        ),
    };
    return (
            <div className='h-screen w-full container mx-auto  -mt-[88px]'>
                <div className='absolute top-0 left-0 h-full w-full'>
                    <div className='ralative h-full w-full'>
                        <Image src="/images/hero-bg.jpg"
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        />
                    </div>
                </div>
            
                <Slider {...settings}>
                    <div> 
                        <div className=' text-white mt-48 flex flex-col items-start gap-y-10'>
                            <Title addClass="text-6xl"> Fast Food Restaurant</Title>
                            <p className="text-sm w-full sm:w-2/6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ratione
                                laudantium rem tempore velit debitis maxime corrupti
                                reprehenderit sint repellat, veritatis at est fuga! Veritatis
                                vel nemo in accusantium officilis.
                            </p>
                            <button className='btn-primary'>Order Now</button>
                        </div>
                    </div>     
                    <div>
                        <div className=' text-white mt-48 flex flex-col items-start gap-y-10'>
                            <Title addClass="text-6xl"> Fast Food Restaurant</Title>
                            <p className="text-sm w-full sm:w-2/6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ratione
                                laudantium rem tempore velit debitis maxime corrupti
                                reprehenderit sint repellat, veritatis at est fuga! Veritatis
                                vel nemo in accusantium officilis.
                            </p>
                            <button className='btn-primary'>Order Now</button>
                        </div>
                    </div>
                <div>
                    <div className=' text-white mt-48 flex flex-col items-start gap-y-10'>
                        <Title addClass="text-6xl"> Fast Food Restaurant</Title>
                        <p className="text-sm w-full sm:w-2/6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ratione
                            laudantium rem tempore velit debitis maxime corrupti
                            reprehenderit sint repellat, veritatis at est fuga! Veritatis
                            vel nemo in accusantium officilis.
                        </p>
                        <button className='btn-primary'>Order Now</button>
                    </div>
                </div>
                <div>
                    <div className=' text-white mt-48 flex flex-col items-start gap-y-10'>
                        <Title addClass="text-6xl"> Fast Food Restaurant</Title>
                        <p className="text-sm w-full sm:w-2/6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ratione
                            laudantium rem tempore velit debitis maxime corrupti
                            reprehenderit sint repellat, veritatis at est fuga! Veritatis
                            vel nemo in accusantium officilis.
                        </p>
                        <button className='btn-primary'>Order Now</button>
                    </div>
                </div>
                <div>
                    <div className=' text-white mt-48 flex flex-col items-start gap-y-10'>
                        <Title addClass="text-6xl"> Fast Food Restaurant</Title>
                        <p className="text-sm w-full sm:w-2/6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ratione
                            laudantium rem tempore velit debitis maxime corrupti
                            reprehenderit sint repellat, veritatis at est fuga! Veritatis
                            vel nemo in accusantium officilis.
                        </p>
                        <button className='btn-primary'>Order Now</button>
                    </div>
                </div>
                </Slider>
            </div>
    )
}

export default Carousel;