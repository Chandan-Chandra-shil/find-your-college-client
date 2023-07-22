import React from 'react';
import Lottie from "lottie-react";
import errorImage from "../../assets/error.json"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <section>
      <div className="text-center pt-12">
        <button className=" text-2xl font-semibold border-b-4  border-b-green-700">
          <Link to="/">Back Home</Link>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Lottie className="w-[100vh]" animationData={errorImage} loop={true} />
      </div>
    </section>
  );
};

export default ErrorPage;