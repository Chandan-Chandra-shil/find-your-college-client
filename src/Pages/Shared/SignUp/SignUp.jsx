import Lottie from "lottie-react";
import loginImage from "../../../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

import Swal from "sweetalert2";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {createUser} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const university = form.university.value;
    const address = form.address.value;
    const userInfo = {
      name,
      email,
      password,
      university,
      address,
    };

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
         navigate(from, { replace: true });

        console.log(newUser);
      })
      .catch((error) => {
        console.log(error.message);
      });

      console.log(userInfo);
  }
  return (
    <div className="md:mt-12 mt-0">
      <div className=" md:flex items-center ">
        <div className=" md:w-1/2">
          <Lottie className="" animationData={loginImage} loop={true} />
        </div>
        <form onSubmit={handleSignUp} className="md:w-1/2 ">
          <div className="card-body border">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                  name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University</span>
              </label>
              <input
                type="text"
                name="university"
                placeholder="university"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                
                 show error
              
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="mt-5 hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1"
                value="Sing Up"
              />
            </div>
            <div className="text-center">
              <p className="mr-2">
                Your Have Already Account?
                <Link className="text-green-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
