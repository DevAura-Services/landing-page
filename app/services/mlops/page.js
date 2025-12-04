import MLOpsClient from './MLOpsClient';

export const metadata = {
    title: 'MLOps & AI Services | Devaura',
    description: 'Bridge the gap between data science and operations with automated ML pipelines and scalable model serving. Expert MLOps services.',
    openGraph: {
        title: 'MLOps & AI Services | Devaura',
        description: 'Automated ML pipelines and scalable model serving for production AI systems.',
    }
};

export default function MLOpsPage() {
    return <MLOpsClient />;
}
