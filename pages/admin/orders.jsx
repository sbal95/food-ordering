import React from 'react'

const Orders = () => {
    return (

        <div className="flex flex-col w-full p-10 gap-y-6 overflow-x-auto">
            <div className="text-4xl font-dancing px-5 py-3">
                <span>Orders</span>
            </div>
            <div className='flex w-full max-h-96 min-w-[1000px]   rounded-lg'>
                <table class="w-full ">
                    <thead className='bg-gray-700 '>
                        <tr className='text-gray-300'>
                            <th class="text-start pl-7 p-2">PRODUCT</th>
                            <th class="text-start pl-7 p-2">CUSTOMERS</th>
                            <th class="text-start pl-7 p-2">TOTAL</th>
                            <th class="text-start pl-7 p-2">PAYMANT</th>
                            <th class="text-start pl-7 p-2">STATUS</th>
                            <th class="text-start pl-7 p-2">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='bg-secondary text-gray-400 hover:bg-primary'>
                        <tr >
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7">63107</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7">John Doe</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7">35$</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7">Cash</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7">Preparing</td>
                            <td class="p-3 border-b-[1px] border-gray-700 pl-7"><button class="btn-primary !bg-green-600 ">Next Stage</button></td>
                        </tr>
                        


                    </tbody>
                </table>
            </div>
        </div>



    )
}

export default Orders