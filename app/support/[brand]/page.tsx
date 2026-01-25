import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brandsData } from "@/app/lib/brands";

export function generateStaticParams() {
  return Object.keys(brandsData).map((slug) => ({
    brand: slug
  }));
}

export default function BrandSupportPage({ params }: { params: { brand: string } }) {
  const brand = brandsData[params.brand];

  if (!brand) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className={`bg-gradient-to-b ${brand.heroGradient} py-8 pb-16`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-6 inline-block bg-white p-4 rounded-xl shadow-sm">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
                {brand.fullName} Printer Support
              </h1>
              <p className="text-lg text-medium-gray mb-8 leading-relaxed">{brand.description}</p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-check-circle text-2xl" style={{ color: brand.color }}></i>
                  <span className="font-semibold text-gray-800 whitespace-nowrap">
                    Certified {brand.name} Technicians
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-clock text-2xl" style={{ color: brand.color }}></i>
                  <span className="font-semibold text-gray-800 whitespace-nowrap">
                    24/7 Support Available
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-tools text-2xl" style={{ color: brand.color }}></i>
                  <span className="font-semibold text-gray-800 whitespace-nowrap">
                    Remote & Onsite Service
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-shield-alt text-2xl" style={{ color: brand.color }}></i>
                  <span className="font-semibold text-gray-800 whitespace-nowrap">
                    Warranty-Compatible Repairs
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  style={{ backgroundColor: brand.color }}
                  href="tel:9034821319"
                  className={` text-white px-8 py-4 rounded-lg font-semibold hover:bg-professional-navy transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all`}
                >
                  <i className="fas fa-phone-alt mr-2"></i> Call Support
                </a>
                <Link
                  style={{
                    color: brand.color,
                    border: `2px solid ${brand.color}`,
                    borderRadius: "5px"
                  }}
                  href="/troubleshooting"
                  className="bg-white tet-medium-blue borde-2 borer-medium-blue px-8 py-4 rounded-lg hover:text-black hover:border-black font-semibold transition-colors text-center transform hover:-translate-y-1 transition-all"
                >
                  View Solutions
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
                <Image
                  src={brand.printerImage}
                  alt={`${brand.name} Printer`}
                  width={500}
                  height={400}
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-professional-navy mb-12">
            {/* Supported  {brand.name} Series */}
            {/* Get Expert Solutions for {brand.name} Printers */}
            {brand.name} Printer Series We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brand.series.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-md transition-shadow border border-light-gray"
              >
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill={brand.color} style={{opacity:1}}>
                    <path d="M24.57 12.125h-2.12c-.208-1.34-1.248-2.76-2.445-3.967c-1.277-1.24-2.654-2.234-3.784-2.37a2 2 0 0 0-.197-.015h-7.43a.45.45 0 0 0-.45.452v5.9H6.07a2 2 0 0 0-2 2V23h4.073v2.08a.45.45 0 0 0 .452.447h13.444c.117 0 .23-.045.317-.13s.138-.2.138-.318V23h4.074v-8.875a2 2 0 0 0-2-2zm-2.98 12.5H9.042V21.5H21.59v3.126zm0-10.704q.001-.045-.004-.095a.45.45 0 0 0-.124-.2H9.042v-6.95h6.988c.305-.018.567.283.77.972c.182.655.228 1.51.228 2.102c0 .432-.02.724-.02.724l-.036.478l.48.005c.002 0 1.11.014 2.196.26c1.044.226 1.86.675 1.938 1.184q.004.07.003.134v1.387z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-professional-navy mb-4">Our Services</h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">We provide comprehensive printer support to ensure your business operations run smoothly without technical interruptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-download text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Driver Installation</h3>
              <p className="text-gray-600 text-sm">Seamless installation of the latest printer drivers for all operating systems to ensure compatibility and performance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-sliders text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Configuration Support</h3>
              <p className="text-gray-600 text-sm">Tailored configuration of printer settings to match your specific business needs and workflow requirements.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-wrench text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hardware Repairs</h3>
              <p className="text-gray-600 text-sm">Expert diagnosis and repair of mechanical issues, from paper jams to replacing worn-out components.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-network-wired text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Network Setup</h3>
              <p className="text-gray-600 text-sm">Configuration of wired and wireless network connections, enabling secure sharing across your office.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-rotate text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Software Updates</h3>
              <p className="text-gray-600 text-sm">Regular firmware and software updates to patch security vulnerabilities and improve device functionality.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-bug-slash text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Error Resolution</h3>
              <p className="text-gray-600 text-sm">Fast troubleshooting and resolution of error codes, connectivity drops, and printing anomalies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-screwdriver-wrench text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Maintenance</h3>
              <p className="text-gray-600 text-sm">Routine preventive maintenance checks to clean and optimize your printers, extending their lifespan.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full opacity-20" fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M210.6665,76H196V40a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4V76H45.3335C33.57031,76,24,84.97168,24,96v80a4.0002,4.0002,0,0,0,4,4H60v40a4.0002,4.0002,0,0,0,4,4H192a4.0002,4.0002,0,0,0,4-4V180h32a4.0002,4.0002,0,0,0,4-4V96C232,84.97168,222.42969,76,210.6665,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4.0002,4.0002,0,0,0-4-4H64a4.0002,4.0002,0,0,0-4,4v20H32V96c0-6.61719,5.98145-12,13.3335-12h165.333C218.01855,84,224,89.38281,224,96Zm-27.99414-56a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,196.00586,116Z"/>
                </svg>
                <div className="absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center z-10" style={{ backgroundColor: brand.color }}>
                  <i className="fa-solid fa-shield-halved text-white text-xs"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Setup</h3>
              <p className="text-gray-600 text-sm">Implementation of user authentication, encryption, and access controls to protect sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Card Section */}

      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-professional-navy mb-12">
            {brand.name} Printer Series We Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: brand.color }}>
                <i className="fas fa-briefcase text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">LaserJet Series</h3>
              <p className="text-gray-600 mb-4">Professional laser printers for business environments including Pro, Enterprise, and Color LaserJet models.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Paper jam troubleshooting</li>
                <li>• Toner cartridge issues</li>
                <li>• Network connectivity setup</li>
                <li>• Print quality optimization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: brand.color }}>
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">OfficeJet Series</h3>
              <p className="text-gray-600 mb-4">All-in-one printers for home and small office with printing, scanning, copying, and faxing capabilities.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Scanner functionality issues</li>
                <li>• Ink cartridge installation</li>
                <li>• Wireless setup problems</li>
                <li>• Multifunction device errors</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: brand.color }}>
                <i className="fas fa-print text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">DeskJet Series</h3>
              <p className="text-gray-600 mb-4">Affordable inkjet printers for home use with reliable performance and easy maintenance.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Printhead cleaning</li>
                <li>• Driver installation</li>
                <li>• USB connectivity issues</li>
                <li>• Ink system failures</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Common Issues */}
      <section className="py-6 bg-soft-blue">
        {/* <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-professional-navy mb-12">
            Common {brand.name} Issues We Fix

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brand.commonIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#0096D6] text-2xl mb-6">
                  <i
                    style={{
                      color: brand.color,
                      border: `px solid ${brand.color}`
                    }}
                    className={`fas ${issue.icon}`}
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{issue.title}</h3>
                <p className="text-gray-600 mb-6">{issue.description}</p>
                <Link
                  href="/troubleshooting"
                  className="text-[#0096D6] font-semibold hover:text-professional-navy flex items-center"
                >
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        {/* Detailed Issues We Fix Section */}

        <div className="container mx-auto px-6 mt-16">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Common {brand.name} Printer Issues We Fix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.color }}>
                  <i className="fas fa-wifi text-white text-lg"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Connectivity Problems</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Wi-Fi setup issues, network drops, USB connection failures, and printer not found errors.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Wireless network configuration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>USB and Ethernet connectivity</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Mobile printing setup ({brand.name} Smart app)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.color }}>
                  <i className="fas fa-tint text-white text-lg"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Print Quality Issues</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Faded prints, streaks, smudges, wrong colors, and printhead alignment problems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Printhead cleaning and alignment</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Color calibration and settings</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Ink cartridge troubleshooting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.color }}>
                  <i className="fas fa-exclamation-triangle text-white text-lg"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Error Messages</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {brand.name} error codes, paper jams, ink system failures, and device status problems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Error code diagnosis and resolution</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Paper jam removal and prevention</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Firmware updates and reset procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.color }}>
                  <i className="fas fa-cog text-white text-lg"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Driver & Software</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Driver installation failures, software conflicts, and compatibility issues.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>{brand.name} driver installation and updates</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>{brand.name} Smart app setup and troubleshooting</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="fas fa-check mt-0.5 flex-shrink-0" style={{ color: brand.color }}></i>
                      <span>Operating system compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Our Support Section  */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-professional-navy mb-16">
            {/* Our {brand.name} Support Process */}
            Our Support Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${brand.color}20` }}>
                <i className="fas fa-phone text-2xl" style={{ color: brand.color }}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Contact Us</h3>
              <p className="text-gray-600">Call our support line or start a live chat with our {brand.name} specialists.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${brand.color}20` }}>
                <i className="fas fa-search text-2xl" style={{ color: brand.color }}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Diagnosis</h3>
              <p className="text-gray-600">Our technicians identify the root cause of your {brand.name} printer issue.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${brand.color}20` }}>
                <i className="fas fa-tools text-2xl" style={{ color: brand.color }}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Resolution</h3>
              <p className="text-gray-600">We provide step-by-step guidance or remote support to fix the issue.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${brand.color}20` }}>
                <i className="fas fa-check text-2xl" style={{ color: brand.color }}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">4. Verification</h3>
              <p className="text-gray-600">We ensure your {brand.name} printer is working perfectly before completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-professional-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Help with your {brand.name} Printer?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our certified technicians are ready to diagnose and fix your printer issues remotely or onsite.
          </p>
          <a
            style={{
              background: brand.color,
              border: `2px solid ${brand.color}`,
              borderRadius: "5px"
            }}
            href="tel:9034821319"
            className="inline-block  text-white text-xl font-bold px-8 py-2 rounded-full hover:bg-white hover:text-accent-teal transition-all transform hover:scale-105 shadow-lg"
          >
            Call 903-482-1319
          </a>
        </div>
      </section>
    </main>
  );
}
