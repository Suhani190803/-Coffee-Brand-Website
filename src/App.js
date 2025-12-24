import { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import ContactModal from "./components/ContactModal";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar onContactClick={() => setShowContact(true)} />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Contact Modal */}
      {showContact && (
        <ContactModal onClose={() => setShowContact(false)} />
      )}

      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
