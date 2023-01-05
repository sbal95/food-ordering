import Image from "next/image"
import { HiHome, HiKey, HiExit } from 'react-icons/hi'
import { GrBike } from 'react-icons/gr'
import { BiExit } from 'react-icons/bi'
import { useState } from "react";
import Account from "./account";
import Password from "./password";
import Orders from "./orders";



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
                        <HiHome />
                        <button>Account</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(1)}>
                        <HiKey />
                        <button>Password</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(2)}>
                        <GrBike />
                        <button>Orders</button>
                    </li>
                    <li className="p-2 border w-full text-base flex gap-x-2 items-center hover:bg-primary transition-all"
                        onClick={() => setTabs(3)}>
                        <BiExit />
                        <button>Exit</button>
                    </li>
                </ul>
            </div>
            {tabs === 0 && (<Account/>)}
            {tabs === 1 && (<Password/>)}
            {tabs === 2 && (<Orders/>)}
        </div>
    )
}

export default Profile