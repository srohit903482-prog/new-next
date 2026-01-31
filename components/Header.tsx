'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const brand = pathname.split('/')[2];
    
    const getBrandColors = () => {
        switch(brand) {
            case 'hp': return 'bg-[#0096D6] hover:bg-[#0096D6]';
            case 'brother': return 'bg-[#0D2EA0] hover:bg-[#0D2EA0]';
            case 'canon': return 'bg-red-600 hover:bg-red-700';
            default: return 'bg-[rgb(0,150,214)] hover:bg-sky-400';
        }
    };
    
    return (
        <header className="bg-soft-white border-b border-light-gray sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-opacity-95">
            <div className="container mx-auto px-6 sm:px-2">
                <nav className="flex justify-between items-center">
                    {/* Logo / Title */}
                    <Link href="/" className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-professional-navy hover:opacity-80 transition-opacity">
                        <div className="p-2 rounded-lg">
                            <img src="/images/web-logo.png" alt="Printer Technical Support" className="w-12 h-12 md:w-20 md:h-20" />
                        </div>
                        <h1 className="hover:text-[#0096D6] text-lg md:text-2xl whitespace-nowrap transition-colors hidden md:block font-serif">
                            PrintDesk Support
                        </h1>
                    </Link>
                    {/* Call Button */}
                    <a href="tel:9034821319" className={`${getBrandColors()} text-white text-xs md:text-sm px-2 py-1.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg`}>
                        <i className="fas fa-phone mr-2"></i>903-482-1319
                    </a>
                </nav>
            </div>
        </header>
    );
}
