import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          ☕ <span>Roastory</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-amber-400">Products</Link></li>
          <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
          <li
            onClick={onContactClick}
            className="cursor-pointer hover:text-amber-400"
          >
            Contact Us
          </li>
        </ul>

        {/* ☰ HAMBURGER ICON (MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVBAR (OPEN ON ICON CLICK) */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-6 space-y-5">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-amber-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-amber-400"
          >
            Products
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-amber-400"
          >
            About
          </Link>

          <span
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="block text-lg cursor-pointer hover:text-amber-400"
          >
            Contact Us
          </span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
