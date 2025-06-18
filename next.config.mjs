import nextra from 'nextra'

const withNextra = nextra({
    latex: true,
    search: {
        codeblocks: true
    },
})

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    optimizeFonts: true,
    headers: async () => {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "same-origin",
                    },
                ],
            },
        ];
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            { protocol: "https", hostname: "cdn.sanity.io" },
            { protocol: "https", hostname: "firebasestorage.googleapis.com" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "imagedelivery.net" },
            { protocol: "https", hostname: "cdn.statically.io" },
            { protocol: "https", hostname: "cdn.jsdelivr.net" },
            { protocol: "https", hostname: "storage.googleapis.com" },
            { protocol: "https", hostname: "www.facebook.com" },
            { protocol: "https", hostname: "www.getroamify.com" },
        ],
    },
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right",
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default withNextra({
    ...nextConfig,
})