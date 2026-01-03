import Image from 'next/image';

export default function TrustedBrands() {
    const brands = [
        { name: 'HP', logo: '/images/hp-logo.png' },
        { name: 'Brother', logo: '/images/brother-logo.png' },
        { name: 'Canon', logo: '/images/canon-logo.png' },
        { name: 'Epson', logo: '/images/epson-logo.png' },
        { name: 'Xerox', logo: '/images/xerox-logo.png' }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl text-gray-600 font-medium">
                        Trusted by leading brands and thousands of customers
                    </h2>
                </div>
                
                <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            <Image
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}