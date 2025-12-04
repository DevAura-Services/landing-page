import ServicesClient from './ServicesClient';

export const metadata = {
    title: 'Our Services - DevOps, Cloud & MLOps | Devaura',
    description: 'Explore our comprehensive services including DevOps Transformation, Cloud Architecture, MLOps, SRE, and DevSecOps solutions.',
    openGraph: {
        title: 'Our Services - DevOps, Cloud & MLOps | Devaura',
        description: 'Explore our comprehensive services including DevOps Transformation, Cloud Architecture, MLOps, SRE, and DevSecOps solutions.',
    }
};

export default function ServicesPage() {
    return <ServicesClient />;
}
