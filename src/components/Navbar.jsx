import { Link } from "react-router-dom";

function Navbar({ onContactClick }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          ☕ <span>Roastory</span><span className="text-amber-400"> </span>
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-amber-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-amber-400">
              Products
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-amber-400">
              About
            </Link>
          </li>

          <li
            onClick={onContactClick}
            className="cursor-pointer hover:text-amber-400"
          >
            Contact Us
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
