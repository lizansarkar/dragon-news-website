import React, { use } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

export default function Login() {
  const { signIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        toast.success(`Welcome back, ${user.email}! 🎉`, {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        // form.reset();
      })
      .catch((error) => {
        toast.error(`Login failed: ${error.message}`, {
          position: "top-center",
          autoClose: 2500,
          theme: "colored",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-3xl text-center my-10">
          Login your account
        </h1>
        <hr className="text-accent mx-6" />
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email Input */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password Input */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover hover:text-blue-500">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center py-2">
              Dont’t Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-secondary link link-hover hover:text-blue-500"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
