import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-soft-white border-b border-light-gray sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-opacity-95">
            <div className="container mx-auto px-6 py-4">
                <nav className="flex justify-between items-center">
                    {/* Logo / Title */}
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-professional-navy">
                        <div className="bg-medium-blue text-white p-2 rounded-lg">
                            <i className="fas fa-print"></i>
                        </div>
                        <Link href="/" className="hover:text-medium-blue transition-colors">
                            Printer Technical Support
                        </Link>
                    </div>
                    {/* Call Button */}
                    <a href="tel:9034821319" className="bg-gray-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                        <i className="fas fa-phone mr-2"></i>903-482-1319
                    </a>
                </nav>
            </div>
        </header>
    );
}
