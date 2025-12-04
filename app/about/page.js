import AboutClient from './AboutClient';

export const metadata = {
    title: 'About Us - Devaura | DevOps & MLOps Experts',
    description: 'Learn about Devaura\'s mission to empower businesses through innovative DevOps and MLOps solutions. Meet our team of expert engineers and architects.',
    alternates: {
        canonical: 'https://devaura.com/about',
    },
}

export default function About() {
    return <AboutClient />;
}
