import React, { useState } from 'react';
import Features from './Features';

const Cart = ({tool,clickCarts, setClickCarts}) => {
  const [Buy, setBuy] = useState(false)
     const handleBuyButton = () => {
          setClickCarts([...clickCarts , tool]); 
          setBuy(true)
          
     } 
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{tool.tag}</span>
    <p >
        {tool.icon}
    </p>
    <div className="justify-between space-y-2 ">
      <h2 className="text-3xl font-bold">{tool.name}</h2>
      <p className='text-[#627382]'>{tool.description}</p>
      <span className="text-xl">${tool.price}/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
     {
        tool.features.map (features => <Features features = {features}></Features>)
     } 
    </ul>
    <div className="mt-6">
      <button onClick={handleBuyButton}
       className="btn w-full rounded-3xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
        {Buy === false ? "Buy Now" : "Added to Cart"}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;