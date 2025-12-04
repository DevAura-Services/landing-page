import CareersClient from './CareersClient';

export const metadata = {
    title: 'Careers - Join Our Team | Devaura',
    description: 'Join Devaura and build your career in DevOps, MLOps, and Cloud Architecture. Explore our open positions and work on innovative projects.',
    openGraph: {
        title: 'Careers - Join Our Team | Devaura',
        description: 'Join Devaura and build your career in DevOps, MLOps, and Cloud Architecture.',
    }
};

export default function CareersPage() {
    return <CareersClient />;
}
