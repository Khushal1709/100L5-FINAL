import React from "react";
import logo from "../image/logo.svg";
import pro from "../image/pro.svg";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-green-100">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={logo}
            alt="Krishna Collection Logo"
            className="h-16"
          />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <a href="#" className="text-sm text-green-600 float-right mt-1">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-900 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
            Log in
          </button>

          {/* OR Separator */}
          <div className="text-center my-4 text-gray-500">OR</div>

          {/* Social Logins */}
          <div className="flex gap-4">
            <button className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              Google
            </button>
            <button className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-4 text-gray-600">
            Can't log in? <a href="#" className="text-green-600">Sign up an account</a>
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-6">
        <img
          src={pro}
          alt="Krishna Outfit"
          className="rounded-lg shadow-md w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Login;
