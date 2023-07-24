import { useRef } from "react";

const colleges = [
  {
    id: 1,
    collegeName: "Viqarunnisa Noon School and College",
  },
  {
    id: 2,
    collegeName: "Dhaka Residential Model College",
  },
  {
    id: 3,
    collegeName: "Rajuk Uttara Model College",
  },
  {
    id: 4,
    collegeName: "Holy Cross College",
  },

  {
    id: 5,
    collegeName: "Ananda Mohan College",
  },

  {
    id: 6,
    collegeName: "Notre Dame College",
  },
  {
    id: 7,
    collegeName: "Dhaka College",
  },
];

const Admission = () => {
  const modalRef = useRef(null);
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleAdmission = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const subject = event.target.subject.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const address = event.target.address.value;
    const dob = event.target.dob.value;
    const photoUrl = event.target.photoUrl.value;

    const admissionInfo = {
      name,
      subject,
      email,
      number,
      address,
      dob,
      photoUrl,
    };
    console.log("hello", admissionInfo);

    fetch("http://localhost:5000/admission-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(admissionInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Admission Successfully");
        }
      });
  };

  return (
    <div className="container mx-auto h-[80vh] mt-12 ">
      <div className="container mx-auto flex justify-center my-5 ">
        <div className=" text-sm font-medium  order rounded-lg    ">
          <div className="text-center ">
            <h2 className="text-4xl text-center font-bold mb-4  ">
              Find Your Dream College
            </h2>
            {colleges.map((college) => (
              <p
                className="md:mb-4 link mb-2 text-xl font-semibold"
                key={colleges.id}
                onClick={() => window.my_modal_3.showModal()}
              >
                {college.collegeName}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm  btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="container mx-auto  rounded-lg my-10">
            <form onSubmit={handleAdmission}>
              <div className=" p-3 my-3 rounded ">
                <h1 className="text-2xl font-bold text-black text-center">
                 ----- Admission Form -----
                </h1>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium  "
                  >
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="Candidate Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Candidate Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="Candidate Email"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="address"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="dob"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="date of birth"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="photoUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Picture Url
                  </label>
                  <input
                    type="text"
                    id="photoUrl"
                    name="photoUrl"
                    className="shadow-sm border   text-sm rounded-lg   block w-full p-2.5 dark:shadow-sm-light"
                    placeholder="Toy Photo Url"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={closeModal}
                  type="submit"
                  className="mt-5 hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Admission;
