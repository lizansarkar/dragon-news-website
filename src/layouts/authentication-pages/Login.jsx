import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="font-semibold text-3xl text-center my-10">Login your account</h1>
          <hr className="text-accent mx-6" />
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover hover:text-blue-500">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center py-2">Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary link link-hover hover:text-blue-500">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
