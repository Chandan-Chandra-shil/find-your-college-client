
import { useLoaderData } from 'react-router-dom';


const CollegeDetails = () => {
  const data = useLoaderData()
  const {
    collegeImage,
    collegeName,
    admissionProcess,
    events,
    researchHistory,
    sportsCategories,
  } = data || ""

  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="rounded-md" src={collegeImage} alt="" />
      </div>
      <h2 className="text-center text-4xl "> College Name : {collegeName}</h2>
      <div>
        <h4 className="text-center text-xl">
          Admission Process : {admissionProcess}
        </h4>
        <h4 className="text-center text-xl">
          Admission Process : {sportsCategories}
        </h4>
        <h4 className="text-center text-xl">Admission Process :</h4>
        <h4 className="text-center text-xl">
          Admission Process : {researchHistory}
        </h4>
      </div>
    </div>
  );
};

export default CollegeDetails;