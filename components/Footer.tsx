"use client";

import Link from 'next/link';
import { useChat } from './ChatProvider';

export default function Footer() {
    const { toggleChat } = useChat();

    return (
        <footer className="text-white pt-16 pb-8" style={{backgroundColor: '#232F3E'}}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
                    <div>
                        <div className="flex flex-col items-center md:items-start gap-3 mb-6 -mt-4">
                            <div className="p-2 rounded-lg">
                                <img src="/images/web-logo.png" alt="Printer Desk Support" className="w-24 h-24" />
                            </div>
                            <Link href="/" className="text-xl font-semibold font-serif hover:text-[#0096D6] transition-colors">PrintDesk Support</Link>
                        </div>
                        <p className="text-gray-300 mb-4">Professional technical support for all printer brands with certified technicians.</p>
                        <div className="flex gap-3 justify-center md:justify-start">
                            <a href="#" className="bg-gray-500 hover:bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                <i className="fab fa-facebook-f text-sm"></i>
                            </a>
                            <a href="#" className="bg-gray-500 hover:bg-blue-700 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                <i className="fab fa-linkedin-in text-sm"></i>
                            </a>
                            <a href="#" className="bg-gray-500 hover:bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                <i className="fab fa-youtube text-sm"></i>
                            </a>
                            <a href="#" className="bg-gray-500 hover:bg-red-500 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                <i className="fab fa-pinterest text-sm"></i>
                            </a>
                            <a href="#" className="bg-gray-500 hover:bg-pink-500 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                <i className="fab fa-instagram text-sm"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Brand Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="/support/hp" className="text-gray-300 hover:text-[#0096D6]">HP Support</Link></li>
                            <li><Link href="/support/brother" className="text-gray-300 hover:text-[#0096D6]">Brother Support</Link></li>
                            <li><Link href="/support/canon" className="text-gray-300 hover:text-[#0096D6]">Canon Support</Link></li>
                            <li><Link href="/pricing" className="text-gray-300 hover:text-[#0096D6]">Support Plans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/troubleshooting" className="text-gray-300 hover:text-[#0096D6]">Troubleshooting</Link></li>
                            <li><Link href="/onsite" className="text-gray-300 hover:text-[#0096D6]">Onsite Service</Link></li>
                            <li><Link href="/driver-downloads" className="text-gray-300 hover:text-[#0096D6]">Driver Downloads</Link></li>
                            <li><Link href="/repair" className="text-gray-300 hover:text-[#0096D6]">Printer Repair</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li><a href="tel:9034821319" className="text-gray-300 hover:text-[#0096D6]">903-482-1319</a></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-[#0096D6]">Contact Form</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-[#0096D6]">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-300 hover:text-[#0096D6]">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; 2023 Printer Technical Support. All rights reserved.</p>
                </div>
            </div>

            {/* Floating Widgets */}
            {/* <div className="fixed bottom-6 right-6 z-50">
                <div className="flex flex-col items-end space-y-3">
                    <a href="tel:9034821319" className="bg-accent-teal text-white w-14 h-14 rounded-full flex items-center justify-center floating-action cursor-pointer shadow-lg">
                        <i className="fas fa-phone text-xl"></i>
                    </a>
                    <button onClick={toggleChat} className="bg-professional-navy text-white w-14 h-14 rounded-full flex items-center justify-center floating-action cursor-pointer shadow-lg">
                        <i className="fas fa-comment-dots text-xl"></i>
                    </button>
                </div>
            </div> */}
        </footer>
    );
}
