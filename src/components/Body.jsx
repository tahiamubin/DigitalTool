import React, { use } from 'react';
import Cart from './Cart';

const Body = ({toolPromise, clickCarts, setClickCarts}) => {
    const tools = use (toolPromise);
    //console.log(tools);
    return (
        <div className='container mx-auto '>
            

            {/* cart */}
           <div className='grid sm:grid-cols-3 grid-cols-1  my-20 '>
             {
                tools.map (tool  => <Cart  tool= {tool}  clickCarts= {clickCarts} 
       setClickCarts = {setClickCarts}></Cart>)
             }
           </div>

            
        </div>
    );
};

export default Body;