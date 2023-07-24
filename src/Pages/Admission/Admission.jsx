import  { useState } from "react";
import Modal from "../../Components/Modal";


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Here, you can handle the form submission and data as per your requirements.
    // For this example, we'll just log the form data.
    console.log(formData);
    setShowModal(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Top Colleges in Bangladesh</h1>
      <ul>
        <li onClick={() => setShowModal(true)} className="cursor-pointer">
          Dhaka College
        </li>
        {/* Add more college names here */}
      </ul>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold mb-4">Application Form</h2>
          <form>
            <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
              <div>
                <label className="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
              <div>
                <label className="">Date of Birth</label>
                <input
                  type="text"
                  name="date"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
              <div>
                <label className="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
              <div>
                <label className="">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
              <div>
                <label className="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
              <div>
                <label className="">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
              <div>
                <label className="">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Candidate Name"
                  className="w-full mb-4 p-2 border rounded"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-5 hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default App;
