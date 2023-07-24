

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  p-10 bg-green-700 text-white  ">
      <div className="container  mx-auto grid sm:grid-cols-1 md:grid-cols-3">
      
        <div className="mb-4 text-justify">
          <h2 className="text-2xl font-bold ">Find Your College</h2>
          <li className="list-none">
            <Link to="/">About</Link>
          </li>
          <li className="list-none">
            <Link to="/">Our Team</Link>
          </li>
          <li className="list-none">
            <Link to="/">Terms Conditions</Link>
          </li>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Quick Link</h2>

          <li className="list-none">
            <Link to="/">Home</Link>
          </li>

          <li className="list-none">
            <Link to="/colleges">Colleges</Link>
          </li>
          <li className="list-none">
            <Link to="/admission">Admission</Link>
          </li>
          
        </div>

        <div>
          <span className="text-2xl font-bold">Newsletter</span>
          <div className="form-control md:w-80 w-72">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered md:w-full md:pr-16"
              />
              <button className="btn  bg-red-500 text-white hover:bg-red-600 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
