import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-3xl text-center my-10">
          Register Your Account
        </h1>
        <hr className="text-accent mx-6" />
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name Input */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* Photo Url Input */}
            <label className="label">Phot Url</label>
            <input type="text" className="input" placeholder="Enter Your Photo Url" />
            {/* Email Input */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* Password Input */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="flex items-center gap-1">
              <input type="checkbox" name="" id="" />
              <a className="link link-hover hover:text-blue-500">
                accept terms and condition.
              </a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center py-2">
              You Have An Account ?{" "}
              <Link
                to="/auth/login"
                className="text-secondary link link-hover hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
