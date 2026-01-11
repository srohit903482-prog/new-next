"use client";
import { useState } from "react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get Your Printer Working Today.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Expert remote support & diagnostics. We identify the issue and fix it fast without you leaving your desk.
          </p>

          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-green-600"></i>
              Secure SSL Connection
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-clock text-green-600"></i>
              Avg. Fix Time: 25 Mins
            </span>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-3xl mx-auto flex gap-4 text-left mb-8">
            <div className="text-green-600 text-2xl flex-shrink-0">✓</div>
            <div>
              <strong className="text-gray-900">Our "No Fix, No Fee" Promise:</strong>
              <p className="text-gray-700 mt-2">
                We charge a small diagnostic fee ($19.99) to start. If we can't fix your printer, we refund this fee immediately. If we fix it, the fee is credited toward your repair total.
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Start Diagnosis ($19.99)
          </a>
          <p className="mt-4 text-sm text-gray-600">100% Money-Back Guarantee if not resolved.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and secure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Your Session</h3>
              <p className="text-gray-600">
                Pay a one-time diagnostic fee of $19.99. This reserves a certified technician's time specifically for your issue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect & Diagnose</h3>
              <p className="text-gray-600">
                We connect via secure remote software to run a full system check. We find the root cause—whether it's drivers, network, or software conflicts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Fix & The Fee</h3>
              <p className="text-gray-600">
                We provide a firm quote. If you approve, we fix it immediately. Your initial $19.99 is <strong>deducted</strong> from the final price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the service level that fits your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Diagnostic Only */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic Only</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">$19.99</div>
              <p className="text-gray-600 mb-6">Best for: Identifying unknown errors.</p>
              <hr className="border-gray-200 mb-6" />
              <ul className="space-y-3 text-gray-700 mb-8">
                <li>Full System Analysis</li>
                <li>Error Code Identification</li>
                <li>Network Connectivity Check</li>
                <li>Written Report via Email</li>
              </ul>
              <a
                href="tel:9034821319"
                className="block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold transition-all"
              >
                Select Diagnostic
              </a>
            </div>

            {/* Simple Fix - Popular */}
            <div className="bg-white rounded-xl p-8 shadow-xl text-center border-t-4 border-blue-600 transform md:scale-105">
              <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Fix</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">$49.99</div>
              <p className="text-gray-600 mb-6">Best for: Driver updates & jams.</p>
              <hr className="border-gray-200 mb-6" />
              <ul className="space-y-3 text-gray-700 mb-8">
                <li><strong>Includes Diagnostic Fee</strong></li>
                <li>Driver Installation/Update</li>
                <li>Software Configuration</li>
                <li>Print Spooler Reset</li>
                <li>7-Day Follow-up Support</li>
              </ul>
              <a
                href="tel:9034821319"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
              >
                Start Repair ($19.99 Deposit)
              </a>
            </div>

            {/* Complex Repair */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complex Repair</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">$89.99+</div>
              <p className="text-gray-600 mb-6">Best for: Deep network issues.</p>
              <hr className="border-gray-200 mb-6" />
              <ul className="space-y-3 text-gray-700 mb-8">
                <li><strong>Includes Diagnostic Fee</strong></li>
                <li>Advanced Network Troubleshooting</li>
                <li>IP Configuration & Firewalls</li>
                <li>Multi-Device Setup</li>
                <li>30-Day Warranty on Fix</li>
              </ul>
              <a
                href="tel:9034821319"
                className="block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold transition-all"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Why do you charge a diagnostic fee?",
                answer: "Charging a diagnostic fee ensures our technicians are compensated for their time and expertise. It also allows us to offer a \"No Fix, No Fee\" guarantee—if we can't solve it, you get your money back."
              },
              {
                question: "Is the connection safe?",
                answer: "Yes. We use industry-standard 256-bit SSL encrypted remote access tools. You can see everything the technician is doing on your screen, and you can terminate the session at any moment with a single click."
              },
              {
                question: "What if the problem is hardware related?",
                answer: "We specialize in software and network issues. If we discover a broken gear or physical hardware failure, we will stop the session, refund your diagnostic fee in full, and advise you on the best local repair shop or replacement option."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left font-semibold text-gray-900 py-4 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="text-gray-600 pb-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
