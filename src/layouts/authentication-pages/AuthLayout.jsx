import React from "react";
import Navbar from "../../reuseble-components/Navbar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
