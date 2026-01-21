import React from 'react';
import Image from 'next/image';

const services = [
  {
    icon: '/images/compatible-printers.png',
    title: 'Compatible Printers',
    description: 'Full support for all printer makes and models'
  },
  {
    icon: '/images/wireless-printer.png',
    title: 'Wireless Printer',
    description: 'Setup and configuration for wireless printing'
  },
  {
    icon: '/images/printer-setup-install.png',
    title: 'Printer Setup & Install',
    description: 'Professional installation and configuration'
  },
  {
    icon: '/images/ink-issue.png',
    title: 'Ink Issue',
    description: 'Ink cartridge problems and solutions'
  },
  {
    icon: '/images/copiers-scanners.png',
    title: 'Copiers & Scanners',
    description: 'Multi-function device support and repair'
  },
  {
    icon: '/images/fax-machine.png',
    title: 'Fax Machines',
    description: 'Fax setup, configuration and troubleshooting'
  },
  {
    icon: '/images/e-print-services.png',
    title: 'E-Print Services',
    description: 'Cloud and mobile printing solutions'
  },
  {
    icon: '/images/ink-toner-compatibility.png',
    title: 'Ink & Toner Compatibility',
    description: 'Expert advice on ink and toner options'
  }
];

export default function PrinterSelection() {
  return (
    <section className="pt-16 px-4 bg-w-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Get Expert Solutions </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-${index % 2 === 0 ? 'gray-10' : 'gray-10'} } rounded-lg p-6 text-center shadow-md hover:shadow-2xl transition-shadow`}
            >
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="w-24 h-24 z-10"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
