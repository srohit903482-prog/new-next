"use client";

import Link from 'next/link';
import { useChat } from './ChatProvider';

export default function Footer() {
    const { toggleChat } = useChat();

    return (
        <footer className="bg-professional-navy text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-medium-blue p-2 rounded-lg">
                                <i className="fas fa-print text-white"></i>
                            </div>
                            <h4 className="text-xl font-semibold">Printer Technical Support</h4>
                        </div>
                        <p className="text-gray-300">Professional technical support for all printer brands with certified technicians.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Brand Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="/support/hp" className="text-gray-300 hover:text-medium-blue">HP Support</Link></li>
                            <li><Link href="/support/brother" className="text-gray-300 hover:text-medium-blue">Brother Support</Link></li>
                            <li><Link href="/support/canon" className="text-gray-300 hover:text-medium-blue">Canon Support</Link></li>
                            <li><Link href="/other-brands" className="text-gray-300 hover:text-medium-blue">Other Brands</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/troubleshooting" className="text-gray-300 hover:text-medium-blue">Troubleshooting</Link></li>
                            <li><Link href="/onsite" className="text-gray-300 hover:text-medium-blue">Onsite Service</Link></li>
                            <li><Link href="/driver-downloads" className="text-gray-300 hover:text-medium-blue">Driver Downloads</Link></li>
                            <li><Link href="/repair" className="text-gray-300 hover:text-medium-blue">Printer Repair</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li><a href="tel:9034821319" className="text-gray-300 hover:text-medium-blue">903-482-1319</a></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-medium-blue">Contact Form</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-medium-blue">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-300 hover:text-medium-blue">Terms of Service</Link></li>
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
