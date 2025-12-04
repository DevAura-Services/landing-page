import ContactClient from './ContactClient';

export const metadata = {
    title: 'Contact Us - Devaura | Get a Free Consultation',
    description: 'Ready to transform your infrastructure? Contact Devaura for a free consultation on DevOps, MLOps, and Cloud Architecture services.',
    alternates: {
        canonical: 'https://devaura.com/contact',
    },
}

export default function Contact() {
    return <ContactClient />;
}
