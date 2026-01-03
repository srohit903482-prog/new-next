import Link from 'next/link';
import Image from 'next/image';

export default function OtherBrandsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-light-gray via-soft-white to-soft-blue">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">Other Printer Brands Support</h1>
                        <p className="text-xl text-medium-gray mb-8 leading-relaxed">
                            Professional technical support for Epson, Xerox, Lexmark, and other printer manufacturers.
                            Our certified technicians provide comprehensive solutions for all printer types.
                        </p>

                        <a href="tel:9034821319" className="bg-professional-navy hover:bg-medium-blue text-white px-8 py-4 rounded-xl font-semibold hover-lift inline-block floating-action">
                            <i className="fas fa-headset mr-2"></i>Call for Support: 903-482-1319
                        </a>
                    </div>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">All Printer Brands Supported</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Epson", desc: "EcoTank, WorkForce, Expression", color: "soft-blue", btnColor: "accent-teal", url: "/images/epson-logo.png" },
                            { name: "Xerox", desc: "VersaLink, AltaLink, WorkCentre", color: "warm-gray", btnColor: "accent-sage", url: "/images/xerox-logo.png" },
                            { name: "Lexmark", desc: "Mono, Color, Multi-Function", color: "soft-white", btnColor: "medium-blue", border: true, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lexmark_logo.svg/200px-Lexmark_logo.svg.png" },
                            { name: "Samsung", desc: "Xpress, MultiXpress series", color: "light-gray", btnColor: "accent-teal", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png" },
                            { name: "Ricoh", desc: "Aficio, MP series", color: "soft-blue", btnColor: "accent-sage", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ricoh_logo_2002.svg/200px-Ricoh_logo_2002.svg.png" },
                            { name: "Kyocera", desc: "TASKalfa, ECOSYS series", color: "warm-gray", btnColor: "medium-blue", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kyocera_logo.svg/200px-Kyocera_logo.svg.png" },
                            { name: "OKI", desc: "C, MC, B series", color: "soft-white", btnColor: "accent-teal", border: true, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/OKI_logo.svg/200px-OKI_logo.svg.png" }
                        ].map((brand, i) => (
                            <div key={i} className={`bg-${brand.color} rounded-xl p-6 text-center card-shadow hover-lift ${brand.border ? 'border border-light-gray' : ''}`}>
                                <div className="h-16 relative flex items-center justify-center mb-4">
                                    <Image
                                        src={brand.url}
                                        alt={`${brand.name} Logo`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-professional-navy mb-2">{brand.name}</h3>
                                <p className="text-medium-gray text-sm mb-4">{brand.desc}</p>
                                <a href="tel:9034821319" className={`text-${brand.btnColor} font-medium hover:text-professional-navy transition-colors`}>
                                    Get {brand.name} Support →
                                </a>
                            </div>
                        ))}

                        {/* Others Card */}
                        <div className="bg-light-gray rounded-xl p-6 text-center card-shadow hover-lift">
                            <div className="bg-professional-navy text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-ellipsis-h text-2xl"></i>
                            </div>
                            <h3 className="text-lg font-bold text-professional-navy mb-2">Others</h3>
                            <p className="text-medium-gray text-sm mb-4">And many more brands</p>
                            <a href="tel:9034821319" className="text-accent-sage font-medium hover:text-professional-navy transition-colors">
                                Ask About Your Brand →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Universal Services */}
            <section className="section-padding bg-soft-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Universal Services for All Brands</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Hardware Repair", desc: "Component replacement and mechanical fixes for any printer brand.", icon: "tools", color: "accent-teal", items: ["Printhead replacement", "Paper feed mechanisms", "Power supply repair"] },
                            { title: "Network Setup", desc: "Wireless and network configuration for all printer models.", icon: "network-wired", color: "accent-sage", items: ["Wi-Fi configuration", "Network printing", "Mobile printing setup"] },
                            { title: "Software Support", desc: "Driver installation and software configuration for all brands.", icon: "software", iconClass: "fa-laptop-code", color: "medium-blue", items: ["Driver installation", "Software updates", "Compatibility fixes"] }
                        ].map((service, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 card-shadow">
                                <div className={`bg-${service.color} text-white w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                                    <i className={`fas ${service.iconClass || 'fa-' + service.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-professional-navy mb-3">{service.title}</h3>
                                <p className="text-medium-gray mb-4">{service.desc}</p>
                                <ul className="text-sm text-medium-gray space-y-1">
                                    {service.items.map((item, j) => (
                                        <li key={j}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-professional-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Don't See Your Brand Listed?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We support virtually all printer manufacturers. Contact us to confirm support for your specific printer model.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:9034821319" className="bg-accent-teal hover:bg-white hover:text-accent-teal text-sm whitespace-nowrap px-8 py-4 rounded-xl font-semibold hover-lift inline-block floating-action">
                            <i className="fas fa-phone mr-2"></i>Ask About Your Brand: 903-482-1319
                        </a>
                        <Link href="/contact" className="bg-medium-blue hover:bg-white hover:text-[#0096D6] px-8 py-4 rounded-xl font-semibold hover-lift inline-block floating-action">
                            <i className="fas fa-envelope mr-2"></i>Contact Support Team
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
