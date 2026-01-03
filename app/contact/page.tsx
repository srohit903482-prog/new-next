"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useChat } from '@/components/ChatProvider';

export default function ContactPage() {
    const { openChat } = useChat();
    const [notification, setNotification] = useState<{ message: string, type: 'success' | 'info' } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const urgent = formData.get('urgent') === 'on';

        const message = urgent
            ? 'Thank you for your urgent request! Our team will contact you within 30 minutes for immediate assistance.'
            : 'Thank you for contacting us! Our team will respond within 2 hours during business hours.';

        showNotification(message, 'success');
        e.currentTarget.reset();
    };

    const showNotification = (message: string, type: 'success' | 'info') => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 5300); // slightly longer to match animation timing if we strictly followed css, but simplified here
    };

    return (
        <main>
            {/* Notification Toast */}
            {notification && (
                <div className={`fixed top-24 right-6 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-transform duration-300 transform translate-x-0 ${notification.type === 'success' ? 'bg-green-500' : 'bg-professional-navy'} text-white`}>
                    <div className="flex items-center">
                        <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-info-circle'} mr-3`}></i>
                        <p>{notification.message}</p>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-soft-blue via-soft-white to-warm-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">Contact Us</h1>
                        <p className="text-xl text-medium-gray mb-8 leading-relaxed">
                            Get in touch with our certified printer support team. We're available 24/7 to help you resolve
                            any printer issues with professional, reliable service.
                        </p>

                        <div className="bg-white rounded-2xl p-8 card-shadow max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="bg-accent-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-phone-alt text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Phone Support</h3>
                                    <p className="text-2xl font-bold text-accent-teal mb-2">903-482-1319</p>
                                    <p className="text-medium-gray">24/7 Available</p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-accent-sage text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-comments text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Live Chat</h3>
                                    <p className="text-medium-gray mb-2">Instant Support</p>
                                    <button onClick={openChat} className="text-accent-sage font-medium hover:text-professional-navy transition-colors">
                                        Start Chat →
                                    </button>
                                </div>

                                <div className="text-center">
                                    <div className="bg-medium-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-envelope text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Email Support</h3>
                                    <p className="text-medium-gray mb-2">Response within 2 hours</p>
                                    <a href="mailto:support@printertechnical.com" className="text-[#0096D6] font-medium hover:text-professional-navy transition-colors">
                                        Send Email →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-professional-navy mb-8">Send Us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">First Name *</label>
                                        <input type="text" required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Last Name *</label>
                                        <input type="text" required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Email Address *</label>
                                        <input type="email" required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Phone Number *</label>
                                        <input type="tel" required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Service Type *</label>
                                    <select required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent">
                                        <option value="">Select Service</option>
                                        <option value="remote">Remote Support</option>
                                        <option value="onsite">Onsite Technician</option>
                                        <option value="both">Both Services</option>
                                        <option value="emergency">Emergency Service</option>
                                        <option value="consultation">Free Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Printer Brand *</label>
                                    <select required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent">
                                        <option value="">Select Brand</option>
                                        <option value="hp">HP</option>
                                        <option value="brother">Brother</option>
                                        <option value="canon">Canon</option>
                                        <option value="epson">Epson</option>
                                        <option value="xerox">Xerox</option>
                                        <option value="lexmark">Lexmark</option>
                                        <option value="other">Other</option>
                                        <option value="not-sure">Not Sure</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Subject *</label>
                                    <input type="text" required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent"
                                        placeholder="Brief description of your issue" />
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Message *</label>
                                    <textarea rows={5} required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent"
                                        placeholder="Please describe your printer issue in detail..."></textarea>
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" id="urgent" name="urgent" className="mr-3" />
                                    <label htmlFor="urgent" className="text-professional-navy">Mark as urgent - I need immediate assistance</label>
                                </div>

                                <button type="submit" className="w-full bg-professional-navy hover:bg-medium-blue text-white py-4 rounded-lg font-semibold hover-lift floating-action">
                                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-professional-navy mb-8">Support Information</h2>

                            <div className="space-y-6">
                                <div className="bg-soft-blue rounded-xl p-6 card-shadow">
                                    <div className="flex items-start">
                                        <div className="bg-accent-teal text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-professional-navy mb-2">Support Hours</h3>
                                            <div className="space-y-2 text-medium-gray">
                                                <div className="flex justify-between">
                                                    <span>Monday - Friday:</span>
                                                    <span className="font-medium">8:00 AM - 8:00 PM EST</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Saturday - Sunday:</span>
                                                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Emergency Service:</span>
                                                    <span className="font-medium text-accent-teal">24/7 Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-warm-gray rounded-xl p-6 card-shadow">
                                    <div className="flex items-start">
                                        <div className="bg-accent-sage text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-professional-navy mb-2">Service Areas</h3>
                                            <p className="text-medium-gray mb-4">
                                                We provide onsite technician services in all major metropolitan areas.
                                                Contact us to check availability in your specific location.
                                            </p>
                                            <Link href="/onsite" className="text-accent-sage font-medium hover:text-professional-navy transition-colors">
                                                View Service Areas →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-soft-white rounded-xl p-6 card-shadow border border-light-gray">
                                    <div className="flex items-start">
                                        <div className="bg-medium-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-professional-navy mb-2">Service Guarantee</h3>
                                            <ul className="space-y-2 text-medium-gray">
                                                {[
                                                    "Certified technicians",
                                                    "30-day service warranty",
                                                    "Genuine manufacturer parts",
                                                    "Transparent pricing"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center">
                                                        <i className="fas fa-check text-accent-sage mr-2"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact Buttons */}
                            <div className="mt-8 space-y-4">
                                <a href="tel:9034821319" className="w-full bg-accent-teal hover:bg-professional-navy text-white py-4 rounded-lg font-semibold hover-lift floating-action flex items-center justify-center gap-3">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>Call Now for Immediate Support</span>
                                </a>

                                <Link href="/onsite" className="w-full bg-accent-sage hover:bg-professional-navy text-white py-4 rounded-lg font-semibold hover-lift floating-action flex items-center justify-center gap-3">
                                    <i className="fas fa-tools"></i>
                                    <span>Book Onsite Technician</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-soft-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { q: "How quickly can you help me?", a: "We offer immediate phone support 24/7. Remote sessions typically start within 15 minutes. Onsite service is available same-day in most areas." },
                            { q: "Do you support all printer brands?", a: "Yes, we support all major printer brands including HP, Brother, Canon, Epson, Xerox, and Lexmark. Our technicians are certified for multiple manufacturers." },
                            { q: "What is remote support?", a: "Remote support allows our technicians to securely connect to your computer to diagnose and fix printer issues without needing to visit your location." },
                            { q: "Are your services guaranteed?", a: "Yes, all our services come with a 30-day warranty on labor. We use genuine parts and provide detailed service reports for your records." },
                            { q: "How much does onsite service cost?", a: "We offer competitive fixed pricing with no hidden fees. Contact us for a free quote based on your specific printer issue and location." },
                            { q: "Do you offer emergency service?", a: "Yes, we provide 24/7 emergency service with priority response times for critical printer failures that affect business operations." }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                                <h3 className="text-lg font-bold text-professional-navy mb-3">{faq.q}</h3>
                                <p className="text-medium-gray">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-professional-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Your Printer Fixed?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Our certified technicians are standing by to help you resolve any printer issue quickly and professionally.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:9034821319" className="bg-accent-teal hover:bg-white hover:text-accent-teal px-8 py-4 rounded-xl font-semibold hover-lift floating-action">
                            <i className="fas fa-phone mr-2"></i>Call Now: 903-482-1319
                        </a>
                        <Link href="/onsite" className="bg-accent-sage hover:bg-white hover:text-accent-sage px-8 py-4 rounded-xl font-semibold hover-lift floating-action">
                            <i className="fas fa-tools mr-2"></i>Schedule Service
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
