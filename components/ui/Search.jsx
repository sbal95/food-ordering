import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title';
import Image from 'next/image'
import { GiCancel } from "react-icons/gi"

export const Search = ({ setIsSearchModal }) => {
    return (
        <div className='fixed w-screen h-screen bg-black z-50 top-0 
    left-0 after:[""] after:w-screen after:h-screen
    after:bg-secondry after:absolute after:top-0 after:left-0
    grid place-content-center opacity-80'>

            <OutsideClickHandler onOutsideClick={() =>
                setIsSearchModal(false)}>
                <div className='w-full h-full grid place-content-center'>
                    <div className='relative z-50 w-[370px] md:w-[600px]
            bg-white border-2 p-10 rounded-3xl'>
                        <Title addClass="text-center text-[40px]">Search</Title>
                        <input type="text" placeholder=' Search...' className='border w-full my-10 hover:text-primary' />
                        <ul>
                            <li className='flex items-center justify-between
                    hover:bg-primary p-1 transition-all'>
                                <div className='relative flex'>
                                    <Image src="/images/hamburger.jpg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <span className='font-bold' >Good Burger</span>
                                <span className='font-bold' >10$</span>
                            </li>

                            <li className='flex items-center justify-between
                    hover:bg-primary p-1 transition-all'>
                                <div className='relative flex'>
                                    <Image src="/images/hamburger.jpg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <span className='font-bold' >Good Burger</span>
                                <span className='font-bold' >10$</span>
                            </li>

                            <li className='flex items-center justify-between
                    hover:bg-primary p-1 transition-all'>
                                <div className='relative flex'>
                                    <Image src="/images/hamburger.jpg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <span className='font-bold' >Good Burger</span>
                                <span className='font-bold' >10$</span>
                            </li>
                        </ul>
                        <button className='absolute top-4 right-4'
                            onClick={() => setIsSearchModal(false)}                >
                            <GiCancel
                                size={25}
                                className='text-primary transition-all'
                            />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search;
