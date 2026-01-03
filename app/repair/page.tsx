import Link from 'next/link';

export default function RepairPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-soft-blue via-soft-white to-warm-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">Professional Printer Repair</h1>
                        <p className="text-xl text-medium-gray mb-8 leading-relaxed">
                            Expert repair services for all printer types. Our certified technicians diagnose and fix
                            hardware issues, component failures, and mechanical problems with genuine parts.
                        </p>

                        <div className="bg-white rounded-2xl p-8 card-shadow max-w-3xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                {[
                                    { icon: "tools", title: "Hardware Repair", desc: "Component replacement and mechanical fixes", color: "accent-teal" },
                                    { icon: "certificate", title: "Certified Technicians", desc: "Manufacturer-trained repair specialists", color: "accent-sage" },
                                    { icon: "shield-alt", title: "Service Warranty", desc: "90-day warranty on all repairs", color: "medium-blue" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className={`bg-${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <i className={`fas fa-${item.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-professional-navy mb-2">{item.title}</h3>
                                        <p className="text-medium-gray text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Repair Services */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Comprehensive Repair Services</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-soft-blue rounded-xl p-6 card-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-medium-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                    <i className="fas fa-wrench"></i>
                                </div>
                                <h3 className="text-xl font-bold text-professional-navy">Hardware Components</h3>
                            </div>
                            <ul className="space-y-3 text-medium-gray">
                                {[
                                    "Printhead replacement and repair",
                                    "Fuser assembly replacement",
                                    "Paper feed mechanism repair",
                                    "Power supply replacement",
                                    "Logic board and circuit repair"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check text-accent-teal mr-3"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-warm-gray rounded-xl p-6 card-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-accent-sage text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h3 className="text-xl font-bold text-professional-navy">Mechanical Systems</h3>
                            </div>
                            <ul className="space-y-3 text-medium-gray">
                                {[
                                    "Paper jam removal and prevention",
                                    "Scanner assembly repair",
                                    "ADF mechanism service",
                                    "Tray and roller replacement",
                                    "Calibration and alignment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check text-[#0096D6] mr-3"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Repair Process (Steps) */}
            <section className="section-padding bg-soft-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Our Repair Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { step: "1. Diagnosis", desc: "Comprehensive inspection to identify all issues", icon: "search", color: "professional-navy" },
                            { step: "2. Quote", desc: "Detailed repair estimate with parts and labor", icon: "file-invoice", color: "accent-teal" },
                            { step: "3. Repair", desc: "Professional repair using genuine parts", icon: "tools", color: "medium-blue" },
                            { step: "4. Testing", desc: "Thorough testing before return", icon: "check", color: "accent-sage" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className={`bg-${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <i className={`fas fa-${item.icon} text-2xl`}></i>
                                </div>
                                <h3 className="text-lg font-bold text-professional-navy mb-2">{item.step}</h3>
                                <p className="text-medium-gray text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands We Repair (Simplified Grid) */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Printer Brands We Repair</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "HP", logo: "hp-logo.png", color: "soft-blue" },
                            { name: "Brother", logo: "brother-logo.png", color: "warm-gray" },
                            { name: "Canon", logo: "canon-logo.png", color: "soft-white", border: true },
                            { name: "Epson", logo: "epson-logo.png", color: "light-gray" },
                            { name: "Xerox", logo: "xerox-logo.png", color: "soft-blue" },
                            { name: "Lexmark", logo: "lexmark-logo.png", color: "warm-gray" }
                        ].map((brand, i) => (
                            <div key={i} className={`bg-${brand.color} rounded-xl p-6 text-center card-shadow hover-lift ${brand.border ? 'border border-light-gray' : ''}`}>
                                {/* Note: In a real app, I'd use local images if available. For now using placeholder logic or external if I had URLs, but I'll use text fallback primarily or Next.js Image if I have the assets. */}
                                {/* Assuming I don't have all specific logo assets locally renamed, I will just use text or generic if I can't confirm. But I'll try to use the component structure. */}
                                <p className="font-medium text-professional-navy font-bold">{brand.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-professional-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need Printer Repair?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Our certified technicians can repair any printer issue with professional service and genuine parts.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:9034821319" className="bg-accent-teal hover:bg-white hover:text-accent-teal px-8 py-4 rounded-xl font-semibold hover-lift inline-block floating-action">
                            <i className="fas fa-phone mr-2"></i>Repair Service: 903-482-1319
                        </a>
                        <Link href="/onsite" className="bg-accent-sage hover:bg-white hover:text-accent-sage px-8 py-4 rounded-xl font-semibold hover-lift inline-block floating-action">
                            <i className="fas fa-calendar mr-2"></i>Schedule Onsite Repair
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
