import Link from "next/link";
import Image from "next/image";
import TrustedBrands from "@/components/TrustedBrands";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import ProfessionalHelp from "@/components/ProfessionalHelp";
import PrinterSelection from "@/components/PrinterSelection";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
    <main>
      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-soft-blue via-soft-white to-warm-gray overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23000000'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="relative container mx-auto px-6 py-20 md:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-professional-navy mb-6 leading-tight">
              Professional Printer
              <br />
              <span className="text-[#0096D6]">Technical Support</span>
            </h1>
            <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto mb-12 leading-relaxed">
              Expert troubleshooting and technical solutions for HP, Brother, Canon, and all major printer
              brands. Certified technicians ready to resolve your printer issues quickly and professionally.
            </p>

            {/* Professional Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {/* Phone Support */}
              <div className="bg-white p-6 rounded-xl shadow-md card-shadow hover-lift text-center border-t-4 border-blue-600">
                <div className="h-16 flex items-center justify-center mb-4">
                  <Image
                    src="/images/hp-logo.png"
                    alt="HP"
                    width={150}
                    height={150}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">HP Support</h3>
                <p className="text-sm text-gray-600 mb-4">LaserJet, OfficeJet, DeskJet, Envy</p>
                <Link
                  href="/support/hp"
                  className="block w-full bg-medium-blue hover:bg-[#0096D6] text-white text-center py-3  rounded-lg font-semibold smooth-transition"
                >
                  Get Support
                </Link>
              </div>

              {/* Brother Card */}
              <div className="bg-white p-6 rounded-xl shadow-md card-shadow hover-lift text-center border-t-4 border-blue-800">
                <div className="h-16 flex items-center justify-center mb-4">
                  <Image
                    src="/images/brother-logo.png"
                    alt="Brother"
                    width={150}
                    height={150}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Brother Support</h3>
                <p className="text-sm text-gray-600 mb-4">MFC, HL, DCP, InkBenefit</p>
                <Link
                  href="/support/brother"
                  className="block w-full bg-medium-blue hover:bg-[#0D2EA0] text-white text-center py-3 rounded-lg font-semibold smooth-transition"
                >
                  Get Support
                </Link>
              </div>

              {/* Canon Card */}
              <div className="bg-white p-6 rounded-xl shadow-md card-shadow hover-lift text-center border-t-4 border-red-600">
                <div className="h-16 flex items-center justify-center mb-4">
                  <Image
                    src="/images/canon-logo.png"
                    alt="Canon"
                    width={150}
                    height={150}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Canon Support</h3>
                <p className="text-sm text-gray-600 mb-4">PIXMA, MAXIFY, imageCLASS</p>
                <Link
                  href="/support/canon"
                  className="block w-full bg-medium-blue hover:bg-[#CC0000] text-white text-center py-3 rounded-lg font-semibold smooth-transition"
                >
                  Get Support
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* Printer Solution Section  */}
      <PrinterSelection />

      {/* Remote Support Section */}
      <section id="remote" className="section-padding bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="rounded-2xl overflow-hidden card-shadow image-hover relative h-80 md:h-96">
              <Image
                src="/images/remote-technical-support.jpg"
                alt="Remote technical support"
                fill
                className="object-cover"
              />
            </div>
            {/* Content Column */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
                  Remote <span className="text-[#0096D6]">Technical Support</span>
                </h2>
                <p className="text-lg text-medium-gray leading-relaxed">
                  Get immediate assistance for your printer issues without leaving your home or office. Our
                  certified technicians provide secure remote connections to diagnose and resolve most printer
                  problems quickly and efficiently.
                </p>
              </div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Instant connection with certified technicians",
                  "Secure remote access with permission",
                  "Driver installation and configuration",
                  "Network setup and troubleshooting",
                  "Software conflicts resolution",
                  "Print quality adjustments and calibration"
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg card-shadow">
                    <div className="bg-accent-teal text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-professional-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
              {/* How it works */}
              <div className="bg-light-blue p-6 rounded-xl mb-8">
                <h3 className="font-semibold text-professional-navy mb-3">How it works:</h3>
                <p className="text-medium-gray">
                  Call our support line, and our technician will guide you through a simple process to
                  establish a secure remote connection. We'll then diagnose and fix your printer issues in
                  real-time.
                </p>
              </div>
              <a
                href="tel:9034821319"
                className="inline-flex items-center gap-4 bg-medium-blue whitespace-nowrap text-sm hover:bg-professional-navy text-white px-8 py-4 rounded-xl font-semibold hover-lift floating-action"
              >
                <i className="fas fa-laptop"></i> Start Remote Support: 903-482-1319
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Onsite Technician Section */}
      <section id="onsite" className="section-padding bg-warm-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="rounded-2xl overflow-hidden card-shadow image-hover order-2 lg:order-1 relative h-80 md:h-96">
              <Image
                src="/images/onsite-technician-service.jpg"
                alt="Technician fixing printer"
                fill
                className="object-cover"
              />
            </div>
            {/* Content Column */}
            <div className="order-2 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
                  Onsite <span className="text-accent-sage">Technician Service</span>
                </h2>
                <p className="text-lg text-medium-gray leading-relaxed">
                  When remote solutions aren't enough, our certified technicians come to your location for
                  comprehensive on-site diagnosis and repair. Professional, reliable service for all major
                  printer brands.
                </p>
              </div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "fas fa-clock", text: "Same-day service available in most areas" },
                  { icon: "fas fa-certificate", text: "Certified technicians for all major brands" },
                  { icon: "fas fa-search", text: "Comprehensive diagnosis and repair" },
                  { icon: "fas fa-tools", text: "Genuine parts and supplies" },
                  { icon: "fas fa-dollar-sign", text: "Fixed pricing with no hidden fees" },
                  { icon: "fas fa-shield-alt", text: "Service warranty on all repairs" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg card-shadow">
                    <div className="bg-accent-sage text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className={`${item.icon} text-sm`}></i>
                    </div>
                    <span className="text-professional-navy font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              {/* Service Areas */}
              <div className="bg-light-gray p-6 rounded-xl mb-8">
                <h3 className="font-semibold text-professional-navy mb-3">Service Areas:</h3>
                <p className="text-medium-gray">
                  We provide onsite technician services in all major metropolitan areas. Contact us to check
                  availability in your location.
                </p>
              </div>
              <Link
                href="/onsite"
                className="inline-flex items-center gap-4 bg-accent-sage hover:text-white whitespace-nowrap text-sm hover:bg-professional-navy text-professional-navy px-8 py-4 rounded-xl font-semibold hover-lift floating-action border-2 border-accent-sage"
              >
                <i className="fas fa-calendar-check"></i> Book Onsite Technician: 903-482-1319
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Brands Section */}
      <section id="brands" className="section-padding bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
              Supported Printer Brands
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Professional technical support for all major printer manufacturers
            </p>
          </div>

          {/* Primary Brands */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* HP Brand Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow brand-card-hover border border-light-gray flex flex-col h-full">
              <div className="p-8 bg-gradient-to-br from-soft-blue to-white flex flex-col items-center">
                <div className="relative w-16 h-16 mb-2">
                  <Image src="/images/hp-logo.png" alt="HP Logo" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-professional-navy mb-4">HP Printers</h3>
                <div className="relative w-64 h-48">
                  <Image src="/images/hp-printer.png" alt="HP Printer" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-medium-gray mb-6">
                  Complete support for LaserJet, OfficeJet, DeskJet, and Envy series printers.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Driver installation & updates",
                    "Wi-Fi & USB connectivity",
                    "Print quality optimization"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <i className="fas fa-check-circle text-accent-teal mr-3"></i> <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/support/hp"
                  className="block w-full bg-medium-blue hover:bg-[#024AD8] text-white text-center py-3 rounded-lg font-semibold smooth-transition mt-auto"
                >
                  View HP Support →
                </Link>
              </div>
            </div>

            {/* Brother Brand Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow brand-card-hover border border-light-gray flex flex-col h-full">
              <div className="p-8 bg-gradient-to-br from-warm-gray to-white flex flex-col items-center">
                <div className="relative w-48 h-16 mb-2">
                  <Image src="/images/brother-logo.png" alt="Brother Logo" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-professional-navy mb-4">Brother Printers</h3>
                <div className="relative w-64 h-48">
                  <Image
                    src="/images/brother-printer.png"
                    alt="Brother Printer"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-medium-gray mb-6">
                  Expert support for Brother all-in-ones, label makers, and business printers.
                </p>
                <div className="space-y-3 mb-6">
                  {["Scanner functionality issues", "Error code resolution", "Network configuration"].map(
                    (item, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <i className="fas fa-check-circle text-accent-sage mr-3"></i> <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
                <Link
                  href="/support/brother"
                  className="block w-full bg-accent-sage hover:bg-[#0D2EA0] text-white text-center py-3 rounded-lg font-semibold smooth-transition mt-auto"
                >
                  View Brother Support →
                </Link>
              </div>
            </div>

            {/* Canon Brand Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow brand-card-hover border border-light-gray flex flex-col h-full">
              <div className="p-8 bg-gradient-to-br from-light-gray to-white flex flex-col items-center">
                <div className="relative w-48 h-16 mb-2">
                  <Image src="/images/canon-logo.png" alt="Canon Logo" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-professional-navy mb-4">Canon Printers</h3>
                <div className="relative w-64 h-48">
                  <Image
                    src="/images/canon-printer.png"
                    alt="Canon Printer"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-medium-gray mb-6">
                  Specialized support for PIXMA, imagePROGRAF, and SELPHY printers.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Photo printing optimization",
                    "Wireless printing setup",
                    "Mobile printing solutions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <i className="fas fa-check-circle text-[#0096D6] mr-3"></i> <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/support/canon"
                  className="block w-full bg-medium-blue hover:bg-[#CC0000] text-white text-center py-3 rounded-lg font-semibold smooth-transition mt-auto"
                >
                  View Canon Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="troubleshooting" className="section-padding bg-warm-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
              Common Printer Problems &amp; Solutions
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Quick guides to resolve the most frequent printer issues
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Connectivity Issues */}
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift border border-light-gray">
              <div className="bg-medium-blue text-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-wifi text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-professional-navy mb-4">Connectivity Issues</h3>
              <p className="text-medium-gray mb-6">
                Wi-Fi, USB, or network connection problems? We provide step-by-step guides to restore your
                printer connection.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Router settings and network configuration",
                  "Network drivers and firmware updates",
                  "Network settings reset procedures"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <i className="fas fa-chevron-right text-accent-teal mr-3 mt-1 text-sm"></i>{" "}
                    <span className="text-professional-navy">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/troubleshooting"
                className="inline-flex items-center justify-center gap-2 w-full bg-professional-navy hover:bg-medium-blue text-white py-3 rounded-lg font-semibold smooth-transition"
              >
                Get Connectivity Help →
              </Link>
            </div>

            {/* Ink & Toner Problems */}
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift border border-light-gray">
              <div className="bg-accent-sage text-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tint text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-professional-navy mb-4">Ink &amp; Toner Problems</h3>
              <p className="text-medium-gray mb-6">
                Print quality issues, clogged nozzles, or cartridge errors? Learn proper maintenance for
                optimal performance.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Print head cleaning and nozzle checks",
                  "Compatible cartridge identification",
                  "Cartridge chip reset procedures"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <i className="fas fa-chevron-right text-[#0096D6] mr-3 mt-1 text-sm"></i>{" "}
                    <span className="text-professional-navy">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/troubleshooting#ink"
                className="inline-flex items-center justify-center gap-2 w-full bg-professional-navy hover:bg-medium-blue text-white py-3 rounded-lg font-semibold smooth-transition"
              >
                Solve Ink Issues →
              </Link>
            </div>

            {/* Error Messages & Codes */}
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift border border-light-gray">
              <div className="bg-accent-teal text-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-exclamation-triangle text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-professional-navy mb-4">Error Messages &amp; Codes</h3>
              <p className="text-medium-gray mb-6">
                Decipher and resolve common error codes for all major printer brands. Technical fixes for
                frequent issues.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Paper jam solutions and sensor resets",
                  "Memory errors and firmware issues",
                  "Hardware malfunction diagnostics"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <i className="fas fa-chevron-right text-accent-sage mr-3 mt-1 text-sm"></i>{" "}
                    <span className="text-professional-navy">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/troubleshooting#errors"
                className="inline-flex items-center justify-center gap-2 w-full bg-professional-navy hover:bg-medium-blue text-white py-3 rounded-lg font-semibold smooth-transition"
              >
                Fix Error Codes →
              </Link>
            </div>

            {/* Driver & Software Issues */}

            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift border border-light-gray">
              <div className="bg-medium-blue text-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-professional-navy mb-4">Driver &amp; Software Issues</h3>
              <p className="text-medium-gray mb-6">
                Driver installation problems, compatibility issues, or software conflicts? Get the right
                drivers and instructions.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Latest drivers for your operating system",
                  "Clean software installation procedures",
                  "Compatibility mode for older printers"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <i className="fas fa-chevron-right text-accent-teal mr-3 mt-1 text-sm"></i>{" "}
                    <span className="text-professional-navy">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/driver-downloads"
                className="inline-flex items-center justify-center gap-2 w-full bg-professional-navy hover:bg-medium-blue text-white py-3 rounded-lg font-semibold smooth-transition"
              >
                Driver Downloads →
              </Link>
            </div>
          </div>
        </div>
        {/* <TrustedBrands/> */}
        <CustomerTestimonials />
        <ProfessionalHelp />
      </section>
    </main>
  );
}
