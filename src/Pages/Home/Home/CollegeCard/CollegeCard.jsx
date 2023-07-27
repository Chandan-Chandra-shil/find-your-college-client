
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {
    const { collegeImage, _id, collegeName, admissionDates, events, sports } =
      college || {};

  return (
    <div className="card   bg-green-50  ">
      <figure>
        <img src={collegeImage} alt="Shoes" />
      </figure>
      <div className="card-body p-2">
        <h4 className="md:text-2xl  font-semibold mb-2 text-xl">
          Name : {collegeName}
        </h4>
        {/* <h2 className="font-semibold  text-xl">
          Admission Date : {admissionDates}
        </h2> */}
        <h2 className="text-xl">
          Events:
          {events?.map((event, i) => (
            <span key={i}>{event?.name}</span>
          ))}
        </h2>
        <h2 className="text-xl ">
          Sports:
          {sports?.map((sport, i) => (
            <span key={i}>{sport?.category}</span>
          ))}
        </h2>

        <div className="text-end mb-2 mr-2 ">
          <Link to={`/college-details/${_id}`}>
            <button className="mt-5 hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;