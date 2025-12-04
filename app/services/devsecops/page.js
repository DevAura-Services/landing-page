import DevSecOpsClient from './DevSecOpsClient';

export const metadata = {
    title: 'DevSecOps Services | Devaura',
    description: 'Integrate security into every stage of your development lifecycle. Automated security scanning and compliance automation.',
    openGraph: {
        title: 'DevSecOps Services | Devaura',
        description: 'Security at the speed of code with integrated DevSecOps practices.',
    }
};

export default function DevSecOpsPage() {
    return <DevSecOpsClient />;
}
