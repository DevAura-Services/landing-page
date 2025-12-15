import JobDetailClient from './JobDetailClient';
import { jobData } from '@/lib/jobData';

export async function generateMetadata({ params }) {
    const job = jobData.find(j => j.slug === params.slug);

    if (!job) {
        return {
            title: 'Job Not Found | Devaura',
        };
    }

    return {
        title: `${job.title} - Careers | Devaura`,
        description: job.description,
        openGraph: {
            title: `${job.title} - Careers | Devaura`,
            description: job.description,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${job.title} - Careers | Devaura`,
            description: job.description,
        }
    };
}

export async function generateStaticParams() {
    return jobData.map((job) => ({
        slug: job.slug,
    }));
}

export default function JobDetailPage({ params }) {
    return <JobDetailClient slug={params.slug} />;
}
