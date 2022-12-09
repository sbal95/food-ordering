import { useState } from 'react';
import Logo from '../ui/Logo';
import Search from '../ui/Search';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import { useRouter } from 'next/router';


export const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuhModal, setIsMenuModal] = useState(false);

    const router = useRouter()


    return (
        <div className= {`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary" }`}>
            <div className='container flex justify-between text-white 
        items-center h-full mx-auto'>
                <div>
                    < Logo />
                </div>
                <nav className={`sm:static absolute top-0 left-0 grid place-content-center z-50 w-full
            sm:text-white text-black sm:flex h-screen sm:w-auto sm:h-auto sm:bg-transparent bg-white ${isMenuhModal !== true && 'hidden'}`}>
                    <ul className='flex gap-x-2 sm:flex-row flex-col items-center font-bold sm:font-normal'>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <a href="">Home</a>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <a href="">Menu</a>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <a href="">About</a>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <a href="">Book Table</a>
                        </li>
                    </ul>
                    {isMenuhModal &&
                        <button onClick={() => setIsMenuModal(false)} >
                            <GiCancel
                                size={25}
                                className='absolute right-4 top-4 z-50 '
                            />
                        </button>
                    }


                </nav>

                <div className='flex gap-x-4 items-center'>
                    <a href="" className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                        <FaUserAlt />
                    </a>
                    <a href="" className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                        <FaShoppingCart />
                    </a>
                    <button href="" onClick={() => setIsSearchModal(true)}
                        className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                        <FaSearch />
                    </button>
                    <a href="" className='md:inline-block hidden'>
                        <button className='btn-primary'>Order Online</button>
                    </a>
                    <button className='sm:hidden inline-block' onClick={() => setIsMenuModal(true)} >
                        <GiHamburgerMenu className='text-xl' />
                    </button>
                </div>
            </div>
            {isSearchModal && (<Search setIsSearchModal={setIsSearchModal} />)}
        </div>
    )
}

export default Header