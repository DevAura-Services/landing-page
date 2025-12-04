import HomeClient from './HomeClient';

export const metadata = {
    title: 'Devaura - DevOps, MLOps & Cloud Architecture Agency',
    description: 'Transform your business with expert DevOps, MLOps, and Cloud Architecture services. We help companies scale their infrastructure and automate workflows.',
    alternates: {
        canonical: 'https://devaura.com',
    },
}

export default function Home() {
    return <HomeClient />;
}
