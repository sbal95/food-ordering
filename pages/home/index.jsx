import React from 'react'
import Carousel from '../../components/Carousel';
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper';
import About from '../../components/ui/About';
import Reservation from '../../components/ui/Reservation';
import Customers from '../../components/Customers';


export const Index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers/>
    </div>
  )
};

export default Index;
