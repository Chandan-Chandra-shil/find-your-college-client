import React from 'react';
import "./Banner.css"
const Banner = () => {
  return (
    <div className="bannerImage object-cover my-8">
      <div className='text-center'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Find Your College</h1>
        <p className='text-lg'>Will Guide Educational Needs and Knowledge Online.</p>
      </div>
    </div>
  );
};

export default Banner;