import { MetadataRoute } from 'next';

export default function sitemap() {
    const baseUrl = 'https://devaura.com';

    // Static pages
    const routes = [
        '',
        '/about',
        '/services',
        '/careers',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Job pages
    const jobs = [
        'devops-engineer',
        'mlops-engineer',
        'cloud-architect',
        'site-reliability-engineer',
        'devops-consultant',
        'backend-engineer',
    ].map((slug) => ({
        url: `${baseUrl}/careers/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...jobs];
}
