import Link from 'next/link';

export default function DriverDownloadsPage() {
    return (
        <main>
            <section className="section-padding bg-gradient-to-br from-soft-blue via-soft-white to-warm-gray">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">Printer Driver Downloads</h1>
                    <p className="text-xl text-medium-gray mb-8 max-w-3xl mx-auto">
                        Find and download the latest software and drivers for your printer. detailed installation instructions included.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-soft-blue p-8 rounded-xl border border-light-blue mb-12">
                        <h3 className="text-xl font-bold text-professional-navy mb-4"><i className="fas fa-info-circle text-[#0096D6] mr-2"></i>Important Note</h3>
                        <p className="text-medium-gray">
                            For the best stability and performance, we recommend using the drivers provided by your operating system (Windows/Mac) when available.
                            Only install full feature software packages if you need specific functionality like scanning to OCR or advanced color management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-light-gray rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-professional-navy mb-4">Official Manufacturer Sources</h3>
                            <p className="text-medium-gray mb-6">Always download drivers directly from the manufacturer to avoid malware.</p>

                            <ul className="space-y-4">
                                {[
                                    { name: "HP Drivers", url: "https://support.hp.com/us-en/drivers" },
                                    { name: "Brother Drivers", url: "https://support.brother.com/" },
                                    { name: "Canon Drivers", url: "https://www.usa.canon.com/support/software-and-drivers" },
                                    { name: "Epson Drivers", url: "https://epson.com/Support/sl/s" },
                                ].map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-soft-gray rounded-lg hover:bg-light-gray transition-colors">
                                            <span className="font-medium text-professional-navy">{link.name}</span>
                                            <i className="fas fa-external-link-alt text-[#0096D6]"></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border border-light-gray rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-professional-navy mb-4">Installation Help</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-accent-sage text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">1</div>
                                    <div>
                                        <strong className="block text-professional-navy">Identify your Model</strong>
                                        <p className="text-sm text-medium-gray">Look for the model number on the front or top of your printer.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-accent-sage text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">2</div>
                                    <div>
                                        <strong className="block text-professional-navy">Select OS</strong>
                                        <p className="text-sm text-medium-gray">Ensure you select the correct version of Windows or macOS.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-accent-sage text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">3</div>
                                    <div>
                                        <strong className="block text-professional-navy">Download & Network</strong>
                                        <p className="text-sm text-medium-gray">Download the "Recommended" driver. Have your Wi-Fi password ready.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-light-gray">
                                <p className="mb-4 text-sm font-medium text-professional-navy">Struggling with installation?</p>
                                <a href="tel:9034821319" className="block w-full text-center bg-professional-navy text-white py-3 rounded-lg hover:bg-medium-blue transition-colors">
                                    <i className="fas fa-phone mr-2"></i>Call for Remote Install Help
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
