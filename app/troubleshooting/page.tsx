import Link from 'next/link';
import Image from 'next/image';

export default function TroubleshootingPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-soft-blue via-soft-white to-warm-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">Printer Troubleshooting Guide</h1>
                        <p className="text-xl text-medium-gray mb-8 leading-relaxed">
                            Comprehensive solutions for common printer problems. Step-by-step guides to fix connectivity, print quality,
                            error messages, and software issues for all major printer brands.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            {[
                                { icon: "wifi", title: "Connectivity", desc: "Wi-Fi & Network", color: "medium-blue" },
                                { icon: "tint", title: "Print Quality", desc: "Ink & Toner", color: "accent-sage" },
                                { icon: "exclamation-triangle", title: "Error Codes", desc: "Messages & Alerts", color: "accent-teal" },
                                { icon: "cogs", title: "Software", desc: "Drivers & Apps", color: "professional-navy" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl card-shadow text-center">
                                    <div className={`bg-${item.color} text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <i className={`fas fa-${item.icon}`}></i>
                                    </div>
                                    <h3 className="font-semibold text-professional-navy">{item.title}</h3>
                                    <p className="text-sm text-medium-gray mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <a href="tel:9034821319" className="bg-professional-navy hover:bg-medium-blue text-white px-8 py-4 rounded-xl font-semibold hover-lift floating-action inline-flex items-center gap-3">
                            <i className="fas fa-headset"></i>
                            <span>Need Expert Help? Call 903-482-1319</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Solutions */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Quick Fix Solutions</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Printer Won't Print */}
                        <div className="bg-soft-blue rounded-xl p-6 card-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-medium-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                    <i className="fas fa-print"></i>
                                </div>
                                <h3 className="text-xl font-bold text-professional-navy">Printer Won't Print</h3>
                            </div>
                            <p className="text-medium-gray mb-4">Complete step-by-step guide when your printer is connected but not printing.</p>
                            <div className="space-y-3">
                                {[
                                    { title: "Check Printer Status", desc: "Ensure printer is powered on and not in sleep mode. Check display for any error messages." },
                                    { title: "Verify Connection", desc: "Check USB cable is securely connected or Wi-Fi network is accessible. Test with another device." },
                                    { title: "Clear Print Queue", desc: "Open print queue, cancel all pending jobs, and restart both printer and computer." },
                                    { title: "Reinstall Printer", desc: "Remove and re-add printer in system settings, update drivers if needed." }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start">
                                        <span className="bg-medium-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">{i + 1}</span>
                                        <div>
                                            <strong className="text-professional-navy">{step.title}:</strong>
                                            <p className="text-medium-gray text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Paper Jams */}
                        <div className="bg-warm-gray rounded-xl p-6 card-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-accent-sage text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                    <i className="fas fa-exclamation"></i>
                                </div>
                                <h3 className="text-xl font-bold text-professional-navy">Paper Jam Solutions</h3>
                            </div>
                            <p className="text-medium-gray mb-4">How to safely remove paper jams and prevent them from happening again.</p>
                            <div className="space-y-3">
                                {[
                                    { title: "Power Down First", desc: "Turn off printer and unplug from power. Wait 30 seconds for components to cool." },
                                    { title: "Access All Areas", desc: "Open paper tray, rear access door, and any other access panels. Check toner/ink cartridge area." },
                                    { title: "Remove Gently", desc: "Pull paper in direction of paper path using both hands. Avoid tearing paper." },
                                    { title: "Prevention", desc: "Use correct paper type, don't overfill tray, store paper in dry environment." }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start">
                                        <span className="bg-accent-sage text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">{i + 1}</span>
                                        <div>
                                            <strong className="text-professional-navy">{step.title}:</strong>
                                            <p className="text-medium-gray text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connectivity Issues */}
            <section id="connectivity" className="section-padding bg-soft-white">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-professional-navy mb-6 flex items-center">
                            <div className="bg-medium-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                <i className="fas fa-wifi text-sm"></i>
                            </div>
                            Connectivity Issues
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">Wi-Fi Connection Problems</h4>
                                <div className="space-y-3">
                                    {[
                                        { title: "Router Issues", desc: "Restart router, check 2.4GHz band availability, verify printer supports your network security (WPA2/WPA3)." },
                                        { title: "Printer Network Setup", desc: "Run wireless setup wizard, use WPS button, or temporarily connect via USB for configuration." },
                                        { title: "IP Address Issues", desc: "Set static IP, check DHCP settings, ping printer IP to test connectivity." }
                                    ].map((item, i) => (
                                        <div key={i} className="border-l-4 border-medium-blue pl-4">
                                            <strong className="text-professional-navy">{item.title}:</strong>
                                            <p className="text-medium-gray text-sm mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">USB Connection Problems</h4>
                                <div className="space-y-3">
                                    {[
                                        { title: "Cable & Port Issues", desc: "Try different USB cable, test different USB port, check cable length under 6 feet." },
                                        { title: "Driver Recognition", desc: "Uninstall old drivers, install fresh from manufacturer website, restart computer." },
                                        { title: "Port Conflicts", desc: "Check Device Manager for conflicts, disable unused ports, update USB drivers." }
                                    ].map((item, i) => (
                                        <div key={i} className="border-l-4 border-medium-blue pl-4">
                                            <strong className="text-professional-navy">{item.title}:</strong>
                                            <p className="text-medium-gray text-sm mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Print Quality Issues */}
                    <div id="ink" className="mb-12">
                        <h3 className="text-2xl font-bold text-professional-navy mb-6 flex items-center">
                            <div className="bg-accent-sage text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                <i className="fas fa-tint text-sm"></i>
                            </div>
                            Print Quality & Ink/Toner Issues
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">Inkjet Print Quality</h4>
                                <div className="space-y-3">
                                    {[
                                        { title: "Print Head Cleaning", desc: "Run automatic cleaning cycle 2-3 times, perform manual cleaning with distilled water if needed." },
                                        { title: "Alignment & Calibration", desc: "Print alignment page, scan or select best alignment, calibrate colors for accurate output." },
                                        { title: "Ink Cartridge Issues", desc: "Remove and reseat cartridges, clean contacts with alcohol, replace expired cartridges." }
                                    ].map((item, i) => (
                                        <div key={i} className="border-l-4 border-accent-sage pl-4">
                                            <strong className="text-professional-navy">{item.title}:</strong>
                                            <p className="text-medium-gray text-sm mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">Laser Print Quality</h4>
                                <div className="space-y-3">
                                    {[
                                        { title: "Toner Issues", desc: "Shake toner cartridge gently, check toner level, replace defective cartridge." },
                                        { title: "Drum Unit Problems", desc: "Clean drum unit, replace when worn out (typically every 3-4 toner replacements)." },
                                        { title: "Fuser Assembly", desc: "Check for smudging or ghosting, may need professional service for replacement." }
                                    ].map((item, i) => (
                                        <div key={i} className="border-l-4 border-accent-sage pl-4">
                                            <strong className="text-professional-navy">{item.title}:</strong>
                                            <p className="text-medium-gray text-sm mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Error Codes */}
                    <div id="errors" className="mb-12">
                        <h3 className="text-2xl font-bold text-professional-navy mb-6 flex items-center">
                            <div className="bg-accent-teal text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                <i className="fas fa-exclamation-triangle text-sm"></i>
                            </div>
                            Common Error Codes by Brand
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* HP */}
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">HP Error Codes</h4>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { code: "50.2 Fuser Error", type: "Hardware", color: "text-accent-teal" },
                                        { code: "13.XX Paper Jam", type: "Mechanical", color: "text-medium-gray" },
                                        { code: "49.XX Firmware Error", type: "Software", color: "text-medium-gray" }
                                    ].map((err, i) => (
                                        <div key={i} className="flex justify-between">
                                            <span className="font-medium">{err.code}</span>
                                            <span className={err.color}>{err.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Brother */}
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">Brother Error Codes</h4>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { code: "Unable to Print 4F", type: "Printhead", color: "text-accent-teal" },
                                        { code: "Replace Toner", type: "Supply", color: "text-medium-gray" },
                                        { code: "Machine Error 46", type: "Waste Ink", color: "text-medium-gray" }
                                    ].map((err, i) => (
                                        <div key={i} className="flex justify-between">
                                            <span className="font-medium">{err.code}</span>
                                            <span className={err.color}>{err.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Canon */}
                            <div className="bg-white rounded-xl p-6 card-shadow">
                                <h4 className="text-lg font-bold text-professional-navy mb-4">Canon Error Codes</h4>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { code: "B200 Printhead Error", type: "Critical", color: "text-accent-teal" },
                                        { code: "5200/5B00 Waste Tank", type: "Maintenance", color: "text-medium-gray" },
                                        { code: "1403/1401 Cartridge", type: "Hardware", color: "text-medium-gray" }
                                    ].map((err, i) => (
                                        <div key={i} className="flex justify-between">
                                            <span className="font-medium">{err.code}</span>
                                            <span className={err.color}>{err.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Specific Resources */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-professional-navy text-center mb-12">Brand-Specific Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/support/hp" className="block bg-soft-blue rounded-xl p-6 card-shadow hover-lift">
                            <div className="flex items-center gap-4 mb-4">
                                <i className="fas fa-print text-2xl text-blue-600"></i>
                                <h3 className="font-bold text-lg text-professional-navy">HP Support</h3>
                            </div>
                            <p className="text-sm text-medium-gray mb-4">Specialized solutions for LaserJet, OfficeJet and Envy series.</p>
                            <span className="text-medium-blue font-semibold text-sm">View Guide →</span>
                        </Link>

                        <Link href="/support/brother" className="block bg-soft-blue rounded-xl p-6 card-shadow hover-lift">
                            <div className="flex items-center gap-4 mb-4">
                                <i className="fas fa-print text-2xl text-blue-800"></i>
                                <h3 className="font-bold text-lg text-professional-navy">Brother Support</h3>
                            </div>
                            <p className="text-sm text-medium-gray mb-4">Expert help for MFC, HL and DCP printer models.</p>
                            <span className="text-medium-blue font-semibold text-sm">View Guide →</span>
                        </Link>

                        <Link href="/support/canon" className="block bg-soft-blue rounded-xl p-6 card-shadow hover-lift">
                            <div className="flex items-center gap-4 mb-4">
                                <i className="fas fa-print text-2xl text-red-600"></i>
                                <h3 className="font-bold text-lg text-professional-navy">Canon Support</h3>
                            </div>
                            <p className="text-sm text-medium-gray mb-4">Technical assistance for PIXMA, MAXIFY and imageCLASS.</p>
                            <span className="text-medium-blue font-semibold text-sm">View Guide →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
