/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.thecocktaildb.com'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.thecocktaildb.com',
                port: '',
                pathname: 'images/**'
            }
        ]
    }
}

module.exports = nextConfig;

