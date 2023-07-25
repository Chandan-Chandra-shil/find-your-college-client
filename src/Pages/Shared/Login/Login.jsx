import Lottie from "lottie-react";
import loginImage from "../../../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { logIn, resetPassword, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
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

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Please provide your email address to reset password",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email !",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
const handleGoogleLogin = () => {
  loginWithGoogle()
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
};


  return (
    <div className="md:my-36 mt-0 ">
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
                ref={emailRef}
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
                <button
                  onClick={handleResetPassword}
                  className=" btn-link text-green-600 link"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="bg-green-600 hover:bg-green-700   text-white border-b-4 border-red-500 rounded-md font-semibold sha border px-8 py-2"
                value="Login"
              />
            </div>
            <div className="divider"></div>
            <div className="form-control mt-6">
              <button
                onClick={handleGoogleLogin}
                className=" hover:bg-green-700 hover:text-white border-b-4 border-red-500 rounded-md font-semibold sha border px-8 py-2"
              >
                Login With Google
              </button>
            </div>
            <div className="text-center">
              <p>
                Don't have an account?
                <Link className="text-green-500 ms-1" to="/singUp">
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
