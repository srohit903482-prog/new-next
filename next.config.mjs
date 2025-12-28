/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/hp-support',
                destination: '/support/hp',
                permanent: true,
            },
            {
                source: '/brother-support',
                destination: '/support/brother',
                permanent: true,
            },
            {
                source: '/canon-support',
                destination: '/support/canon',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
