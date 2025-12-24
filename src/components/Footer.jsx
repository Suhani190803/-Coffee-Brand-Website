function Footer() {
  return (
    <footer
      className="text-gray-300 pt-14 pb-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Dark overlay */}
      <div className="bg-black/80">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              ☕ <span>Roastory</span>
            </h2>
            <p className="mt-4 text-sm text-gray-300">
              Serving premium handcrafted coffee made from the finest beans.
              Brewed with passion, served with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-amber-400 cursor-pointer">Home</li>
              <li className="hover:text-amber-400 cursor-pointer">Products</li>
              <li className="hover:text-amber-400 cursor-pointer">About Us</li>
              <li className="hover:text-amber-400 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Bangalore, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@roastory.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 text-xl">
              <span className="cursor-pointer hover:text-amber-400">📸</span>
              <span className="cursor-pointer hover:text-amber-400">🐦</span>
              <span className="cursor-pointer hover:text-amber-400">🌐</span>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-600 text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Roastory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
