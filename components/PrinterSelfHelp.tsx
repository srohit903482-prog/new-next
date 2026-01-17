import React, { useState } from 'react';

type Brand = 'canon' | 'hp' | 'brother' | null;

interface FeatureCard {
  title: string;
  description: string;
}

const PrinterSelfHelp: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(null);

  const brandNames = {
    canon: 'Canon',
    hp: 'HP',
    brother: 'Brother'
  };

  const brandUrls = {
    canon: {
      support: 'https://www.usa.canon.com/support',
      supplies: 'https://shop.usa.canon.com/shop/en/catalog/printers-ink-toner',
      warranty: 'https://www.usa.canon.com/support'
    },
    hp: {
      support: 'https://support.hp.com/us-en',
      supplies: 'https://store.hp.com/us/en',
      warranty: 'https://support.hp.com/us-en/check-warranty'
    },
    brother: {
      support: 'https://www.brother-usa.com/support',
      supplies: 'https://www.brother-usa.com/products',
      warranty: 'https://www.brother-usa.com/support/warranty-information'
    }
  };

  const getBrandColors = (brand: Brand) => {
    switch (brand) {
      case 'canon': return { primary: 'red-700', secondary: 'red-800', border: 'border-red-700', text: 'text-red-700', bg: 'bg-red-700', hover: 'hover:bg-red-800' };
      case 'hp': return { primary: 'blue-500', secondary: 'blue-600', border: 'border-blue-500', text: 'text-blue-500', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' };
      case 'brother': return { primary: 'blue-700', secondary: 'blue-800', border: 'border-blue-700', text: 'text-blue-700', bg: 'bg-blue-700', hover: 'hover:bg-blue-800' };
      default: return { primary: 'gray-700', secondary: 'gray-800', border: 'border-gray-700', text: 'text-gray-700', bg: 'bg-gray-700', hover: 'hover:bg-gray-800' };
    }
  };

  const colors = getBrandColors(selectedBrand);

  const selectBrand = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  const renderBrandContent = () => {
    if (!selectedBrand) return null;

    const brand = selectedBrand;
    const urls = brandUrls[brand];
    const brandName = brandNames[brand];

    const getSupplies = () => {
      switch (brand) {
        case 'canon':
          return [
            'Canon genuine ink cartridges (CLI, PGI, BCI)',
            'Canon toner cartridges and drums',
            'Paper cassettes and trays',
            'Print heads and maintenance cartridges',
            'Power adapters and cables'
          ];
        case 'hp':
          return [
            'Original HP ink cartridges and toner',
            'Print heads and maintenance kits',
            'Paper trays and feed rollers',
            'Power cords and adapters',
            'Fusers and imaging units'
          ];
        case 'brother':
          return [
            'Brother genuine ink cartridges and toner',
            'Drum units and belt units',
            'Paper trays and feed rollers',
            'Fuser units and maintenance kits',
            'Consumables and accessories'
          ];
      }
    };

    const getIdentificationSteps = () => {
      switch (brand) {
        case 'canon':
          return [
            'Locate your model number on the front or top panel',
            'Check the product label on the back or bottom',
            'Use Canon\'s model lookup wizard',
            'Browse by product series (PIXMA, imageCLASS, MAXIFY, etc.)'
          ];
        case 'hp':
          return [
            'Locate your printer model number on the front or top panel',
            'Find the product name on the packaging or original receipt',
            'Use the HP Support Assistant app for automatic detection',
            'Enter your product name or number on HP\'s support website'
          ];
        case 'brother':
          return [
            'Locate your model number on the front panel or label',
            'Check the original packaging or purchase documentation',
            'Use Brother\'s model number lookup tool',
            'Search by product category and series'
          ];
      }
    };

    const getWarrantyCards = (): FeatureCard[] => {
      switch (brand) {
        case 'canon':
          return [
            { title: 'Limited Warranty', description: 'Check your standard warranty coverage' },
            { title: 'Canon CarePAK', description: 'View extended protection plans' },
            { title: 'Service Status', description: 'Track your repair and service requests' }
          ];
        case 'hp':
          return [
            { title: 'Standard Warranty', description: 'Check your base warranty coverage including parts and labor' },
            { title: 'Extended Care', description: 'View extended warranty and HP Care Pack options' },
            { title: 'Service History', description: 'Track past repairs and service requests' }
          ];
        case 'brother':
          return [
            { title: 'Standard Warranty', description: 'Check your base warranty including parts and labor' },
            { title: 'Extended Protection', description: 'View extended warranty options' },
            { title: 'Service Requests', description: 'Track active and past service requests' }
          ];
      }
    };

    return (
      <div className="block">
        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>🔍 {brandName} Printer Identification & Support</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Find Your {brandName} Printer Model</h3>
          <p className="mb-4">Identify your {brandName} printer model to access personalized support, drivers, and resources.</p>
          <ul className="list-none pl-0 mb-6">
            {getIdentificationSteps().map((step, index) => (
              <li key={index} className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>{step}</li>
            ))}
          </ul>
          <a href={urls.support} className={`inline-block ${colors.bg} text-white px-6 py-3 rounded-md font-semibold ${colors.hover} transition-colors`} target="_blank" rel="noopener noreferrer">
            Find My {brandName} Printer
          </a>
        </div>

        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>📋 {brandName} Warranty & Service Status</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Check your {brandName} warranty coverage instantly</h3>
          <p className="mb-6">Use your {brandName} product serial number to view warranty status, service eligibility, and support options.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {getWarrantyCards().map((card, index) => (
              <div key={index} className={`bg-gray-50 p-5 rounded-lg border-l-4 ${colors.border}`}>
                <h4 className={`${colors.text} font-semibold mb-3`}>{card.title}</h4>
                <p className="text-gray-600 m-0">{card.description}</p>
              </div>
            ))}
          </div>
          <a href={urls.warranty} className={`inline-block ${colors.bg} text-white px-6 py-3 rounded-md font-semibold ${colors.hover} transition-colors`} target="_blank" rel="noopener noreferrer">
            Check {brandName} Warranty
          </a>
        </div>

        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>🔧 Genuine {brandName} Supplies & Parts</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">{brand === 'canon' ? 'Premium' : brand === 'hp' ? 'Trusted' : 'Quality'} replacements designed for your device</h3>
          <p className="mb-4">Maintain {brand === 'canon' ? 'exceptional' : ''} print quality and reliability with genuine {brandName} replacement parts and supplies.</p>
          <ul className="list-none pl-0 mb-6">
            {getSupplies().map((supply, index) => (
              <li key={index} className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>{supply}</li>
            ))}
          </ul>
          <a href={urls.supplies} className={`inline-block ${colors.bg} text-white px-6 py-3 rounded-md font-semibold ${colors.hover} transition-colors`} target="_blank" rel="noopener noreferrer">
            {brandName} {brand === 'canon' ? 'Genuine Supplies' : brand === 'hp' ? 'Official Parts Store' : 'Supplies Store'}
          </a>
        </div>
      </div>
    );
  };

  const troubleshootingCards: FeatureCard[] = [
    { title: 'Print Quality Issues', description: 'Fix streaks, bands, and color problems' },
    { title: 'Connection Problems', description: 'Setup Wi-Fi, USB, and network printing' },
    { title: 'Paper Jams', description: 'Clear jams and prevent future issues' },
    { title: 'Error Codes', description: 'Understand and fix error messages' },
    { title: 'Wireless Setup', description: 'Configure mobile and cloud printing' },
    { title: 'Maintenance', description: 'Keep your printer in optimal condition' }
  ];

  const mobileCards: FeatureCard[] = [
    { title: 'AirPrint', description: 'Print directly from Apple devices' },
    { title: 'Mopria', description: 'Universal printing for Android' },
    { title: 'Cloud Printing', description: 'Print from cloud services' },
    { title: 'Mobile Apps', description: 'Brand-specific printing apps' }
  ];

  const driverCards: FeatureCard[] = [
    { title: 'Windows Drivers', description: 'Compatible drivers for all Windows versions' },
    { title: 'Mac Drivers', description: 'macOS compatible printer drivers' },
    { title: 'Firmware Updates', description: 'Latest security patches and improvements' },
    { title: 'Mobile Apps', description: 'Print from smartphones and tablets' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-gray-100 p-8 rounded-lg my-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to {selectedBrand ? `${brandNames[selectedBrand]} Printer` : 'Universal Printer'} Support</h2>
          <p className="text-gray-600">
            {selectedBrand 
              ? `Access essential tools and resources to keep your ${brandNames[selectedBrand]} printer performing at its best.`
              : 'Your one-stop destination for comprehensive printer support. Select your printer brand below to access personalized tools, resources, and official support for Canon, HP, and Brother printers.'
            }
          </p>
        </div>

        <div className="bg-gray-100 p-5 rounded-lg mb-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Select Your Printer Brand</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            {Object.entries(brandNames).map(([key, name]) => (
              <button
                key={key}
                className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg ${
                  key === 'canon' ? 'border-red-700 text-red-700 hover:bg-red-700 hover:text-white' :
                  key === 'hp' ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white' :
                  'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
                } ${selectedBrand === key ? (key === 'canon' ? 'bg-red-700 text-white' : key === 'hp' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white') : 'bg-white'}`}
                onClick={() => selectBrand(key as Brand)}
              >
                <span className="text-lg font-bold">{name}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedBrand && renderBrandContent()}

        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>📱 Drivers & Software Downloads</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Keep your printer secure and up to date</h3>
          <p className="mb-6">Download the latest manufacturer-approved drivers, firmware updates, and printer software tailored to your specific device and operating system.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {driverCards.map((card, index) => (
              <div key={index} className={`bg-gray-50 p-5 rounded-lg border-l-4 ${colors.border}`}>
                <h4 className={`${colors.text} font-semibold mb-3`}>{card.title}</h4>
                <p className="text-gray-600 m-0">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>🔧 Universal Troubleshooting & Help</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Resolve common printer issues</h3>
          <p className="mb-6">Access comprehensive troubleshooting resources to diagnose and fix common printer problems quickly.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {troubleshootingCards.map((card, index) => (
              <div key={index} className={`bg-gray-50 p-5 rounded-lg border-l-4 ${colors.border}`}>
                <h4 className={`${colors.text} font-semibold mb-3`}>{card.title}</h4>
                <p className="text-gray-600 m-0">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>📚 Manuals & Documentation</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Official documentation for setup and troubleshooting</h3>
          <p className="mb-6">Access manufacturer manuals and technical documents to help you set up, use, and maintain your printer.</p>
          
          <ul className="list-none pl-0">
            <li className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>User manuals and quick start guides</li>
            <li className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>Setup and installation instructions</li>
            <li className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>Network configuration guides</li>
            <li className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>Maintenance and service manuals</li>
            <li className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>Product specifications and technical data</li>
            <li className={`relative pl-6 mb-2 before:content-['✓'] before:absolute before:left-0 before:font-bold ${colors.text}`}>Safety and regulatory information</li>
          </ul>
        </div>

        <div className={`my-10 p-8 bg-white rounded-lg shadow-lg border-l-4 ${colors.border}`}>
          <h2 className={`text-2xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3 mb-5`}>📱 Mobile Printing & Cloud Services</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Print from anywhere with mobile solutions</h3>
          <p className="mb-6">Discover mobile printing apps and cloud service integration for convenient printing from your devices.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mobileCards.map((card, index) => (
              <div key={index} className={`bg-gray-50 p-5 rounded-lg border-l-4 ${colors.border}`}>
                <h4 className={`${colors.text} font-semibold mb-3`}>{card.title}</h4>
                <p className="text-gray-600 m-0">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default PrinterSelfHelp;