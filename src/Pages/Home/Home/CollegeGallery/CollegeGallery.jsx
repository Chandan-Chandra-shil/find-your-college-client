import React from 'react';
import image1 from "../../../../assets/gallery1.jpg"
import image2 from "../../../../assets/gallery2.jpg"
import image3 from "../../../../assets/gallery3.jpg"


const CollegeGallery = () => {
  return (
    <section className="my-12 md:mx-4 lg:mx-0 mx-4">
      <h2 className="text-4xl text-center mb-12">College Gallery</h2>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image3} alt="" />
        <img src={image3} alt="" />
        <img src={image3} alt="" />
        <img src={image3} alt="" />
        <img src={image3} alt="" />
       
        
       
       
      </div>
    </section>
  );
};

export default CollegeGallery;