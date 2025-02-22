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