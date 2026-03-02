"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Image Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/footer-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Contact Us Badge */}
            <div className="inline-block">
              <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold text-black font-body transition-all duration-300">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight">
              Contact & Join
              <br />
              Together
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-black text-black leading-relaxed max-w-xl font-normal font-heading">
              Let them be born to do, let them be chosen, let them be distinguished by their distinction? Not by duties, but by the fact that they are born, not by the fact that they provide justice.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-blue-950 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name Input */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-6 py-3.5 rounded-full bg-white/10 border-1 border-white/30 text-white placeholder-gray-200/30 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Last Name Input */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-6 py-3.5 rounded-full font-body bg-white/10 border-1 border-white/30 text-white placeholder-gray-200/30 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-6 py-4 rounded-3xl font-body bg-white/10 border-1 border-white/30 text-white placeholder-gray-200/30 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full text-black bg-white border-1 border-white/10 px-8 py-3.5 rounded-full  font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-body"
                    
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
