import React, { use } from 'react'
import { Link, NavLink } from 'react-router-dom'
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'
import { toast } from 'react-toastify';

export default function Navbar() {
  const {user, userOut} = use(AuthContext);

  const handleLogOut = () => {
    console.log("log out button clicked");

    userOut()
      .then(() => {
        toast.success("✅ Successfully logged out!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
        toast.error(`⚠️ ${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  return (
    <nav className='flex justify-between items-center'>
        <div className='text-secondary'>
          {
            user && user.email
          }
        </div>
        <div className='nav text-accent flex gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className='login-btn flex gap-3'>
            <img src={userImg} alt="" />
            {
              user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button> : <Link to="/auth/login" className='btn btn-primary'>Login</Link>
            }
            
        </div>
    </nav>
  )
}
