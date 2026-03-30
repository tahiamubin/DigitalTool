import React from 'react';

const Cart = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 my-40 '>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <img src="" alt="" />
    <div className="justify-between space-y-2 ">
      <h2 className="text-3xl font-bold">AI Writing Pro</h2>
      <p className='text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn w-full rounded-3xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;