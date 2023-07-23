import Lottie from "lottie-react";
import loginImage from "../../../../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { logIn } = useContext(AuthContext);
 const location = useLocation();
 const navigate = useNavigate();
 const from = location.state?.from?.pathname || "/";
// handle login 
  
  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:mt-36 mt-0">
      <div className=" md:flex ">
        <div className=" md:w-1/2">
          <Lottie className="" animationData={loginImage} loop={true} />
        </div>
        <form onSubmit={handleLogIn} className="md:w-1/2 ">
          <div className="card-body border">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
