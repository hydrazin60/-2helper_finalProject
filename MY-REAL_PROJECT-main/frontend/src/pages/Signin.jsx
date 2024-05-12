import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuthByGOOGLE from "../components/OAuthByGOOGLE";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-5xl text-blue-600 text-center mt-6 font-bold">
        Sign In Page
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto  ">
        <div className="md:w-[67%] lg:w-[50%]   gap-9 mb-12 md:mb-6">
          <img
            className=" rounded-full Sign-In-page-Logo"
            src="/logo.png"
            alt="key picture"
          />

          <span className="signin-page-write-container inline-block p-3   mt-2 circular-border-animation">
            <p className="Sign-In-Page-write">
              <b>+2HELPER</b> helps you with your questions in
              <b> Physics, Chemistry, Math, Biology, Account </b> and any other
              subjects you need assistance with. Additionally, I can provide
              guidance and solutions for
              <Link to="/entrance" className="text-green-500">
                entrance exams
              </Link>
              such as
              <b> IOE, IOM, CSIT, AG, and more</b>.
            </p>
          </span>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className=" mb-6  rounded-2xl border-2 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your gmail account !"
            />
            <div className="relative mb-6">
              <input
                className="w-full rounded-2xl border-2 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter Password !"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6 ">
                Don't have a account ?
                <Link
                  to="/sign-up"
                  className="text-red-500 hover:text-red-800  transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forget-password"
                  className="text-blue-500 hover:text-blue-800  transition duration-200 ease-in-out ml-1"
                >
                  Forget-password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue800"
              
            >
              Sign in
            </button>
            <div className="my-4 flex items-center before:border-t   before:flex-1   before:border-gray-400    after:border-t    after:flex-1    after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuthByGOOGLE />
          </form>
        </div>
      </div>
    </section>
  );
}
