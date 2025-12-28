export default function TermsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-warm-gray via-soft-white to-light-blue">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">Terms of Service</h1>
                        <p className="text-xl text-medium-gray mb-8 leading-relaxed">
                            These terms and conditions govern your use of our printer technical support services.
                            By using our services, you agree to these terms.
                        </p>
                        <p className="text-medium-gray">
                            Last updated: December 2023
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-professional-navy mb-6">1. Acceptance of Terms</h2>
                            <p className="text-medium-gray mb-8">
                                By accessing or using Printer Technical Support services, you agree to be bound by these
                                Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">2. Services Description</h2>
                            <p className="text-medium-gray mb-6">
                                Printer Technical Support provides:
                            </p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>Remote technical support for printer issues</li>
                                <li>Onsite technician visits for hardware repairs</li>
                                <li>Driver installation and configuration</li>
                                <li>Network setup and troubleshooting</li>
                                <li>Printer maintenance and optimization</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">3. Service Availability</h2>
                            <p className="text-medium-gray mb-6">
                                Our support hours are:
                            </p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>Monday - Friday: 8:00 AM - 8:00 PM EST</li>
                                <li>Saturday - Sunday: 9:00 AM - 5:00 PM EST</li>
                                <li>Emergency Service: 24/7 (additional charges may apply)</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">4. Customer Responsibilities</h2>
                            <p className="text-medium-gray mb-6">As a customer, you agree to:</p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>Provide accurate information about your printer and issues</li>
                                <li>Ensure safe access to your printer and computer</li>
                                <li>Follow all safety instructions provided by technicians</li>
                                <li>Backup important data before remote support sessions</li>
                                <li>Not interfere with technicians during service delivery</li>
                                <li>Provide payment for services rendered</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">5. Remote Support Terms</h2>
                            <p className="text-medium-gray mb-6">For remote support services:</p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>You must be 18 years or older to authorize remote access</li>
                                <li>Internet connection is required for remote sessions</li>
                                <li>You must remain present during the remote session</li>
                                <li>We will not access personal files without your permission</li>
                                <li>Remote sessions are recorded for quality assurance</li>
                                <li>You can terminate the session at any time</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">6. Onsite Service Terms</h2>
                            <p className="text-medium-gray mb-6">For onsite technician services:</p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>Service area availability may vary</li>
                                <li>Safe working environment must be provided</li>
                                <li>Adult supervision (18+) must be present</li>
                                <li>Parking access must be available</li>
                                <li>Customer is responsible for securing premises</li>
                                <li>Travel charges may apply outside service areas</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">7. Payment Terms</h2>
                            <p className="text-medium-gray mb-6">Payment policies:</p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>Payment is due upon completion of services</li>
                                <li>We accept major credit cards and electronic payments</li>
                                <li>Emergency services require advance payment</li>
                                <li>Price quotes are valid for 30 days</li>
                                <li>Additional charges apply for parts and materials</li>
                                <li>Late payment fees may apply to overdue accounts</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">8. Service Warranty</h2>
                            <p className="text-medium-gray mb-6">
                                We offer the following warranties:
                            </p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>30-day warranty on labor for all services</li>
                                <li>Manufacturer warranty applies to replacement parts</li>
                                <li>Warranty does not cover new issues or misuse</li>
                                <li>Warranty void if unauthorized modifications are made</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">9. Limitation of Liability</h2>
                            <p className="text-medium-gray mb-8">
                                To the fullest extent permitted by law, Printer Technical Support shall not be liable for
                                any indirect, incidental, special, or consequential damages resulting from the use or
                                inability to use our services, including but not limited to data loss, business interruption,
                                or lost profits.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">10. Data Backup</h2>
                            <p className="text-medium-gray mb-8">
                                We are not responsible for data loss during service. Customers are responsible for
                                backing up all important data before any service is performed. We recommend regular
                                backups of all critical files and documents.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">11. Cancellation and Refunds</h2>
                            <p className="text-medium-gray mb-6">Cancellation policy:</p>
                            <ul className="list-disc pl-6 text-medium-gray mb-8 space-y-2">
                                <li>24-hour notice required for cancellation without penalty</li>
                                <li>Late cancellations may incur a fee</li>
                                <li>No-shows will be charged full service fee</li>
                                <li>Refunds provided for services not satisfactorily completed</li>
                                <li>Refunds processed within 5-7 business days</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">12. Intellectual Property</h2>
                            <p className="text-medium-gray mb-8">
                                All content, materials, and tools provided by Printer Technical Support are protected
                                by intellectual property laws. You may not reproduce, distribute, or create derivative
                                works without our express written permission.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">13. Confidentiality</h2>
                            <p className="text-medium-gray mb-8">
                                We agree to keep confidential all customer information accessed during service delivery.
                                We will not disclose your information to third parties except as required by law or with
                                your consent.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">14. Termination</h2>
                            <p className="text-medium-gray mb-8">
                                We reserve the right to terminate services for violations of these terms, non-payment,
                                or unsafe working conditions. We will provide reasonable notice when possible.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">15. Governing Law</h2>
                            <p className="text-medium-gray mb-8">
                                These terms shall be governed by and construed in accordance with the laws of the state
                                in which our business is located, without regard to its conflict of law provisions.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">16. Changes to Terms</h2>
                            <p className="text-medium-gray mb-8">
                                We reserve the right to modify these terms at any time. Changes will be effective
                                immediately upon posting on our website. Your continued use of our services constitutes
                                acceptance of any modified terms.
                            </p>

                            <h2 className="text-2xl font-bold text-professional-navy mb-6">17. Contact Information</h2>
                            <p className="text-medium-gray mb-8">
                                For questions about these Terms of Service, please contact us:
                            </p>

                            <div className="bg-soft-blue rounded-xl p-6 card-shadow mb-8">
                                <ul className="space-y-2 text-medium-gray">
                                    <li><strong>Phone:</strong> 903-482-1319</li>
                                    <li><strong>Email:</strong> legal@printertechnical.com</li>
                                    <li><strong>Address:</strong> [Your Business Address]</li>
                                </ul>
                            </div>

                            <p className="text-medium-gray text-sm italic">
                                By using Printer Technical Support services, you acknowledge that you have read,
                                understood, and agree to be bound by these Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-professional-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready for Professional Printer Support?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Our certified technicians provide reliable service with clear terms and fair pricing.
                    </p>

                    <a href="tel:9034821319" className="bg-accent-teal hover:bg-white hover:text-accent-teal px-8 py-4 rounded-xl font-semibold hover-lift inline-block floating-action">
                        <i className="fas fa-phone mr-2"></i>Call Now: 903-482-1319
                    </a>
                </div>
            </section>
        </main>
    );
}
