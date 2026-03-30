import React from 'react';

const ClickCarts = ({clickCarts}) => {
    return (
        <div className='container mx-auto m-20'>
            <div>
                {
                clickCarts.map(item =>  
                    <div key = {item.id}>
                        <div className='justify-between flex p-4 bg-gray-50 mb-5'>
                        <div className='flex'>
                           
                            <div>
                                <h1 className='text-xl font-bold py-5'>{item.name}</h1>
                           <h1 className='font-bold'>${item.price}</h1>
                            </div>
                        </div>
                        <div className='flex'>
                            
                            <div className='flex gap-2'>
                                
                                <img src="" alt="" />
                                <div>
                                    <button className="btn btn-soft btn-error">Remove</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                     </div>
                )
               }
            </div>
            <div className='text-2xl font-bold flex justify-between'>
                 <h1>Total</h1>
                 <p>$00</p>
            </div>
        </div>
    );
};

export default ClickCarts;