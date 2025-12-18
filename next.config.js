/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: "",
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
