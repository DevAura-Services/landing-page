import CloudClient from './CloudClient';

export const metadata = {
    title: 'Cloud Architecture Services | Devaura',
    description: 'Design and migrate to cloud-native architectures that scale with your business. Expert AWS, Azure, and GCP cloud architecture services.',
    openGraph: {
        title: 'Cloud Architecture Services | Devaura',
        description: 'Design and migrate to cloud-native architectures that scale with your business.',
    }
};

export default function CloudPage() {
    return <CloudClient />;
}
