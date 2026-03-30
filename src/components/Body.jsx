import React from 'react';
import Cart from './Cart';

const Body = () => {
    return (
        <div className='container mx-auto '>
            <div className='m-20 space-y-4'>
                <h1 className='text-5xl font-bold text-center'>Premium Digital Tools</h1>
                <p className='text-center text-[#627382]' >Choose from our curated collection of premium digital <br /> products designedto boost your
                     productivity and creativity.</p>
            </div>

            {/* cart */}
            <Cart></Cart>
        </div>
    );
};

export default Body;