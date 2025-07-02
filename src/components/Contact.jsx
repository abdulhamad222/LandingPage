"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", form);
    alert("Message sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-[#fcf9cc] min-h-screen" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#873e23] mb-12">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label className="block text-[#873e23] font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            />
          </div>

          <div>
            <label className="block text-[#873e23] font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            />
          </div>

          <div>
            <label className="block text-[#873e23] font-semibold mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            />
          </div>

          <div>
            <label className="block text-[#873e23] font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#873e23] text-white py-2 px-6 rounded hover:bg-[#6f321c] transition"
          >
            Send Message
          </button>
        </form>

        {/* Info Section */}
        <div className="text-[#873e23] space-y-6 p-6">
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          <p className="text-gray-700">
            Have questions about a property, need help, or just want to say hello? We’d love to hear from you.
          </p>
          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-gray-800">contact@estatepro.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-800">+92 300 1234567</p>
          </div>
          <div>
            <p className="font-semibold">Office Address:</p>
            <p className="text-gray-800">123 Estate Street, Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
