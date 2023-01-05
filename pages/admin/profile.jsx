import Image from "next/image"
import { GrBike } from 'react-icons/gr'
import { BiExit, BiCategoryAlt } from 'react-icons/bi'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { useState } from "react";
import Orders from "./orders";
import Products from "./products";
import Categories from "./categories";
import Footer from "./footer";




const Profile = () => {
    const [tabs, setTabs] = useState(0)

    return (
        <div className="flex mx-5 mb-40 flex-col lg:flex-row">
            <div className="">
                <div className="relative flex flex-col items-center border">
                    <Image src='/images/client2.jpg' alt='' width={150} height={150}
                        className='rounded-full mt-6 mx-28  '
                    />
                    <b className="text-2xl my-1">John Doe</b>
                </div>
                <ul className="">
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(0)}>
                        <GiForkKnifeSpoon />
                        <button>Products</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(1)}>
                        <GrBike />
                        <button>Orders</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(2)}>
                        <GrBike />
                        <button>Categories</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(3)}>
                        <BiCategoryAlt />
                        <button>Footer</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        >
                        <BiExit />
                        <button>Exit</button>
                    </li>
                </ul>
            </div>
            {tabs === 0 && (<Products />)}
            {tabs === 1 && (<Orders />)}
            {tabs === 2 && (<Categories />)}
            {tabs === 3 && (<Footer />)}

        </div>
    )
}

export default Profile