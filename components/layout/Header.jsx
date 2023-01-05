import { useState } from 'react';
import Logo from '../ui/Logo';
import Search from '../ui/Search';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';



export const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuhModal, setIsMenuModal] = useState(false);
    const cart = useSelector((state) => state.cart);
    const router = useRouter()


    return (
        <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}>
            <div className='container flex justify-between text-white 
        items-center h-full mx-auto'>
                <div>
                    < Logo />
                </div>
                <nav className={`sm:static absolute top-0 left-0 grid place-content-center z-50 w-full
            sm:text-white text-black sm:flex h-screen sm:w-auto sm:h-auto sm:bg-transparent bg-white ${isMenuhModal !== true && 'hidden'}`}>
                    <ul className='flex gap-x-2 sm:flex-row flex-col items-center font-bold sm:font-normal'>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/about">About</Link>
                        </li>
                        <li className='px-[5px] py-[15px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/bookTable">Book Table</Link>
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
                    <Link href="/auth/Login" className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                        <FaUserAlt />
                    </Link>
                    <Link href="/cart" className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                        <span className='relative'>
                            <FaShoppingCart />
                            <span className="-top-[10px] -right-[10px] absolute bg-primary text-white px-[5px] py-[0.8px] text-xs font-extrabold rounded-full hover:bg-yellow-400">{cart.products.length === 0 ? "0" : cart.products.length}</span>
                        </span>
                    </Link>
                    <button href="/" onClick={() => setIsSearchModal(true)}
                        className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                        <FaSearch />
                    </button>
                    <Link href="/" className='md:flex hidden'>
                        <button className='btn-primary'>Order Online</button>
                    </Link>
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