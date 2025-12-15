/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/landing-page",
    env: {
        NEXT_PUBLIC_BASE_PATH: "/landing-page",
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
