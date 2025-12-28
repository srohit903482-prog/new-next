import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Printer Technical Support',
    description: 'Expert technical support for HP, Canon, Brother, Epson, and more. 24/7 assistance for all printer issues.',
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-soft-gray text-professional-navy p-6">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-lg text-medium-gray mb-8 text-center max-w-md">
                The page you are looking for does not exist or has been moved.
                Please check the URL or return to the homepage.
            </p>
            <a href="/" className="bg-professional-navy hover:bg-medium-blue text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                Return Home
            </a>
        </div>
    );
}
