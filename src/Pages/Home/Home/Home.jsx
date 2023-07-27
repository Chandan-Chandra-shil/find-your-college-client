

import CollegeCards from './CollegeCard/CollegeCards';
import CollegeGallery from './CollegeGallery/CollegeGallery';
import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar';


const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [colleges, setColleges] = useState([]);
  
 

useEffect(() => {
  fetch(`http://localhost:5000/colleges-name?search=${searchText}`)
    .then((res) => res.json())
    .then((data) =>setColleges(data));
}, [searchText ]);

const handleSearch = (e) => {
  const search = e.target.value;
  setSearchText(search);
  };
  
   useEffect(() => {
     fetch(
       "https://find-your-college-server-chandan-chandra-shil.vercel.app/colleges"
     )
       .then((res) => res.json())
       .then((data) => setColleges(data));
   }, []);

  return (
    <div>
      <SearchBar handleSearch={ handleSearch} />
      <CollegeCards colleges={colleges}  />
      <CollegeGallery/>
    </div>
  );
};

export default Home;