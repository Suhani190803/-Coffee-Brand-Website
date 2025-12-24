import { useState } from "react";
import Swal from "sweetalert2";

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill all the fields ☕"
      });
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Number",
        text: "Phone number must be exactly 10 digits 📱"
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent ☕",
      text: "We’ll get back to you very soon!",
      confirmButtonColor: "#d97706"
    });

    setForm({ name: "", phone: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      <div className="bg-[#1a1a1a] text-white w-full max-w-md rounded-xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">
          Contact <span className="text-amber-400">Us</span>
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Let’s talk over a cup of coffee ☕
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 border border-gray-600 focus:outline-none focus:border-amber-400"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 border border-gray-600 focus:outline-none focus:border-amber-400"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 border border-gray-600 focus:outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-full font-semibold"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
export default ContactModal;
