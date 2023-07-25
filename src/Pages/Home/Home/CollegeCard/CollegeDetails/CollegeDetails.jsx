
import { useLoaderData } from 'react-router-dom';


const CollegeDetails = () => {
  const data = useLoaderData([])
  const {
    collegeImage,
    collegeName,
    admissionProcess,
    researchHistory,
    events,
    sports
  } = data || "";

  console.log("from 16.." ,data)
  return (
    <div className='mb-4'>
      <div className="flex justify-center items-center">
        <img className="rounded-md mt-4 md:mt-8" src={collegeImage} alt="" />
      </div>
      <h2 className="text-center font-semibold md:font-extrabold md:text-4xl text-2xl my-6 ">{collegeName}</h2>
      <div className="md:flex gap-4 justify-center mx-4 md:mx-0 ">
        <div className=" md:w-1/2 text-xl  ">
          <div>
            <div className="mb-4 space-y-2  border p-5 ">
              <h2 className="text-3xl uppercase  font-semibold">Sports</h2>
              <p className="text-xl font-semibold">
                Sport Name: {sports[0].category}
              </p>
              <p className="font-semibold">Date: {sports[0].teamName}</p>
              <p className="font-semibold">
                <span className="font-semibold">Captain :</span>
                {sports[0].captain}
              </p>
              <p className="text-justify">
                <span className="font-semibold">Event Name:</span>{" "}
                {sports[0].achievements}
              </p>
            </div>
            <div className="mb-4 space-y-2  border p-5 ">
              <h2 className="text-3xl uppercase  font-semibold">Sports</h2>
              <p className="text-xl font-semibold">
                Sport Name: {sports[1].category}
              </p>
              <p className="font-semibold">Date: {sports[1].teamName}</p>
              <p className="font-semibold">
                <span className="font-semibold">Captain :</span>
                {sports[1].captain}
              </p>
              <p className="text-justify">
                <span className="font-semibold">Event Name:</span>{" "}
                {sports[1].achievements}
              </p>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 text-xl ">
          <div className="mb-4 space-y-2  border p-5">
            <h2 className="text-3xl font-semibold uppercase">Events</h2>
            <p className="font-semibold">{events[0].name}</p>
            <p className="font-semibold">Date: {events[0].date}</p>
            <p className="font-semibold">Event Name: {events[0].theme}</p>
            <p className="text-justify">Event Name: {events[0].description}</p>
          </div>
          <div className="mb-4 space-y-2  border p-5">
            <h2 className="text-3xl font-semibold uppercase">Events</h2>
            <p className="font-semibold">{events[0].name}</p>
            <p className="font-semibold">Date: {events[0].date}</p>
            <p className="font-semibold">Event Name: {events[0].theme}</p>
            <p className="text-justify">Event Name: {events[0].description}</p>
          </div>
          
        </div>
      </div>
      <div className="md:flex mx-4 md:mx-0 gap-4">
        <div className='mb-4 md:w-1/2 border p-4 text-xl'>
          <p className="text-justify">
            <span className=" font-semibold text-xl">Admission Process : </span> 
            {admissionProcess}
          </p>
        </div>
        <div className='border md:w-1/2 p-4 text-xl'>
          <p className="text-justify">
            <span className="font-semibold text-xl">Research History : </span> 
            {researchHistory}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;