// Navbar.js
import  { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = (
    <>
      <Link
        to="/"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Home
      </Link>
      <Link
        to="/colleges"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Colleges
      </Link>
      <Link
        to="/admission"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Admission
      </Link>
      <Link
        to="/my-college"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        My College
      </Link>
      <Link
        to="/login"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Login
      </Link>
    </>
  );

  return (
    <nav className=" bg-green-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          Find Your College
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className=" font-bold text-xl" onClick={toggleMenu}>
            {isMenuOpen ? (
              <>
                <FiX className="h-6 w-6" />
              </>
            ) : (
              <>
                <FiMenu className="h-6 w-6" />
              </>
            )}
          </button>
        </div>

        {/* Desktop/Tablet Menu */}
        <div className="hidden md:flex space-x-4">
        
          {navItems}
          {/* Add more navigation items as needed */}
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16   bg-green-500 p-2 w-8/12">
            {navItems}
            {/* Add more navigation items as needed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

