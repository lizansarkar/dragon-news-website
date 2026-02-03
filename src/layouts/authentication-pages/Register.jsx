import React, { use, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

export default function () {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameErr, setNameErr] = useState("");

  const navigateHome = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    if (name.lengtn < 4) {
      setNameErr("name shoud be 4 charector");
      return;
    } else {
      setNameErr("");
    }

    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photoUrl, email, password });

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);

        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photoUrl});
            navigateHome("/")
          })
          .catch((error) => {
            toast.error(error)
            setUser(user)
            navigateHome("/")
          });

        toast.success("✅ Successfully logged register!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(`⚠️ ${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-3xl text-center my-10">
          Register Your Account
        </h1>
        <hr className="text-accent mx-6" />
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name Input */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {nameErr && <span className="text-xs text-red-950">{nameErr}</span>}
            {/* Photo Url Input */}
            <label className="label">Phot Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Your Photo Url"
              required
            />
            {/* Email Input */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* Password Input */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div className="flex items-center gap-1">
              <input type="checkbox" name="checkbox" id="" />
              <a className="link link-hover hover:text-blue-500">
                accept terms and condition.
              </a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
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
        </form>
      </div>
    </div>
  );
}
