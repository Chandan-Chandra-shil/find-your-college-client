import Lottie from "lottie-react";
import loginImage from "../../../../assets/login.json";
const Login = () => {
  return (
    <div className="">
      <div>
        <div className=" grid md:grid-cols-2 gap-4">
          <div className=" ">
            <Lottie className="" animationData={loginImage} loop={true} />
          </div>
          <div className=" ">
            <form className="bg-white border rounded-lg p-6 ">
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="********"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md mt-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
