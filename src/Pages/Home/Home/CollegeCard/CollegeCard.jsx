import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(
      "https://find-your-college-server-chandan-chandra-shil.vercel.app/colleges"
    )
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <section className="md:mx-4 lg:mx-0 mx-4 my-container">
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {colleges.slice(0, 3).map((college) => (
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
              <h2 className="text-xl">
                Events: {college.events[0].name} ,{college.events[1].name}
              </h2>
              <h2 className="text-xl ">
                Sports: {college.sports[0].category} ,
                {college.sports[1].category}
              </h2>

              <div className="text-end mb-2 mr-2 ">
                <Link to={`/college-details/${college._id}`}>
                  <button className="mt-5 hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeCard;
