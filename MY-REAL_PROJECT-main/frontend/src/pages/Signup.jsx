import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OAuthByGOOGLE from "../components/OAuthByGOOGLE";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [classSelection, setClassSelection] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    userCollage: "",
    phonenumber: "",
    classSelection: "",
  });

  function onChange(e) {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value.trim(),
    }));
  }

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      classSelection: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-blue-700 text-center mt-6 font-bold">
        Registration Form
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] gap-9 mb-12 md:md-6">
          <img
            className="rounded-full Sign-In-page-Logo"
            src="/logo.png"
            alt="key picture"
          />

          <span className="signin-page-write-container inline-block p-3 mt-2 circular-border-animation">
            <p className="Sign-In-Page-write">
              <b>+2HELPER</b> helps you with your questions in
              <u>
                {" "}
                Physics, Chemistry, Math, Biology, Account, Economics{" "}
              </u>{" "}
              subjects you need assistance with. Additionally, I can provide
              guidance and solutions for{" "}
              <Link to="/entrance" className="text-green-500">
                entrance exams
              </Link>{" "}
              such as <b>IOE, IOM, CSIT, AG, and more</b>.
            </p>
          </span>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 border-2 border-black p-3 rounded-lg shadow-2xl bg-white text-black font-bold">
          <form onSubmit={handleSubmit}>
            <label>Full Name*</label>
            <input
              type="text"
              id="username"
              onChange={onChange}
              placeholder="Enter your Name*"
              className="mb-3 w-full px-4 py-2 text-xl text-gray-700 border-zinc-600 border-2 rounded transition ease-in-out rounded-2xl"
            />
            <label>Email Account*</label>
            <input
              className="mb-6 border-zinc-600 border-2 w-full px-4 py-2 text-xl bg-white border-gray-300 rounded transition ease-in-out rounded-2xl"
              type="email"
              id="email"
              onChange={onChange}
              placeholder="Enter your email account*"
            />
            <div className="relative mb-6">
              <input
                className="mb-6 border-zinc-600 border-2 w-full px-4 py-2 text-xl bg-white rounded transition ease-in-out rounded-2xl"
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={onChange}
                placeholder="Enter Password*"
              />

              <div className="flex flex-wrap mt-3 rounded-3xl px-4 py-2 border-green-600 border-4 w-full">
                <div>
                  <label>College Name</label>
                  <input
                    id="userCollage"
                    onChange={onChange}
                    type="text"
                    className="m-1 px-2 py-2 text-xl border-zinc-600 border-2 rounded transition ease-in-out rounded-2xl"
                  />
                </div>
                <div>
                  <label>Contact Number</label>
                  <input
                    id="phonenumber"
                    onChange={onChange}
                    type="number"
                    className="m-1 px-2 py-2 text-xl text-gray-700 border-zinc-600 border-2 rounded transition ease-in-out rounded-2xl"
                  />
                </div>
                <div className="mt-3 flex justify-between">
                  <span className="mr-2">
                    <input
                      type="radio"
                      id="classXi"
                      checked={classSelection === "Class-Xi"}
                      onChange={handleRadioChange}
                      value="Class-Xi"
                      name="classSelection"
                    />
                    <label htmlFor="classXi" className="cursor-pointer">
                      Class-Xi
                    </label>
                  </span>
                  <span className="ml-4">
                    <input
                      type="radio"
                      id="classXii"
                      checked={classSelection === "Class-Xii"}
                      onChange={handleRadioChange}
                      value="Class-Xii"
                      name="classSelection"
                    />
                    <label htmlFor="classXii" className={`cursor-pointer `}>
                      Class-Xii
                    </label>
                  </span>

                  <span className="ml-4">
                    <input
                      type="radio"
                      id="dropper"
                      checked={classSelection === "Dropper"}
                      onChange={handleRadioChange}
                      value="Dropper"
                      name="classSelection"
                    />
                    <label htmlFor="dropper" className="cursor-pointer">
                      Dropper
                    </label>
                  </span>
                </div>
              </div>
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
                Don't have an account ?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue800"
            >
              Sign-Up
            </button>

            <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuthByGOOGLE />
          </form>
        </div>
      </div>
    </section>
  );
}
