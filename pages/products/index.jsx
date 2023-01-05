import React from 'react'
import { useState } from 'react';
import { addProduct } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'



const itemsExtra = [
  {
    id: 1,
    name: "Ketçap",
    price: 1
  },
  {
    id: 2,
    name: "Mayonez",
    price: 2
  },
  {
    id: 3,
    name: "Acı Sos",
    price: 3
  }
]

const foodItems = [
  {
    id: 1,
    name: "Pizza 1",
    price: 10,
    desc: "lorem Ips dolor sit amet, consectetur adipiscing elit Assistant fully acc ex labore et dolore magna",
    extraOptions: [
      {
        id: 1,
        name: "Extra 1",
        price: 1
      }
    ]
  }
]

function Index() {

  const [prices, setPrices] = useState([10, 20, 30]);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(prices[size]);
  const [extraItems, setextraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);



  const changePrice = (number) => {
    setPrice(price + number);
  }
  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference)
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item])
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));

    }
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };


  console.log(cart);
  return (
    <div className='p-10 w-full h-full flex  mb-[80px] overflow-x-auto '>
      <div className=' relative grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5 lg:mt-3 mx-auto h-screen items-center min-h-[calc(100vh_-_412px)]'>
        <div className=' flex mx-auto items-center'>
          <div className='w-[600] h-[600]'>
            <Image
              src='/images/pizza.jpg'
              alt=''
              width={600}
              height={600}
              className='mx-auto items-center object-contain'
            />
          </div>
        </div>
        <div className=' lg:pl-3 pl-10'>
          <div className='grid'>
            <div className=' font-dancing font-bold text-5xl mt-4'>
              Good Pizza
            </div>
            <div className='text-primary text-2xl underline decoration-solid decoration-primary mt-4'>
              {price}$
            </div>
            <div className='sm:w-2/3 text-center sm:text-left mt-4' >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              consectetur provident eius possimus distinctio corporis
              sit vitae quis molestiae praesentium. Architecto sequi
              exercitationem, doloribus accusamus possimus qui voluptate dolorum consectetur!
            </div>
            <div className='grid mt-4'>
              <div className='font-semibold text-2xl grid-cols-1 '>Choose The Size</div>
              <div className='grid sm:grid-flow-col sm:auto-cols-max sm:gap-x-10 mt-2 items-center'>
                <div className='relative'>
                  <input type="image" src="/images/pizza-icon-18.png" alt="" width={44} height={44} className='object-cover rounded-full mt-1' onClick={() => handleSize(0)} />
                  <div className='absolute -top-1 -right-2'><p className=' bg-primary text-xs px-1 rounded-2xl'>Small</p></div>
                </div>
                <div className='relative'>
                  <input type="image" src="/images/pizza-icon-18.png" alt="" width={55} height={55} className='object-cover rounded-full mt-1'
                    onClick={() => handleSize(1)} />
                  <div className='absolute -top-1 -right-2'><p className=' bg-primary text-xs px-1 rounded-2xl'>Medium</p></div>
                </div>
                <div className='relative'>
                  <input type="image" src="/images/pizza-icon-18.png" alt="" width={66} height={66} className='object-cover rounded-full mt-1'
                    onClick={() => handleSize(2)} />
                  <div className='absolute -top-1 -right-2'><p className=' bg-primary text-xs px-1 rounded-2xl'>Large</p></div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 mt-3 '>
              <div className='font-medium' >Choose additional ingredients</div>
              <div className='grid sm:grid-flow-col sm:auto-cols-max sm:gap-x-5 mt-2 gap-y-1'>
                {extraItems.map((item) => (
                  <div className='gap-x-2 flex' key={item.id}><input type="checkbox" onChange={(e) => handleChange(e, item)}
                  /><p>{item.name}  </p> </div>
                ))}
              </div>
            </div>
            <div>
              <button className='bg-primary p-3 rounded-3xl mt-5' onClick={handleClick}>Add To Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index