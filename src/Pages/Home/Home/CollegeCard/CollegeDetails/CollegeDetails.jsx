
import { useLoaderData } from 'react-router-dom';


const CollegeDetails = () => {
  const data = useLoaderData()
  const {
    collegeImage,
    collegeName,
    admissionProcess,
    researchHistory,
  
   
  } = data || "";

  console.log("from 16.." ,data)
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="rounded-md" src={collegeImage} alt="" />
      </div>
      <h2 className="text-center md:text-4xl text-2xl my-2 ">{collegeName}</h2>
      <div>
        <div className=" text-xl w-1/2 text-justify">
          <p>Admission Process : {admissionProcess}</p>
          <br />
          <p>Research History : {researchHistory}</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;