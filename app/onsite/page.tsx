"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OnsitePage() {
    const [notification, setNotification] = useState<{ message: string, type: 'success' | 'info' } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const urgent = formData.get('urgent') === 'on';

        const message = urgent
            ? 'Thank you for booking emergency onsite service! Our team will contact you within 30 minutes to confirm your same-day appointment.'
            : 'Thank you for booking onsite service! Our team will contact you within 2 hours to confirm your appointment.';

        showNotification(message, 'success');
        e.currentTarget.reset();
    };

    const showNotification = (message: string, type: 'success' | 'info') => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 5300);
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
            <section className="section-padding bg-gradient-to-br from-warm-gray via-soft-white to-light-blue">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-accent-sage text-white w-16 h-16 rounded-full flex items-center justify-center">
                                    <i className="fas fa-tools text-2xl"></i>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-professional-navy">Onsite Printer Service</h1>
                            </div>
                            <p className="text-xl text-medium-gray mb-8 leading-relaxed">
                                Professional technicians come to your location to diagnose and repair your printer.
                                Same-day service available for all major brands including HP, Brother, Canon, and more.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: "clock", text: "Same-Day Service" },
                                    { icon: "certificate", text: "Certified Technicians" },
                                    { icon: "shield-alt", text: "Service Warranty" },
                                    { icon: "dollar-sign", text: "Fixed Pricing" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center p-4 bg-white rounded-xl card-shadow">
                                        <i className={`fas fa-${item.icon} text-accent-sage text-xl mr-3`}></i>
                                        <span className="font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:9034821319" className="bg-accent-sage hover:bg-professional-navy text-white px-6 py-3 rounded-lg font-semibold hover-lift floating-action">
                                    <i className="fas fa-phone mr-2"></i>Schedule Onsite Service
                                </a>
                                <Link href="#service-form" className="bg-professional-navy hover:bg-medium-blue text-white px-6 py-3 rounded-lg font-semibold hover-lift floating-action">
                                    <i className="fas fa-calendar mr-2"></i>Book Appointment Online
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden card-shadow relative h-96">
                            <Image
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Technician Repairing Printer"
                                fill
                                className="object-cover"
                                unoptimized // Using external URL
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Service Areas</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Simplified cards for brevity */}
                        <div className="bg-soft-blue rounded-xl p-6 text-center card-shadow hover-lift">
                            <div className="bg-medium-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-building"></i>
                            </div>
                            <h3 className="font-bold text-professional-navy mb-2">Business Districts</h3>
                            <p className="text-medium-gray text-sm">Corporate offices, business parks, and commercial centers</p>
                        </div>

                        <div className="bg-warm-gray rounded-xl p-6 text-center card-shadow hover-lift">
                            <div className="bg-accent-sage text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-home"></i>
                            </div>
                            <h3 className="font-bold text-professional-navy mb-2">Residential Areas</h3>
                            <p className="text-medium-gray text-sm">Home offices and residential neighborhoods</p>
                        </div>

                        <div className="bg-soft-white rounded-xl p-6 text-center card-shadow hover-lift border border-light-gray">
                            <div className="bg-accent-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="font-bold text-professional-navy mb-2">Educational</h3>
                            <p className="text-medium-gray text-sm">Schools, universities, and training centers</p>
                        </div>

                        <div className="bg-light-gray rounded-xl p-6 text-center card-shadow hover-lift">
                            <div className="bg-professional-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-hospital"></i>
                            </div>
                            <h3 className="font-bold text-professional-navy mb-2">Healthcare</h3>
                            <p className="text-medium-gray text-sm">Hospitals, clinics, and medical offices</p>
                        </div>
                    </div>

                    <div className="bg-light-blue rounded-xl p-8 text-center">
                        <h3 className="text-xl font-bold text-professional-navy mb-4">Don't see your area listed?</h3>
                        <p className="text-medium-gray mb-6">Call us to check service availability in your location. We're constantly expanding our service areas.</p>
                        <a href="tel:9034821319" className="bg-professional-navy hover:bg-medium-blue text-white px-6 py-3 rounded-lg font-semibold smooth-transition inline-block">
                            <i className="fas fa-phone mr-2"></i>Check Availability: 903-482-1319
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Offered - Simplified map implementation */}
            <section className="section-padding bg-soft-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Comprehensive Onsite Services</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Diagnostic Services */}
                        <div className="bg-white rounded-xl p-8 card-shadow border border-light-gray">
                            <div className="flex items-start mb-6">
                                <div className="bg-accent-teal text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Diagnostic Services</h3>
                                    <p className="text-medium-gray">Comprehensive hardware and software diagnosis to identify the root cause of printer issues.</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {["Complete system diagnostics", "Hardware failure detection", "Software conflict analysis", "Network connectivity testing"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <i className="fas fa-check text-accent-sage mr-3"></i><span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Hardware Repairs */}
                        <div className="bg-white rounded-xl p-8 card-shadow border border-light-gray">
                            <div className="flex items-start mb-6">
                                <div className="bg-medium-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <i className="fas fa-wrench"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Hardware Repairs</h3>
                                    <p className="text-medium-gray">Professional repair and replacement of printer components using genuine parts.</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {["Printhead replacement", "Fuser assembly repair", "Paper feed mechanism fixes", "Power supply replacement"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <i className="fas fa-check text-accent-sage mr-3"></i><span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Preventive Maintenance */}
                        <div className="bg-white rounded-xl p-8 card-shadow border border-light-gray">
                            <div className="flex items-start mb-6">
                                <div className="bg-accent-sage text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Preventive Maintenance</h3>
                                    <p className="text-medium-gray">Regular maintenance to keep your printer running smoothly and prevent future issues.</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {["Internal cleaning and lubrication", "Wear part inspection", "Calibration and adjustments", "Firmware updates"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <i className="fas fa-check text-accent-sage mr-3"></i><span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Network Setup */}
                        <div className="bg-white rounded-xl p-8 card-shadow border border-light-gray">
                            <div className="flex items-start mb-6">
                                <div className="bg-professional-navy text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <i className="fas fa-network-wired"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-professional-navy mb-2">Network Setup</h3>
                                    <p className="text-medium-gray">Professional installation and configuration of network printers and multifunction devices.</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {["Wi-Fi network configuration", "Print server setup", "Mobile printing configuration", "Security settings"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <i className="fas fa-check text-accent-sage mr-3"></i><span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section id="service-form" className="section-padding bg-soft-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-professional-navy text-center mb-8">Book Onsite Service</h2>

                        <div className="bg-white rounded-2xl p-8 card-shadow border border-light-gray">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Full Name *</label>
                                        <input type="text" required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Phone Number *</label>
                                        <input type="tel" required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Email Address *</label>
                                    <input type="email" required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent" />
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Service Address *</label>
                                    <input type="text" required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Printer Brand *</label>
                                        <select required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent">
                                            <option value="">Select Brand</option>
                                            <option value="hp">HP</option>
                                            <option value="brother">Brother</option>
                                            <option value="canon">Canon</option>
                                            <option value="epson">Epson</option>
                                            <option value="xerox">Xerox</option>
                                            <option value="lexmark">Lexmark</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-professional-navy font-medium mb-2">Service Type *</label>
                                        <select required
                                            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent">
                                            <option value="">Select Service</option>
                                            <option value="repair">Hardware Repair</option>
                                            <option value="maintenance">Preventive Maintenance</option>
                                            <option value="network">Network Setup</option>
                                            <option value="diagnosis">Diagnostic Only</option>
                                            <option value="emergency">Emergency Service</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Preferred Date *</label>
                                    <input type="date" required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent" />
                                </div>

                                <div>
                                    <label className="block text-professional-navy font-medium mb-2">Describe Your Issue *</label>
                                    <textarea rows={4} required
                                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent"></textarea>
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" id="urgent" name="urgent" className="mr-3" />
                                    <label htmlFor="urgent" className="text-professional-navy">Mark as urgent - I need same-day service</label>
                                </div>

                                <button type="submit" className="w-full bg-accent-sage hover:bg-professional-navy text-white py-4 rounded-lg font-semibold hover-lift floating-action">
                                    <i className="fas fa-calendar-check mr-2"></i>Book Onsite Service
                                </button>
                            </form>

                            <div className="mt-8 p-6 bg-light-blue rounded-xl">
                                <p className="text-professional-navy font-medium mb-2">
                                    <i className="fas fa-info-circle text-accent-teal mr-2"></i>
                                    Service Guarantee
                                </p>
                                <p className="text-medium-gray text-sm">
                                    All onsite services come with a 30-day warranty on labor. We use genuine manufacturer parts and provide detailed service reports.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Service CTA */}
            <section className="section-padding bg-professional-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Emergency Printer Service Available</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Critical printer failure? We offer emergency onsite service with priority response times.</p>

                    <a href="tel:9034821319" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover-lift floating-action inline-flex items-center gap-3">
                        <i className="fas fa-exclamation-triangle"></i>
                        <span>Emergency Service: 903-482-1319</span>
                    </a>
                </div>
            </section>

        </main>
    );
}
