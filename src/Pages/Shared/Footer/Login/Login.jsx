import Lottie from "lottie-react";
import loginImage from "../../../../assets/login.json";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="md:mt-36 mt-0">
      <div className=" md:flex ">
        <div className=" md:w-1/2">
          <Lottie className="" animationData={loginImage} loop={true} />
        </div>
        <form className="md:w-1/2 ">
          <div className="card-body border">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            <div className="text-center">
              <p>
                Find Your College New?
                <Link className="text-green-500" to="/singUp">
                 
                  Sing Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
