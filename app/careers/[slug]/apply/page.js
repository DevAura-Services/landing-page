import ApplyClient from './ApplyClient';
import { jobData } from '@/lib/jobData';

/*
export async function generateMetadata({ params }) {
    const job = jobData.find(j => j.slug === params.slug);

    if (!job) {
        return {
            title: 'Job Not Found | Devaura',
        };
    }

    return {
        title: `Apply for ${job.title} | Devaura Careers`,
        description: `Submit your application for the ${job.title} position at Devaura.`,
    };
}
*/

export async function generateStaticParams() {
    return jobData.map((job) => ({
        slug: job.slug,
    }));
}

export default function ApplyPage({ params }) {
    return <ApplyClient slug={params.slug} />;
}
