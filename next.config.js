// next.config.js (en la raíz del proyecto)
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/devx83poh/**',
            },
        ],
    },
};

export default nextConfig;