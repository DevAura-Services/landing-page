/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/landing-page",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: "/landing-page",
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
