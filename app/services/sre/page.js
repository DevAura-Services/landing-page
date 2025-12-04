import SREClient from './SREClient';

export const metadata = {
    title: 'Site Reliability Engineering (SRE) | Devaura',
    description: 'Ensure your systems are reliable, scalable, and observable with our SRE practices. 24/7 monitoring and incident response.',
    openGraph: {
        title: 'Site Reliability Engineering (SRE) | Devaura',
        description: 'Expert SRE practices for reliable, scalable, and observable systems.',
    }
};

export default function SREPage() {
    return <SREClient />;
}
