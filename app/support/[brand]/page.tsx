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
      <section className={`bg-gradient-to-b ${brand.heroGradient} py-20`}>
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
            Supported {brand.name} Series
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brand.series.map((item, index) => (
              <div
                key={index}
                className="bg-soft-gray p-6 rounded-xl text-center hover:shadow-md transition-shadow border border-light-gray"
              >
                <i className="fas fa-print text-4xl text-medium-blue mb-4"></i>
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-soft-blue">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-professional-navy mb-12">
            Common {brand.name} Issues We Fix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brand.commonIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-medium-blue text-2xl mb-6">
                  <i className={`fas ${issue.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{issue.title}</h3>
                <p className="text-gray-600 mb-6">{issue.description}</p>
                <Link
                  href="/troubleshooting"
                  className="text-medium-blue font-semibold hover:text-professional-navy flex items-center"
                >
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            ))}
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
            href="tel:9034821319"
            className="inline-block bg-accent-teal text-white text-xl font-bold px-10 py-5 rounded-full hover:bg-white hover:text-accent-teal transition-all transform hover:scale-105 shadow-lg"
          >
            Call 903-482-1319
          </a>
        </div>
      </section>
    </main>
  );
}
