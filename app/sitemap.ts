import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.printertechnical.com'; // Replace with your actual domain

    const staticRoutes = [
        '',
        '/contact',
        '/driver-downloads',
        '/troubleshooting',
        '/other-brands',
        '/onsite',
        '/repair',
        '/privacy-policy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'date' as const, // 'daily' | 'weekly' | 'monthly' etc. But types expect specific strings or nothing. 'daily' is common.
        // simpler:
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const brands = ['hp', 'brother', 'canon', 'epson', 'xerox', 'lexmark'];
    const brandRoutes = brands.map((brand) => ({
        url: `${baseUrl}/support/${brand}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...brandRoutes];
}
