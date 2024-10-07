import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 py-4 container mx-auto flex justify-center p-5">
      <div className="flex justify-between items-center w-full">
        <div className="space-x-4">
          <a href="#" className="text-lg font-bold text-white">
            Logo
          </a>
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </div>
        <h1 className="text-lg font-bold  text-slate-600">Add your favorite cocktail to our site</h1>
      </div>
    </nav>
  );
};

export default Nav;
