import  {  useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const CollegeCard = () => {

  const [colleges, setColleges] = useState([]) 

  useEffect(() => {
    fetch('collegeData.json')
      .then(res => res.json())
    .then(data=>setColleges(data))
  },[])
  return (
    <section className="md:mx-4 lg:mx-0 mx-4">
      <SearchBar />
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {colleges.map((college) => (
          <div key={college._id} className="card   bg-green-50  ">
            <figure>
              <img src={college.collegeImage} alt="Shoes" />
            </figure>
            <div className="card-body p-2">
              <h2 className="md:text-2xl  font-semibold mb-2 text-xl">
                Name : {college.collegeName}
              </h2>
              <h2 className="font-semibold  text-xl">
                Admission Date : {college.admissionDates}
              </h2>
              <h2 className="text-xl">Events: {college.events}</h2>
              <h2 className="text-xl">Sports: {college.sports}</h2>

              <div className="text-end mb-2 mr-2 ">
                <button className="mt-5 hover:border-b-4 hover:border-green-900 rounded-md font-semibold hover:text-white  bg-green-400 px-8 py-1">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeCard;