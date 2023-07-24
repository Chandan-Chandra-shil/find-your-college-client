import  { useEffect, useState } from 'react';

const MyCollege = () => {
   const [admissionData, setAdmissionData] = useState([]);
 
   useEffect(() => {
     
     fetch("http://localhost:5000/admission-data")
       .then((res) => res.json())
       .then((data) => {
         setAdmissionData(data);
       });
   }, []);
  return (
    <div className="h-[80vh] flex justify-center items-center ">
      {admissionData.map((item) => (
        <div key={item._id} className="card w-96 mx-4  glass">
          <figure>
            <img
              className="rounded-full mdd:w-full w-1/2 "
              src={item.photoUrl}
              alt="profile-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Subject : {item.subject}</h2>
            <h2 className="card-title">{item.name}</h2>
            <p className="card-title">phone : {item.number}</p>
            <p className="card-title"> {item.email}</p>
            <p className="card-title">Address : {item.address}</p>
            <p className="card-title">Date of Birth : {item.dob}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCollege;