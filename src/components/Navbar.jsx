import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-50">
      
      {/* Logo */}
      <h1 className="text-lg md:text-xl font-bold text-green-600">
        🌍 East Africa Tours
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/tours" className="hover:text-green-600">Tours</Link>
        <Link to="/bookings" className="hover:text-green-600">My Bookings</Link>

        <Link
          to="/login"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Login
        </Link>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/tours" onClick={() => setOpen(false)}>Tours</Link>
          <Link to="/bookings" onClick={() => setOpen(false)}>My Bookings</Link>

          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;