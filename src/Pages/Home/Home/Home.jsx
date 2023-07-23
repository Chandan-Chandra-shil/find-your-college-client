import React from 'react';

import CollegeCard from './CollegeCard/CollegeCard';
import CollegeGallery from './CollegeGallery/CollegeGallery';

import SearchBar from './SearchBar/SearchBar';

const Home = () => {
  return (
    <div>
      <SearchBar/>
     
      <CollegeCard />
      <CollegeGallery/>
    </div>
  );
};

export default Home;