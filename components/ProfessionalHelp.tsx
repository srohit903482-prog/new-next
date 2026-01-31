"use client";

import { Phone, Wrench, Laptop, Clock } from "lucide-react";
import { useState } from "react";

export default function ProfessionalHelp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    printerBrand: "",
    issue: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="md:py-10 py-2 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Need Professional Help? Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expert technicians are ready to provide personalized assistance for your printer issues
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Support Options */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Professional Support</h3>
            <p className="text-gray-600 mb-6">
              If our guides don't resolve your issue, our certified technicians provide personalized
              assistance tailored to your specific needs.
            </p>

            <div className="space-y-4">
              {/* Technical Support Line */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Technical Support Line</h4>
                  <a href="tel:9034821319" className="text-cyan-500 text-lg font-semibold hover:underline">
                    903-482-1319
                  </a>
                </div>
              </div>

              {/* Onsite Technician Service */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-[rgb(135,169,107)] p-3 rounded-full">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Onsite Technician Service</h4>
                  <p className="text-gray-600 text-sm">Available in all major metropolitan areas</p>
                </div>
              </div>

              {/* Remote Support */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Remote Support</h4>
                  <p className="text-gray-600 text-sm">Available 24/7 for immediate assistance</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Support Hours</h4>
                  <p className="text-gray-600 text-sm">Mon-Fri: 8AM-8PM EST</p>
                  <p className="text-gray-600 text-sm">Sat-Sun: 9AM-5PM EST</p>
                </div>
              </div>
            </div>

            {/* Immediate Support Button */}
            <a
              href="tel:9034821319"
              className="mt-6 w-full bg-gray-700 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs">IMMEDIATE SUPPORT</span> <span>+91903-482-1319</span>
            </a>
          </div>

          {/* Right Column - Request Form */}
          <div>
            <h3 className="text-2xl md:mt-12 font-bold text-gray-800 mb-6">Request Technical Assistance</h3>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-700"
                >
                  <option value="">Select Service Type</option>
                  <option value="remote">Remote Support</option>
                  <option value="onsite">Onsite Service</option>
                  <option value="phone">Phone Support</option>
                </select>

                <select
                  value={formData.printerBrand}
                  onChange={(e) => setFormData({ ...formData, printerBrand: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-700"
                >
                  <option value="">Select Printer Brand</option>
                  <option value="hp">HP</option>
                  <option value="canon">Canon</option>
                  <option value="epson">Epson</option>
                  <option value="brother">Brother</option>
                  <option value="xerox">Xerox</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  placeholder="Describe your printer issue in detail..."
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white py-3  md:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Technical Request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
