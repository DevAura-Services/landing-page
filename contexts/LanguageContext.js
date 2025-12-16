'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            careers: 'Careers',
            contact: 'Contact Us',
            schedule: 'Schedule Consultation'
        },
        hero: {
            title: 'Future-Proof Your',
            titleHighlight: 'Infrastructure with Devaura',
            description: 'We provide expert DevOps and MLOps solutions to streamline your development lifecycle and accelerate innovation.',
            scheduleBtn: 'Schedule Consultation',
            learnBtn: 'Learn More'
        },
        story: {
            title: 'The Complexity Trap',
            subtitle: 'When Scale Becomes a Struggle',
            stages: {
                challenge: {
                    number: '01',
                    title: 'Modern Systems are Hard',
                    description: 'It starts small. But as you scale, your infrastructure morphs into a tangled web of dependencies. Deployments become stressful events. Downtime isn\'t an "if", it\'s a "when". Your team spends more time fighting fires than building features.',
                    points: ['Fragile Dependencies', 'Deployment Anxiety', 'Hidden Costs', 'Security Blindspots']
                },
                guide: {
                    number: '02',
                    title: 'Expert Architectural Guidance',
                    description: 'We don\'t just patch holes; we re-architect alongside you. Our experts audit your entire stack, identifying bottlenecks and risks. We turn chaos into order using Infrastructure as Code, ensuring every environment is predictable.',
                    points: ['Deep-Dive Audits', 'Infrastructure as Code', 'Chaos Engineering', 'Zero-Trust Security']
                },
                transformation: {
                    number: '03',
                    title: 'Operational Excellence',
                    description: 'Imagine deploying 10 times a day with zero stress. Your systems auto-scale to meet demand and self-heal when components fail. This isn\'t a pipe dream—it\'s the standard we build for every client.',
                    points: ['99.99% Uptime', 'Automated Scalability', 'Self-Healing Systems', 'Rapid Innovation']
                }
            }
        },
        techMarquee: {
            title: 'Core Technologies',
            description: 'We leverage a modern stack of leading technologies to build robust and scalable solutions for our clients.'
        },
        services: {
            title: 'Why Choose Us',
            carouselTitle: 'Our Services',
            subtitle: 'Comprehensive DevOps & MLOps Solutions',
            description: 'We provide expert DevOps and MLOps solutions to streamline your development lifecycle and accelerate innovation.',
            talent: {
                title: 'Top-Tier Talent',
                desc: 'Access a growing pool of highly skilled, multilingual engineers.'
            },
            cost: {
                title: 'Cost-Effectiveness',
                desc: 'Benefit from competitive operational costs without compromising quality.'
            },
            location: {
                title: 'Strategic Location',
                desc: 'Ideal time zone alignment for seamless collaboration.'
            },
            ecosystem: {
                title: 'Thriving Ecosystem',
                desc: 'A supportive environment with government incentives and innovation hubs.'
            },
            pillars: {
                devops: {
                    title: 'DevOps Transformation',
                    tagline: 'Streamline your delivery pipeline',
                    desc: 'Accelerate your software delivery with robust CI/CD pipelines, Infrastructure as Code, and container orchestration.',
                    features: ['CI/CD Pipeline Automation', 'Infrastructure as Code (IaC)', 'Kubernetes & Docker', 'GitOps Implementation']
                },
                cloud: {
                    title: 'Cloud Architecture',
                    tagline: 'Scalable, secure, and cost-effective',
                    desc: 'Design and migrate to cloud-native architectures that scale with your business while optimizing costs.',
                    features: ['Cloud Migration (AWS/Azure/GCP)', 'Serverless Architecture', 'FinOps & Cost Optimization', 'Multi-Cloud Strategy']
                },
                mlops: {
                    title: 'MLOps & AI',
                    tagline: 'From model to production, faster',
                    desc: 'Bridge the gap between data science and operations with automated ML pipelines and scalable model serving.',
                    features: ['Automated ML Pipelines', 'Model Serving & Monitoring', 'Feature Stores', 'GPU Cluster Management']
                },
                sre: {
                    title: 'Site Reliability Engineering',
                    tagline: 'Guaranteed uptime and performance',
                    desc: 'Ensure your systems are reliable, scalable, and observable with our SRE practices.',
                    features: ['24/7 Monitoring & Alerting', 'Incident Response', 'SLO/SLI Definition', 'Performance Tuning']
                },
                security: {
                    title: 'DevSecOps',
                    tagline: 'Security at the speed of code',
                    desc: 'Integrate security into every stage of your development lifecycle without slowing down delivery.',
                    features: ['Automated Security Scanning', 'Compliance Automation', 'Secrets Management', 'Vulnerability Assessment']
                }
            }
        },
        application: {
            title: 'Apply for',
            personalInfo: 'Personal Information',
            fullName: 'Full Name',
            email: 'Email Address',
            phone: 'Phone Number',
            linkedin: 'LinkedIn Profile URL',
            portfolio: 'Portfolio / GitHub URL',
            experience: 'Experience',
            yearsExp: 'Years of Experience',
            currentCompany: 'Current Company (Optional)',
            noticePeriod: 'Notice Period',
            resume: 'Resume / CV',
            coverLetter: 'Cover Letter (Optional)',
            whyFit: 'Why are you a good fit for this role?',
            submit: 'Submit Application',
            successTitle: 'Application Submitted!',
            successMsg: 'Thank you for applying. We will review your application and get back to you soon.',
            backToJobs: 'Back to Jobs'
        },
        cta: {
            title: 'Ready to Leverage Our Talent?',
            description: 'Let Devaura connect you with the best DevOps and MLOps engineers to scale your operations.',
            button: 'Start a Project with Our Talent'
        },
        footer: {
            description: 'DevAura specializes in DevOps Transformation, Cloud Architecture, and MLOps solutions to streamline your development lifecycle.',
            company: 'Company',
            aboutUs: 'About Us',
            services: 'Services',
            careers: 'Careers',
            resources: 'Resources',
            blog: 'Blog',
            caseStudies: 'Case Studies',
            contact: 'Contact',
            connect: 'Connect',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            rights: '© 2024 Devaura. All rights reserved.'
        },
        contact: {
            title: 'Let\'s Build Together',
            description: 'Whether you have a question about our services or want to discuss a project, we\'re ready to help.',
            scheduleTitle: 'Schedule a Free Consultation',
            scheduleDesc: 'Schedule a free 30-minute call with our DevOps experts to discuss your specific needs.',
            scheduleBtn: 'Schedule Now',
            otherWays: 'Other Ways to Connect',
            otherDesc: 'Reach out to us directly or follow our journey on social media.',
            formTitle: 'Send Us a Message',
            name: 'Your Name',
            namePlaceholder: 'Enter your full name',
            company: 'Company',
            companyPlaceholder: 'Enter your company name',
            email: 'Work Email',
            emailPlaceholder: 'Enter your work email',
            inquiryType: 'Inquiry Type',
            message: 'Message',
            messagePlaceholder: 'How can we help?',
            sendBtn: 'Send Message',
            inquiryTypes: {
                general: 'General Inquiry',
                project: 'Project Proposal',
                partnership: 'Partnership',
                careers: 'Careers'
            }
        },
        about: {
            title: 'About Devaura',
            intro: 'Devaura is a premier DevOps and MLOps agency dedicated to helping businesses modernize their infrastructure and accelerate their development pipelines.',
            mission: 'Our Mission',
            missionText: 'To bridge the gap between complex infrastructure challenges and seamless operational excellence. We believe in automation, scalability, and security as the pillars of modern software delivery.',
            vision: 'Our Vision',
            visionText: 'To be the global partner of choice for companies looking to leverage the best engineering talent, fostering a culture of innovation and continuous improvement.',
            whyChoose: 'Why Choose Us?',
            reasons: [
                'Expertise in Cloud Native Technologies',
                'Proven Track Record in DevOps Transformation',
                'Dedicated MLOps Solutions',
                '24/7 Support and Monitoring',
                'Cost-Effective Scaling Strategies'
            ],
            stats: [
                { label: 'Projects Delivered', value: '50+' },
                { label: 'Uptime Guaranteed', value: '99.99%' },
                { label: 'Team Members', value: '20+' }
            ],
            process: {
                title: 'How We Work',
                steps: [
                    { title: 'Discovery', desc: 'We analyze your current infrastructure and business goals.' },
                    { title: 'Architecture', desc: 'We design a scalable, secure, and cost-effective solution.' },
                    { title: 'Implementation', desc: 'We build and potentialy migrate your systems with zero downtime.' },
                    { title: 'Optimization', desc: 'We continuously monitor and improve your stack.' }
                ]
            },
            team: {
                title: 'Our Leadership',
                members: [
                    {
                        name: 'Kmar Turki',
                        role: 'Co-Founder',
                        linkedin: 'https://www.linkedin.com/in/kmar-turki-59b687305/'
                    },
                    {
                        name: 'Mahdi Ben Slima',
                        role: 'Co-Founder',
                        linkedin: 'https://www.linkedin.com/in/benslimamahdi/'
                    }
                ]
            }
        },
        cookie: {
            title: 'We use cookies',
            description: 'We use cookies to enhance your browsing experience and analyze our traffic.',
            accept: 'Accept',
            decline: 'Decline',
            learnMore: 'Learn More',
            acceptAll: 'Accept All'
        },
        chatbot: {
            greeting: 'Hi there! 👋 How can I help you with your DevOps needs today?',
            response: 'Thanks for reaching out! Our team will get back to you shortly. In the meantime, feel free to check out our services page.',
            placeholder: 'Type a message...',
            assistant: 'Devaura Assistant',
            online: 'Online'
        },
        careers: {
            title: 'Join Our Team',
            subtitle: 'Build your career with Devaura and shape the future of DevOps and MLOps',
            whyJoin: 'Why Join Devaura?',
            benefits: {
                innovative: {
                    title: 'Innovative Projects',
                    desc: 'Work on cutting-edge DevOps and MLOps projects with leading global companies'
                },
                learning: {
                    title: 'Continuous Learning',
                    desc: 'Access to certifications, training programs, and the latest technologies'
                },
                exposure: {
                    title: 'Global Exposure',
                    desc: 'Collaborate with international clients and work on impactful solutions'
                },
                balance: {
                    title: 'Work-Life Balance',
                    desc: 'Flexible working arrangements and a supportive, inclusive culture'
                }
            },
            openPositions: 'Open Positions',
            applyBtn: 'Apply Now',
            location: 'Location',
            remote: 'Remote',
            aboutRole: 'About the Role',
            keyResponsibilities: 'Key Responsibilities',
            requiredQualifications: 'Required Qualifications',
            niceToHave: 'Nice to Have',
            whatWeOffer: 'What We Offer',
            requiredSkills: 'Required Skills',
            jobs: [
                {
                    slug: 'devops-engineer',
                    title: 'DevOps Engineer',
                    description: 'Build and maintain CI/CD pipelines, manage Kubernetes clusters, and implement infrastructure as code.',
                    aboutRole: 'Join our infrastructure team to build and maintain robust CI/CD pipelines, manage Kubernetes clusters, and implement infrastructure as code. You will play a crucial role in ensuring our systems are scalable, reliable, and secure.',
                    responsibilities: [
                        'Design, implement, and maintain CI/CD pipelines using GitLab CI, Jenkins, or GitHub Actions',
                        'Manage and optimize Kubernetes clusters for production workloads',
                        'Implement infrastructure as code using Terraform or CloudFormation',
                        'Monitor system performance and implement alerting solutions',
                        'Ensure security best practices across all infrastructure components',
                        'Collaborate with development teams to improve deployment processes',
                        'Automate repetitive tasks and improve operational efficiency'
                    ],
                    qualifications: [
                        'Bachelor\'s degree in Computer Science, Engineering, or related field',
                        '3-5 years of experience in DevOps or Site Reliability Engineering',
                        'Strong experience with Kubernetes and container orchestration',
                        'Proficiency in at least one scripting language (Python, Bash, Go)',
                        'Experience with infrastructure as code tools (Terraform, Ansible)',
                        'Knowledge of cloud platforms (AWS, Azure, or GCP)',
                        'Understanding of networking, security, and system administration'
                    ],
                    niceToHave: [
                        'Certifications (CKA, AWS Solutions Architect, etc.)',
                        'Experience with monitoring tools (Prometheus, Grafana, ELK)',
                        'Knowledge of service mesh technologies (Istio, Linkerd)',
                        'Experience with GitOps practices',
                        'Familiarity with security scanning and compliance tools'
                    ],
                    benefits: [
                        'Competitive salary with annual reviews',
                        'Health insurance coverage',
                        'Flexible working hours and remote options',
                        'Training and certification budget',
                        'Modern office environment',
                        'Career growth opportunities'
                    ]
                },
                {
                    slug: 'mlops-engineer',
                    title: 'MLOps Engineer',
                    description: 'Design and deploy ML pipelines, manage model lifecycle, and ensure scalable ML infrastructure.',
                    aboutRole: 'Join our ML team to design, build, and maintain production ML pipelines. You will work closely with data scientists to deploy, monitor, and scale machine learning models in production environments.',
                    responsibilities: [
                        'Build and maintain ML pipelines for model training and deployment',
                        'Implement MLOps best practices and workflows',
                        'Monitor model performance and detect drift',
                        'Automate model retraining and deployment processes',
                        'Manage ML infrastructure and compute resources',
                        'Collaborate with data scientists on model optimization',
                        'Ensure reproducibility and versioning of ML experiments'
                    ],
                    qualifications: [
                        'Bachelor\'s degree in Computer Science, Data Science, or related field',
                        '3+ years of experience in MLOps or ML Engineering',
                        'Strong understanding of ML model lifecycle',
                        'Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)',
                        'Proficiency in Python and ML libraries',
                        'Knowledge of containerization and orchestration (Docker, Kubernetes)',
                        'Experience with model serving platforms (TensorFlow Serving, MLflow)'
                    ],
                    niceToHave: [
                        'Experience with cloud ML services (SageMaker, Vertex AI)',
                        'Knowledge of model monitoring tools',
                        'Understanding of feature stores',
                        'Experience with distributed training',
                        'Familiarity with AutoML platforms'
                    ],
                    benefits: [
                        'Competitive salary with performance bonuses',
                        'Access to latest ML tools and platforms',
                        'Conference and training opportunities',
                        'Flexible working arrangements',
                        'Health and wellness benefits',
                        'Collaborative team environment'
                    ]
                },
                {
                    slug: 'cloud-architect',
                    title: 'Cloud Architect',
                    description: 'Design cloud-native solutions, optimize cloud infrastructure, and lead cloud migration projects.',
                    aboutRole: 'Lead the design and implementation of cloud-native solutions for our clients. You will architect scalable, secure, and cost-effective cloud infrastructure while mentoring junior team members.',
                    responsibilities: [
                        'Design and architect cloud solutions on AWS, Azure, or GCP',
                        'Lead cloud migration projects for enterprise clients',
                        'Optimize cloud costs and resource utilization',
                        'Implement security and compliance best practices',
                        'Create architectural documentation and diagrams',
                        'Provide technical leadership and mentorship',
                        'Evaluate and recommend cloud services and tools'
                    ],
                    qualifications: [
                        'Bachelor\'s degree in Computer Science or related field',
                        '5+ years of experience in cloud architecture',
                        'Expert knowledge of at least one major cloud platform',
                        'Strong understanding of networking, security, and compliance',
                        'Experience with infrastructure as code',
                        'Excellent communication and presentation skills',
                        'Cloud certifications (AWS Solutions Architect, Azure Architect, etc.)'
                    ],
                    niceToHave: [
                        'Multi-cloud experience',
                        'Enterprise architecture frameworks knowledge (TOGAF)',
                        'Experience with FinOps practices',
                        'Knowledge of serverless architectures',
                        'Previous consulting experience'
                    ],
                    benefits: [
                        'Premium salary package',
                        'Certification and training budget',
                        'Flexible schedule and remote work',
                        'Health insurance for family',
                        'Annual performance bonuses',
                        'Leadership development programs'
                    ]
                },
                {
                    slug: 'site-reliability-engineer',
                    title: 'Site Reliability Engineer',
                    description: 'Ensure system reliability, implement monitoring solutions, and optimize performance at scale.',
                    aboutRole: 'Join our SRE team to ensure the reliability, performance, and availability of our production systems. You will design and implement monitoring solutions, incident response procedures, and automation tools.',
                    responsibilities: [
                        'Design and implement comprehensive monitoring and alerting systems',
                        'Respond to and resolve production incidents',
                        'Conduct post-mortem analysis and implement preventive measures',
                        'Optimize system performance and scalability',
                        'Automate operational tasks and workflows',
                        'Define and track SLIs, SLOs, and error budgets',
                        'Build and maintain disaster recovery procedures'
                    ],
                    qualifications: [
                        'Bachelor\'s degree in Computer Science or related field',
                        '3-5 years of experience in SRE or DevOps',
                        'Strong programming skills (Python, Go, or similar)',
                        'Experience with monitoring tools (Prometheus, Grafana, Datadog)',
                        'Deep understanding of Linux systems and networking',
                        'Experience with incident management and on-call rotation',
                        'Knowledge of distributed systems and microservices'
                    ],
                    niceToHave: [
                        'Experience with chaos engineering',
                        'Knowledge of performance testing tools',
                        'Understanding of database internals',
                        'Experience with capacity planning',
                        'Contributions to open-source projects'
                    ],
                    benefits: [
                        'Competitive compensation',
                        'On-call rotation compensation',
                        'Flexible working hours',
                        'Professional development budget',
                        'Health benefits',
                        'Work-life balance support'
                    ]
                },
                {
                    slug: 'devops-consultant',
                    title: 'DevOps Consultant',
                    description: 'Guide clients through DevOps transformation, implement best practices, and deliver training.',
                    aboutRole: 'Work as a DevOps consultant helping clients transform their development and operations practices. You will assess current state, design transformation roadmaps, and guide implementation of DevOps best practices.',
                    responsibilities: [
                        'Assess client DevOps maturity and identify improvement areas',
                        'Design and present DevOps transformation roadmaps',
                        'Implement CI/CD pipelines and automation solutions',
                        'Deliver workshops and training sessions',
                        'Provide hands-on implementation support',
                        'Document best practices and create runbooks',
                        'Build long-term client relationships'
                    ],
                    qualifications: [
                        'Bachelor\'s degree in Computer Science or related field',
                        '5+ years of hands-on DevOps experience',
                        'Strong consulting and client management skills',
                        'Excellent presentation and communication abilities',
                        'Experience with multiple CI/CD tools and platforms',
                        'Knowledge of Agile and DevOps methodologies',
                        'Ability to work independently and lead projects'
                    ],
                    niceToHave: [
                        'DevOps or cloud certifications',
                        'Previous consulting firm experience',
                        'Experience in multiple industries',
                        'Training delivery experience',
                        'Multilingual capabilities'
                    ],
                    benefits: [
                        'Premium salary with project bonuses',
                        'Travel opportunities',
                        'Professional training budget',
                        'Flexible work arrangements',
                        'Health and wellness programs',
                        'Career advancement paths'
                    ]
                },
                {
                    slug: 'backend-engineer',
                    title: 'Backend Engineer',
                    description: 'Develop scalable backend services, APIs, and microservices using modern frameworks.',
                    aboutRole: 'Join our engineering team to build robust, scalable backend services and APIs. You will work on microservices architecture, database design, and API development using modern frameworks and best practices.',
                    responsibilities: [
                        'Design and develop RESTful APIs and microservices',
                        'Write clean, maintainable, and well-tested code',
                        'Optimize database queries and application performance',
                        'Implement authentication and authorization systems',
                        'Integrate third-party services and APIs',
                        'Participate in code reviews and technical discussions',
                        'Troubleshoot and resolve production issues'
                    ],
                    qualifications: [
                        'Bachelor\'s degree in Computer Science or related field',
                        '3+ years of backend development experience',
                        'Proficiency in at least one backend language (Python, Node.js, Java, Go)',
                        'Strong understanding of RESTful API design',
                        'Experience with SQL and NoSQL databases',
                        'Knowledge of caching strategies (Redis, Memcached)',
                        'Understanding of authentication/authorization (OAuth, JWT)'
                    ],
                    niceToHave: [
                        'Experience with microservices architecture',
                        'Knowledge of message queues (RabbitMQ, Kafka)',
                        'GraphQL experience',
                        'Understanding of Domain-Driven Design',
                        'Contributions to open-source projects'
                    ],
                    benefits: [
                        'Competitive salary',
                        'Flexible working hours',
                        'Remote work options',
                        'Learning and development budget',
                        'Health insurance',
                        'Team building activities'
                    ]
                }
            ]
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            careers: 'Carrières',
            contact: 'Contact',
            services: 'Services',
            schedule: 'Planifier une Consultation'
        },
        hero: {
            title: 'Sécurisez Votre',
            titleHighlight: 'Infrastructure avec Devaura',
            description: 'Nous fournissons des solutions expertes DevOps et MLOps pour rationaliser votre cycle de développement et accélérer l\'innovation.',
            scheduleBtn: 'Planifier une Consultation',
            learnBtn: 'En Savoir Plus'
        },
        story: {
            title: 'Votre Défi Infrastructurel',
            subtitle: 'De la Complexité à la Confiance',
            stages: {
                challenge: {
                    number: '01',
                    title: 'Les Systèmes Modernes Sont Complexes',
                    description: 'Votre infrastructure est complexe et critique. Les arrêts coûtent de l\'argent. Les violations de sécurité coûtent la confiance. La mise à l\'échelle est coûteuse. Les déploiements manuels sont sujets aux erreurs et lents.',
                    points: ['Dépendances critiques partout', 'La mise à l\'échelle devient exponentiellement coûteuse', 'Les processus manuels génèrent des erreurs', 'La sécurité nécessite une vigilance constante']
                },
                guide: {
                    number: '02',
                    title: 'Orientation d\'Experts à Chaque Étape',
                    description: 'Vous n\'avez pas à le faire seul. Nos experts évaluent votre état actuel, conçoivent une feuille de route de transformation et vous guident dans la mise en œuvre.',
                    points: ['Conseil et évaluation d\'experts', 'Feuille de route de transformation personnalisée', 'Support à la mise en œuvre pratique', 'Meilleures pratiques et méthodologies']
                },
                transformation: {
                    number: '03',
                    title: 'Systèmes Robustes et Automatisés',
                    description: 'Le résultat? Déploiements automatisés. Moins de tâches manuelles. Systèmes qui se dimensionnent gracieusement. Infrastructure sécurisée par défaut. Des équipes qui dorment paisiblement.',
                    points: ['Éliminer les pertes de temps manuelles', 'Déploiements et mise à l\'échelle automatisés', 'Sécurité et conformité par conception', 'Systèmes fiables sur lesquels vous pouvez compter']
                }
            }
        },
        techMarquee: {
            title: 'Technologies Principales',
            description: 'Nous utilisons une pile moderne de technologies de pointe pour créer des solutions robustes et évolutives pour nos clients.'
        },
        services: {
            title: 'Nos Services',
            description: 'D\'un vivier de talents important à un écosystème technologique florissant, la Tunisie offre une combinaison unique d\'avantages pour les entreprises technologiques mondiales.',
            talent: {
                title: 'Talents de Premier Plan',
                desc: 'Accédez à un pool croissant d\'ingénieurs multilingues hautement qualifiés.'
            },
            cost: {
                title: 'Rentabilité',
                desc: 'Bénéficiez de coûts opérationnels compétitifs sans compromettre la qualité.'
            },
            location: {
                title: 'Emplacement Stratégique',
                desc: 'Alignement de fuseau horaire idéal pour une collaboration fluide.'
            },
            ecosystem: {
                title: 'Écosystème Florissant',
                desc: 'Un environnement favorable avec des incitations gouvernementales et des pôles d\'innovation.'
            },
            pillars: {
                devops: {
                    title: 'Transformation DevOps',
                    tagline: 'Rationalisez votre pipeline de livraison',
                    desc: 'Accélérez votre livraison de logiciels avec des pipelines CI/CD robustes, de l\'Infrastructure as Code et de l\'orchestration de conteneurs.',
                    features: ['Automatisation Pipeline CI/CD', 'Infrastructure as Code (IaC)', 'Kubernetes & Docker', 'Implémentation GitOps']
                },
                cloud: {
                    title: 'Architecture Cloud',
                    tagline: 'Évolutif, sécurisé et rentable',
                    desc: 'Concevez et migrez vers des architectures cloud-native qui évoluent avec votre entreprise tout en optimisant les coûts.',
                    features: ['Migration Cloud (AWS/Azure/GCP)', 'Architecture Serverless', 'FinOps & Optimisation des Coûts', 'Stratégie Multi-Cloud']
                },
                mlops: {
                    title: 'MLOps & IA',
                    tagline: 'Du modèle à la production, plus vite',
                    desc: 'Comblez le fossé entre la science des données et les opérations avec des pipelines ML automatisés et un serving de modèles évolutif.',
                    features: ['Pipelines ML Automatisés', 'Serving & Monitoring de Modèles', 'Feature Stores', 'Gestion de Clusters GPU']
                },
                sre: {
                    title: 'Site Reliability Engineering',
                    tagline: 'Disponibilité et performance garanties',
                    desc: 'Assurez-vous que vos systèmes sont fiables, évolutifs et observables avec nos pratiques SRE.',
                    features: ['Monitoring 24/7 & Alertes', 'Réponse aux Incidents', 'Définition SLO/SLI', 'Optimisation Performance']
                },
                security: {
                    title: 'DevSecOps',
                    tagline: 'La sécurité à la vitesse du code',
                    desc: 'Intégrez la sécurité à chaque étape de votre cycle de développement sans ralentir la livraison.',
                    features: ['Scan de Sécurité Automatisé', 'Automatisation de la Conformité', 'Gestion des Secrets', 'Évaluation des Vulnérabilités']
                }
            }
        },
        cta: {
            title: 'Prêt à Exploiter Nos Talents?',
            description: 'Laissez Devaura vous connecter avec les meilleurs ingénieurs DevOps et MLOps pour développer vos opérations.',
            button: 'Démarrer un Projet avec Nos Talents'
        },
        footer: {
            description: 'Donner aux entreprises les moyens de réussir avec des solutions DevOps et MLOps de pointe.',
            company: 'Entreprise',
            aboutUs: 'À Propos',
            services: 'Services',
            careers: 'Carrières',
            resources: 'Ressources',
            blog: 'Blog',
            caseStudies: 'Études de Cas',
            contact: 'Contact',
            connect: 'Se Connecter',
            privacy: 'Politique de Confidentialité',
            terms: 'Conditions d\'Utilisation',
            rights: '© 2024 Devaura. Tous droits réservés.'
        },
        contact: {
            title: 'Construisons Ensemble',
            description: 'Que vous ayez une question sur nos services ou que vous souhaitiez discuter d\'un projet, nous sommes prêts à vous aider.',
            scheduleTitle: 'Planifier une Consultation Gratuite',
            scheduleDesc: 'Planifiez un appel gratuit de 30 minutes avec nos experts DevOps pour discuter de vos besoins spécifiques.',
            scheduleBtn: 'Planifier Maintenant',
            otherWays: 'Autres Moyens de Nous Contacter',
            otherDesc: 'Contactez-nous directement ou suivez notre parcours sur les réseaux sociaux.',
            formTitle: 'Envoyez-nous un Message',
            name: 'Votre Nom',
            namePlaceholder: 'Entrez votre nom complet',
            company: 'Entreprise',
            companyPlaceholder: 'Entrez le nom de votre entreprise',
            email: 'Email Professionnel',
            emailPlaceholder: 'Entrez votre email professionnel',
            inquiryType: 'Type de Demande',
            message: 'Message',
            messagePlaceholder: 'Comment pouvons-nous vous aider?',
            sendBtn: 'Envoyer le Message',
            inquiryTypes: {
                general: 'Demande Générale',
                project: 'Proposition de Projet',
                partnership: 'Partenariat',
                careers: 'Carrières'
            }
        },
        about: {
            title: 'À Propos de Devaura',
            intro: 'Devaura est une agence DevOps et MLOps de premier plan dédiée à aider les entreprises à moderniser leur infrastructure et à accélérer leurs pipelines de développement.',
            mission: 'Notre Mission',
            missionText: 'Combler le fossé entre les défis d\'infrastructure complexes et l\'excellence opérationnelle sans faille. Nous croyons en l\'automatisation, l\'évolutivité et la sécurité comme piliers de la livraison logicielle moderne.',
            vision: 'Notre Vision',
            visionText: 'Être le partenaire mondial de choix pour les entreprises cherchant à tirer parti des meilleurs talents en ingénierie, favorisant une culture d\'innovation et d\'amélioration continue.',
            whyChoose: 'Pourquoi Nous Choisir?',
            reasons: [
                'Expertise en Technologies Cloud Natives',
                'Bilan Éprouvé en Transformation DevOps',
                'Solutions MLOps Dédiées',
                'Support et Surveillance 24/7',
                'Stratégies d\'Évolution Rentables'
            ],
            stats: [
                { label: 'Projets Livrés', value: '50+' },
                { label: 'Disponibilité Garantie', value: '99.99%' },
                { label: 'Membres de l\'Équipe', value: '20+' }
            ],
            process: {
                title: 'Notre Processus',
                steps: [
                    { title: 'Découverte', desc: 'Nous analysons votre infrastructure actuelle et vos objectifs.' },
                    { title: 'Architecture', desc: 'Nous concevons une solution évolutive, sécurisée et rentable.' },
                    { title: 'Implémentation', desc: 'Nous construisons et migrons vos systèmes sans interruption.' },
                    { title: 'Optimisation', desc: 'Nous surveillons et améliorons continuellement votre stack.' }
                ]
            },
            team: {
                title: 'Notre Direction',
                members: [
                    {
                        name: 'Kmar Turki',
                        role: 'Co-Fondatrice',
                        linkedin: 'https://www.linkedin.com/in/kmar-turki-59b687305/'
                    },
                    {
                        name: 'Mahdi Ben Slima',
                        role: 'Co-Fondateur',
                        linkedin: 'https://www.linkedin.com/in/benslimamahdi/'
                    }
                ]
            }
        },
        cookie: {
            title: 'Nous utilisons des cookies',
            description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic.',
            accept: 'Accepter',
            decline: 'Refuser',
            learnMore: 'En Savoir Plus',
            acceptAll: 'Tout Accepter'
        },
        chatbot: {
            greeting: 'Bonjour! 👋 Comment puis-je vous aider avec vos besoins DevOps aujourd\'hui?',
            response: 'Merci de nous avoir contactés! Notre équipe vous répondra sous peu. En attendant, n\'hésitez pas à consulter notre page de services.',
            placeholder: 'Tapez un message...',
            assistant: 'Assistant Devaura',
            online: 'En ligne'
        },
        careers: {
            title: 'Rejoignez Notre Équipe',
            subtitle: 'Construisez votre carrière avec Devaura et façonnez l\'avenir du DevOps et MLOps',
            whyJoin: 'Pourquoi Rejoindre Devaura?',
            benefits: {
                innovative: {
                    title: 'Projets Innovants',
                    desc: 'Travaillez sur des projets DevOps et MLOps de pointe avec des entreprises mondiales de premier plan'
                },
                learning: {
                    title: 'Apprentissage Continu',
                    desc: 'Accès aux certifications, programmes de formation et dernières technologies'
                },
                exposure: {
                    title: 'Exposition Mondiale',
                    desc: 'Collaborez avec des clients internationaux et travaillez sur des solutions impactantes'
                },
                balance: {
                    title: 'Équilibre Vie-Travail',
                    desc: 'Arrangements de travail flexibles et culture de soutien et inclusive'
                }
            },
            openPositions: 'Postes Ouverts',
            applyBtn: 'Postuler Maintenant',
            location: 'Emplacement',
            remote: 'À Distance',
            aboutRole: 'À Propos du Rôle',
            keyResponsibilities: 'Responsabilités Clés',
            requiredQualifications: 'Qualifications Requises',
            niceToHave: 'Atouts',
            whatWeOffer: 'Ce Que Nous Offrons',
            requiredSkills: 'Compétences Requises',
            jobs: [
                {
                    slug: 'devops-engineer',
                    title: 'Ingénieur DevOps',
                    description: 'Construire et maintenir des pipelines CI/CD, gérer des clusters Kubernetes et implémenter l\'infrastructure as code.',
                    aboutRole: 'Rejoignez notre équipe infrastructure pour construire et maintenir des pipelines CI/CD robustes, gérer des clusters Kubernetes et implémenter l\'infrastructure as code.',
                    responsibilities: [
                        'Concevoir et maintenir des pipelines CI/CD (GitLab CI, Jenkins, GitHub Actions)',
                        'Gérer et optimiser les clusters Kubernetes pour la production',
                        'Implémenter l\'infrastructure as code (Terraform, CloudFormation)',
                        'Surveiller les performances du système et mettre en place des alertes',
                        'Assurer la sécurité de l\'infrastructure',
                        'Collaborer avec les équipes de développement',
                        'Automatiser les tâches répétitives'
                    ],
                    qualifications: [
                        'Diplôme en Informatique ou domaine connexe',
                        '3-5 ans d\'expérience en DevOps ou SRE',
                        'Forte expérience avec Kubernetes',
                        'Maîtrise d\'un langage de script (Python, Bash, Go)',
                        'Expérience avec l\'infrastructure as code (Terraform, Ansible)',
                        'Connaissance des plateformes cloud (AWS, Azure, GCP)',
                        'Compréhension des réseaux et de la sécurité'
                    ],
                    niceToHave: [
                        'Certifications (CKA, AWS Solutions Architect)',
                        'Expérience avec les outils de monitoring (Prometheus, Grafana)',
                        'Connaissance du Service Mesh (Istio)',
                        'Expérience GitOps',
                        'Outils de sécurité et conformité'
                    ],
                    benefits: [
                        'Salaire compétitif',
                        'Assurance santé',
                        'Horaires flexibles et télétravail',
                        'Budget formation et certification',
                        'Bureau moderne',
                        'Opportunités de carrière'
                    ]
                },
                {
                    slug: 'mlops-engineer',
                    title: 'Ingénieur MLOps',
                    description: 'Concevoir et déployer des pipelines ML, gérer le cycle de vie des modèles et assurer une infrastructure ML évolutive.',
                    aboutRole: 'Rejoignez notre équipe ML pour concevoir et maintenir des pipelines ML en production.',
                    responsibilities: [
                        'Construire des pipelines ML pour l\'entraînement et le déploiement',
                        'Implémenter les meilleures pratiques MLOps',
                        'Surveiller la performance des modèles',
                        'Automatiser le réentraînement des modèles',
                        'Gérer l\'infrastructure ML',
                        'Collaborer avec les data scientists'
                    ],
                    qualifications: [
                        'Diplôme en Informatique ou Data Science',
                        '3+ ans d\'expérience en MLOps',
                        'Compréhension du cycle de vie ML',
                        'Expérience avec les frameworks ML (TensorFlow, PyTorch)',
                        'Maîtrise de Python',
                        'Docker et Kubernetes',
                        'Plateformes de serving (TensorFlow Serving, MLflow)'
                    ],
                    niceToHave: [
                        'Services ML Cloud (SageMaker, Vertex AI)',
                        'Outils de monitoring de modèles',
                        'Feature stores',
                        'Entraînement distribué',
                        'AutoML'
                    ],
                    benefits: [
                        'Salaire compétitif',
                        'Outils ML de pointe',
                        'Conférences et formations',
                        'Travail flexible',
                        'Avantages santé',
                        'Équipe collaborative'
                    ]
                },
                {
                    slug: 'cloud-architect',
                    title: 'Architecte Cloud',
                    description: 'Concevoir des solutions cloud-native, optimiser l\'infrastructure cloud et diriger des projets de migration cloud.',
                    aboutRole: 'Dirigez la conception et l\'implémentation de solutions cloud-native pour nos clients.',
                    responsibilities: [
                        'Concevoir des solutions cloud (AWS, Azure, GCP)',
                        'Diriger des projets de migration cloud',
                        'Optimiser les coûts et l\'utilisation',
                        'Implémenter la sécurité et la conformité',
                        'Créer la documentation technique',
                        'Mentorat technique'
                    ],
                    qualifications: [
                        'Diplôme en Informatique',
                        '5+ ans d\'expérience en architecture cloud',
                        'Expertise sur une plateforme cloud majeure',
                        'Réseaux et sécurité',
                        'Infrastructure as code',
                        'Communication excellente',
                        'Certifications Cloud'
                    ],
                    niceToHave: [
                        'Expérience multi-cloud',
                        'TOGAF',
                        'FinOps',
                        'Serverless',
                        'Expérience en conseil'
                    ],
                    benefits: [
                        'Salaire premium',
                        'Budget certification',
                        'Horaires flexibles',
                        'Assurance santé famille',
                        'Bonus de performance',
                        'Développement du leadership'
                    ]
                },
                {
                    slug: 'site-reliability-engineer',
                    title: 'Ingénieur Site Reliability',
                    description: 'Assurer la fiabilité du système, implémenter des solutions de surveillance et optimiser les performances à grande échelle.',
                    aboutRole: 'Rejoignez notre équipe SRE pour assurer la fiabilité et la performance de nos systèmes.',
                    responsibilities: [
                        'Concevoir des systèmes de monitoring',
                        'Gérer les incidents de production',
                        'Analyses post-mortem',
                        'Optimiser la performance',
                        'Automatiser les tâches opérationnelles',
                        'Définir SLIs et SLOs'
                    ],
                    qualifications: [
                        'Diplôme en Informatique',
                        '3-5 ans d\'expérience SRE/DevOps',
                        'Programmation (Python, Go)',
                        'Monitoring (Prometheus, Grafana)',
                        'Linux et réseaux',
                        'Gestion d\'incidents'
                    ],
                    niceToHave: [
                        'Chaos engineering',
                        'Tests de performance',
                        'Bases de données',
                        'Capacity planning',
                        'Open source'
                    ],
                    benefits: [
                        'Rémunération compétitive',
                        'Compensation astreintes',
                        'Horaires flexibles',
                        'Budget développement pro',
                        'Avantages santé',
                        'Équilibre vie-travail'
                    ]
                },
                {
                    slug: 'devops-consultant',
                    title: 'Consultant DevOps',
                    description: 'Guider les clients à travers la transformation DevOps, implémenter les meilleures pratiques et offrir des formations.',
                    aboutRole: 'Aidez nos clients à transformer leurs pratiques de développement et d\'opérations.',
                    responsibilities: [
                        'Évaluer la maturité DevOps',
                        'Concevoir des feuilles de route de transformation',
                        'Implémenter CI/CD',
                        'Animer des ateliers et formations',
                        'Support à l\'implémentation',
                        'Documentation et runbooks'
                    ],
                    qualifications: [
                        'Diplôme en Informatique',
                        '5+ ans d\'expérience DevOps',
                        'Compétences en conseil',
                        'Présentation et communication',
                        'Outils CI/CD multiples',
                        'Agile et DevOps',
                        'Autonomie'
                    ],
                    niceToHave: [
                        'Certifications DevOps/Cloud',
                        'Expérience en cabinet de conseil',
                        'Expérience multi-secteurs',
                        'Expérience de formation',
                        'Multilingue'
                    ],
                    benefits: [
                        'Salaire premium et bonus',
                        'Opportunités de voyage',
                        'Budget formation',
                        'Travail flexible',
                        'Programmes santé',
                        'Progression de carrière'
                    ]
                },
                {
                    slug: 'backend-engineer',
                    title: 'Ingénieur Backend',
                    description: 'Développer des services backend évolutifs, des API et des microservices en utilisant des frameworks modernes.',
                    aboutRole: 'Construisez des services backend robustes et évolutifs.',
                    responsibilities: [
                        'Concevoir et développer des API RESTful',
                        'Code propre et testé',
                        'Optimiser les performances',
                        'Authentification et autorisation',
                        'Intégration d\'API tierces',
                        'Revue de code'
                    ],
                    qualifications: [
                        'Diplôme en Informatique',
                        '3+ ans d\'expérience backend',
                        'Langage backend (Python, Node.js, Java, Go)',
                        'Conception API RESTful',
                        'Bases de données SQL/NoSQL',
                        'Caching (Redis)',
                        'Auth (OAuth, JWT)'
                    ],
                    niceToHave: [
                        'Microservices',
                        'Message queues (RabbitMQ, Kafka)',
                        'GraphQL',
                        'DDD',
                        'Open source'
                    ],
                    benefits: [
                        'Salaire compétitif',
                        'Horaires flexibles',
                        'Télétravail',
                        'Budget formation',
                        'Assurance santé',
                        'Activités d\'équipe'
                    ]
                }
            ]
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            careers: 'Carreras',
            contact: 'Contacto',
            services: 'Servicios',
            schedule: 'Programar Consulta'
        },
        hero: {
            title: 'Asegure Su',
            titleHighlight: 'Infraestructura con Devaura',
            description: 'Brindamos soluciones expertas de DevOps y MLOps para optimizar su ciclo de desarrollo y acelerar la innovación.',
            scheduleBtn: 'Programar Consulta',
            learnBtn: 'Saber Más'
        },
        story: {
            title: 'Su Desafío Infraestructural',
            subtitle: 'De la Complejidad a la Confianza',
            stages: {
                challenge: {
                    number: '01',
                    title: 'Los Sistemas Modernos Son Complejos',
                    description: 'Su infraestructura es compleja y crítica. El tiempo de inactividad cuesta dinero. Las brechas de seguridad cuestan confianza. El escalado es costoso. Los despliegues manuales son propensos a errores y lentos.',
                    points: ['Dependencias críticas en todas partes', 'El escalado se vuelve exponencialmente costoso', 'Los procesos manuales generan errores', 'La seguridad requiere vigilancia constante']
                },
                guide: {
                    number: '02',
                    title: 'Orientación Experta en Cada Paso',
                    description: 'No tiene que hacerlo solo. Nuestros expertos evalúan su estado actual, diseñan una hoja de ruta de transformación y lo guían en la implementación.',
                    points: ['Consultoría y evaluación de expertos', 'Hoja de ruta de transformación personalizada', 'Soporte práctico en la implementación', 'Mejores prácticas y metodologías']
                },
                transformation: {
                    number: '03',
                    title: 'Sistemas Robustos y Automatizados',
                    description: 'El resultado? Despliegues automatizados. Menos tareas manuales. Sistemas que se escalan elegantemente. Infraestructura segura por defecto. Equipos que duermen tranquilamente.',
                    points: ['Eliminar la pérdida de tiempo manual', 'Despliegues y escalado automatizados', 'Seguridad y cumplimiento por diseño', 'Sistemas confiables en los que puede contar']
                }
            }
        },
        techMarquee: {
            title: 'Tecnologías Principales',
            description: 'Aprovechamos un conjunto moderno de tecnologías líderes para construir soluciones robustas y escalables para nuestros clientes.'
        },
        services: {
            title: 'Un Centro de Ventajas Incomparables',
            description: 'Desde un gran grupo de talentos hasta un ecosistema tecnológico próspero, Túnez ofrece una combinación única de beneficios para empresas tecnológicas globales.',
            talent: {
                title: 'Talento de Primera Clase',
                desc: 'Acceda a un grupo creciente de ingenieros multilingües altamente calificados.'
            },
            cost: {
                title: 'Rentabilidad',
                desc: 'Benefíciese de costos operativos competitivos sin comprometer la calidad.'
            },
            location: {
                title: 'Ubicación Estratégica',
                desc: 'Alineación ideal de zona horaria para una colaboración sin problemas.'
            },
            ecosystem: {
                title: 'Ecosistema Próspero',
                desc: 'Un entorno de apoyo con incentivos gubernamentales y centros de innovación.'
            },
            pillars: {
                devops: {
                    title: 'Transformación DevOps',
                    tagline: 'Optimice su pipeline de entrega',
                    desc: 'Acelere su entrega de software con pipelines CI/CD robustos, Infraestructura como Código y orquestación de contenedores.',
                    features: ['Automatización Pipeline CI/CD', 'Infraestructura como Código (IaC)', 'Kubernetes & Docker', 'Implementación GitOps']
                },
                cloud: {
                    title: 'Arquitectura Cloud',
                    tagline: 'Escalable, seguro y rentable',
                    desc: 'Diseñe y migre a arquitecturas cloud-native que escalen con su negocio mientras optimiza costos.',
                    features: ['Migración Cloud (AWS/Azure/GCP)', 'Arquitectura Serverless', 'FinOps & Optimización de Costos', 'Estrategia Multi-Cloud']
                },
                mlops: {
                    title: 'MLOps & IA',
                    tagline: 'Del modelo a producción, más rápido',
                    desc: 'Cierre la brecha entre ciencia de datos y operaciones con pipelines ML automatizados y serving de modelos escalable.',
                    features: ['Pipelines ML Automatizados', 'Serving y Monitoreo de Modelos', 'Feature Stores', 'Gestión de Clústeres GPU']
                },
                sre: {
                    title: 'Site Reliability Engineering',
                    tagline: 'Tiempo de actividad y rendimiento garantizados',
                    desc: 'Asegure que sus sistemas sean confiables, escalables y observables con nuestras prácticas SRE.',
                    features: ['Monitoreo 24/7 y Alertas', 'Respuesta a Incidentes', 'Definición SLO/SLI', 'Optimización de Rendimiento']
                },
                security: {
                    title: 'DevSecOps',
                    tagline: 'Seguridad a la velocidad del código',
                    desc: 'Integre la seguridad en cada etapa de su ciclo de desarrollo sin ralentizar la entrega.',
                    features: ['Escaneo de Seguridad Automatizado', 'Automatización de Cumplimiento', 'Gestión de Secretos', 'Evaluación de Vulnerabilidades']
                }
            }
        },
        cta: {
            title: '¿Listo para Aprovechar Nuestro Talento?',
            description: 'Deje que Devaura lo conecte con los mejores ingenieros de DevOps y MLOps para escalar sus operaciones.',
            button: 'Iniciar un Proyecto con Nuestro Talento'
        },
        footer: {
            description: 'Empoderando empresas con soluciones DevOps y MLOps de vanguardia.',
            company: 'Empresa',
            aboutUs: 'Nosotros',
            services: 'Servicios',
            careers: 'Carreras',
            resources: 'Recursos',
            blog: 'Blog',
            caseStudies: 'Casos de Estudio',
            contact: 'Contacto',
            connect: 'Conectar',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Servicio',
            rights: '© 2024 Devaura. Todos los derechos reservados.'
        },
        contact: {
            title: 'Construyamos Juntos',
            description: 'Ya sea que tenga una pregunta sobre nuestros servicios o quiera discutir un proyecto, estamos listos para ayudar.',
            scheduleTitle: 'Programe una Consulta Gratuita',
            scheduleDesc: 'Programe una llamada gratuita de 30 minutos con nuestros expertos en DevOps para discutir sus necesidades específicas.',
            scheduleBtn: 'Programar Ahora',
            otherWays: 'Otras Formas de Conectar',
            otherDesc: 'Contáctenos directamente o siga nuestro viaje en las redes sociales.',
            formTitle: 'Envíenos un Mensaje',
            name: 'Su Nombre',
            namePlaceholder: 'Ingrese su nombre completo',
            company: 'Empresa',
            companyPlaceholder: 'Ingrese el nombre de su empresa',
            email: 'Email de Trabajo',
            emailPlaceholder: 'Ingrese su email de trabajo',
            inquiryType: 'Tipo de Consulta',
            message: 'Mensaje',
            messagePlaceholder: '¿Cómo podemos ayudar?',
            sendBtn: 'Enviar Mensaje',
            inquiryTypes: {
                general: 'Consulta General',
                project: 'Propuesta de Proyecto',
                partnership: 'Asociación',
                careers: 'Carreras'
            }
        },
        about: {
            title: 'Acerca de Devaura',
            intro: 'Devaura es una agencia premier de DevOps y MLOps dedicada a ayudar a las empresas a modernizar su infraestructura y acelerar sus pipelines de desarrollo.',
            mission: 'Nuestra Misión',
            missionText: 'Cerrar la brecha entre los desafíos complejos de infraestructura y la excelencia operacional sin problemas. Creemos en la automatización, escalabilidad y seguridad como los pilares de la entrega de software moderna.',
            vision: 'Nuestra Visión',
            visionText: 'Ser el socio global de elección para empresas que buscan aprovechar el mejor talento de ingeniería, fomentando una cultura de innovación y mejora continua.',
            whyChoose: '¿Por Qué Elegirnos?',
            reasons: [
                'Experiencia en Tecnologías Nativas de la Nube',
                'Historial Comprobado en Transformación DevOps',
                'Soluciones MLOps Dedicadas',
                'Soporte y Monitoreo 24/7',
                'Estrategias de Escalado Rentables'
            ]
        },
        cookie: {
            title: 'Usamos cookies',
            description: 'Usamos cookies para mejorar su experiencia de navegación y analizar nuestro tráfico.',
            accept: 'Aceptar',
            decline: 'Rechazar'
        },
        chatbot: {
            greeting: '¡Hola! 👋 ¿Cómo puedo ayudarte con tus necesidades de DevOps hoy?',
            response: '¡Gracias por contactarnos! Nuestro equipo se pondrá en contacto contigo pronto. Mientras tanto, no dudes en consultar nuestra página de servicios.',
            placeholder: 'Escribe un mensaje...',
            assistant: 'Asistente Devaura',
            online: 'En línea'
        },
        careers: {
            title: 'Únete a Nuestro Equipo',
            subtitle: 'Construye tu carrera con Devaura y da forma al futuro de DevOps y MLOps',
            whyJoin: '¿Por Qué Unirte a Devaura?',
            benefits: {
                innovative: {
                    title: 'Proyectos Innovadores',
                    desc: 'Trabaja en proyectos DevOps y MLOps de vanguardia con empresas globales líderes'
                },
                learning: {
                    title: 'Aprendizaje Continuo',
                    desc: 'Acceso a certificaciones, programas de capacitación y las últimas tecnologías'
                },
                exposure: {
                    title: 'Exposición Global',
                    desc: 'Colabora con clientes internacionales y trabaja en soluciones de impacto'
                },
                balance: {
                    title: 'Equilibrio Vida-Trabajo',
                    desc: 'Arreglos de trabajo flexibles y cultura de apoyo e inclusiva'
                }
            },
            openPositions: 'Posiciones Abiertas',
            applyBtn: 'Aplicar Ahora',
            location: 'Ubicación',
            remote: 'Remoto',
            aboutRole: 'Sobre el Rol',
            keyResponsibilities: 'Responsabilidades Clave',
            requiredQualifications: 'Calificaciones Requeridas',
            niceToHave: 'Deseable',
            whatWeOffer: 'Lo Que Ofrecemos',
            requiredSkills: 'Habilidades Requeridas',
            jobs: [
                {
                    slug: 'devops-engineer',
                    title: 'Ingeniero DevOps',
                    description: 'Construir y mantener pipelines CI/CD, gestionar clústeres Kubernetes e implementar infraestructura como código.',
                    aboutRole: 'Únete a nuestro equipo de infraestructura para construir y mantener pipelines CI/CD robustos.',
                    responsibilities: [
                        'Diseñar y mantener pipelines CI/CD',
                        'Gestionar clústeres Kubernetes',
                        'Implementar infraestructura como código',
                        'Monitorear el rendimiento del sistema',
                        'Asegurar la seguridad de la infraestructura',
                        'Colaborar con equipos de desarrollo',
                        'Automatizar tareas repetitivas'
                    ],
                    qualifications: [
                        'Título en Informática o campo relacionado',
                        '3-5 años de experiencia en DevOps o SRE',
                        'Experiencia con Kubernetes',
                        'Dominio de scripting (Python, Bash, Go)',
                        'Experiencia con IaC (Terraform, Ansible)',
                        'Conocimiento de nubes (AWS, Azure, GCP)',
                        'Redes y seguridad'
                    ],
                    niceToHave: [
                        'Certificaciones (CKA, AWS)',
                        'Herramientas de monitoreo',
                        'Service Mesh',
                        'GitOps',
                        'Herramientas de seguridad'
                    ],
                    benefits: [
                        'Salario competitivo',
                        'Seguro de salud',
                        'Horario flexible',
                        'Presupuesto de formación',
                        'Oficina moderna',
                        'Crecimiento profesional'
                    ]
                },
                {
                    slug: 'mlops-engineer',
                    title: 'Ingeniero MLOps',
                    description: 'Diseñar e implementar pipelines ML, gestionar el ciclo de vida de modelos y asegurar infraestructura ML escalable.',
                    aboutRole: 'Únete a nuestro equipo de ML para diseñar y mantener pipelines de ML en producción.',
                    responsibilities: [
                        'Construir pipelines de ML',
                        'Implementar mejores prácticas de MLOps',
                        'Monitorear rendimiento de modelos',
                        'Automatizar reentrenamiento',
                        'Gestionar infraestructura ML',
                        'Colaborar con científicos de datos'
                    ],
                    qualifications: [
                        'Título en Informática o Ciencia de Datos',
                        '3+ años de experiencia en MLOps',
                        'Ciclo de vida de ML',
                        'Frameworks ML (TensorFlow, PyTorch)',
                        'Python',
                        'Docker y Kubernetes',
                        'Plataformas de serving'
                    ],
                    niceToHave: [
                        'Servicios ML en la nube',
                        'Monitoreo de modelos',
                        'Feature stores',
                        'Entrenamiento distribuido',
                        'AutoML'
                    ],
                    benefits: [
                        'Salario competitivo',
                        'Herramientas ML modernas',
                        'Conferencias y formación',
                        'Trabajo flexible',
                        'Beneficios de salud',
                        'Equipo colaborativo'
                    ]
                },
                {
                    slug: 'cloud-architect',
                    title: 'Arquitecto Cloud',
                    description: 'Diseñar soluciones cloud-native, optimizar infraestructura cloud y liderar proyectos de migración cloud.',
                    aboutRole: 'Lidera el diseño e implementación de soluciones cloud-native.',
                    responsibilities: [
                        'Diseñar soluciones cloud',
                        'Liderar migraciones cloud',
                        'Optimizar costos',
                        'Implementar seguridad',
                        'Documentación técnica',
                        'Mentoría técnica'
                    ],
                    qualifications: [
                        'Título en Informática',
                        '5+ años en arquitectura cloud',
                        'Experiencia en plataforma cloud mayor',
                        'Redes y seguridad',
                        'Infraestructura como código',
                        'Comunicación excelente',
                        'Certificaciones Cloud'
                    ],
                    niceToHave: [
                        'Experiencia multi-cloud',
                        'TOGAF',
                        'FinOps',
                        'Serverless',
                        'Consultoría'
                    ],
                    benefits: [
                        'Salario premium',
                        'Presupuesto certificación',
                        'Horario flexible',
                        'Seguro familiar',
                        'Bonos',
                        'Liderazgo'
                    ]
                },
                {
                    slug: 'site-reliability-engineer',
                    title: 'Ingeniero Site Reliability',
                    description: 'Asegurar la confiabilidad del sistema, implementar soluciones de monitoreo y optimizar el rendimiento a escala.',
                    aboutRole: 'Únete a nuestro equipo SRE para asegurar la confiabilidad del sistema.',
                    responsibilities: [
                        'Diseñar sistemas de monitoreo',
                        'Gestionar incidentes',
                        'Análisis post-mortem',
                        'Optimizar rendimiento',
                        'Automatizar operaciones',
                        'Definir SLIs y SLOs'
                    ],
                    qualifications: [
                        'Título en Informática',
                        '3-5 años en SRE/DevOps',
                        'Programación (Python, Go)',
                        'Monitoreo (Prometheus, Grafana)',
                        'Linux y redes',
                        'Gestión de incidentes'
                    ],
                    niceToHave: [
                        'Chaos engineering',
                        'Pruebas de rendimiento',
                        'Bases de datos',
                        'Capacity planning',
                        'Open source'
                    ],
                    benefits: [
                        'Compensación competitiva',
                        'Compensación guardias',
                        'Horario flexible',
                        'Desarrollo profesional',
                        'Beneficios salud',
                        'Balance vida-trabajo'
                    ]
                },
                {
                    slug: 'devops-consultant',
                    title: 'Consultor DevOps',
                    description: 'Guiar a los clientes a través de la transformación DevOps, implementar mejores prácticas y brindar capacitación.',
                    aboutRole: 'Ayuda a clientes a transformar sus prácticas DevOps.',
                    responsibilities: [
                        'Evaluar madurez DevOps',
                        'Diseñar roadmaps',
                        'Implementar CI/CD',
                        'Impartir talleres',
                        'Soporte implementación',
                        'Documentación'
                    ],
                    qualifications: [
                        'Título en Informática',
                        '5+ años experiencia DevOps',
                        'Habilidades consultoría',
                        'Presentación y comunicación',
                        'Herramientas CI/CD',
                        'Agile y DevOps',
                        'Autonomía'
                    ],
                    niceToHave: [
                        'Certificaciones',
                        'Experiencia consultoría',
                        'Multi-industria',
                        'Experiencia formación',
                        'Multilingüe'
                    ],
                    benefits: [
                        'Salario premium y bonos',
                        'Oportunidades viaje',
                        'Presupuesto formación',
                        'Trabajo flexible',
                        'Programas bienestar',
                        'Carrera profesional'
                    ]
                },
                {
                    slug: 'backend-engineer',
                    title: 'Ingeniero Backend',
                    description: 'Desarrollar servicios backend escalables, APIs y microservicios usando frameworks modernos.',
                    aboutRole: 'Construye servicios backend robustos y escalables.',
                    responsibilities: [
                        'Diseñar APIs RESTful',
                        'Código limpio',
                        'Optimizar rendimiento',
                        'Autenticación',
                        'Integraciones',
                        'Code reviews'
                    ],
                    qualifications: [
                        'Título en Informática',
                        '3+ años backend',
                        'Lenguaje backend',
                        'Diseño API',
                        'Bases de datos',
                        'Caching',
                        'Auth'
                    ],
                    niceToHave: [
                        'Microservicios',
                        'Message queues',
                        'GraphQL',
                        'DDD',
                        'Open source'
                    ],
                    benefits: [
                        'Salario competitivo',
                        'Horario flexible',
                        'Remoto',
                        'Presupuesto aprendizaje',
                        'Seguro salud',
                        'Actividades equipo'
                    ]
                }
            ]
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            careers: 'الوظائف',
            contact: 'اتصل بنا',
            services: 'الخدمات',
            schedule: 'حجز استشارة'
        },
        hero: {
            title: 'أمّن',
            titleHighlight: 'بنيتك التحتية مع ديفأورا',
            description: 'نقدم حلول DevOps و MLOps احترافية لتبسيط دورة التطوير وتسريع الابتكار.',
            scheduleBtn: 'حجز استشارة',
            learnBtn: 'اعرف المزيد'
        },
        story: {
            title: 'تحديك البنيوي',
            subtitle: 'من التعقيد إلى الثقة',
            stages: {
                challenge: {
                    number: '01',
                    title: 'الأنظمة الحديثة معقدة',
                    description: 'بنيتك التحتية معقدة وحرجة. التوقف يكلف المال. انتهاكات الأمان تكلف الثقة. التوسع مكلف. النشر اليدوي عرضة للأخطاء وبطيء.',
                    points: ['التبعيات الحرجة في كل مكان', 'التوسع يصبح مكلفا بشكل كبير', 'العمليات اليدوية تولد أخطاء', 'الأمان يتطلب حذرا مستمرا']
                },
                guide: {
                    number: '02',
                    title: 'التوجيه الخبير في كل خطوة',
                    description: 'لا تضطر للقيام بذلك وحدك. يقيّم خبراؤنا حالتك الحالية ويصممون خارطة طريق التحول ويرشدونك في التنفيذ.',
                    points: ['استشارة وتقييم الخبراء', 'خارطة طريق تحول مخصصة', 'دعم عملي للتنفيذ', 'أفضل الممارسات والمنهجيات']
                },
                transformation: {
                    number: '03',
                    title: 'أنظمة قوية وآلية',
                    description: 'النتيجة؟ نشر آلي. مهام يدوية أقل. أنظمة تتوسع بسلاسة. بنية تحتية آمنة افتراضيا. فرق تنام بسلام.',
                    points: ['التخلص من هدر الوقت اليدوي', 'النشر والتوسع الآلي', 'الأمان والامتثال بالتصميم', 'أنظمة موثوقة يمكنك الاعتماد عليها']
                }
            }
        },
        techMarquee: {
            title: 'التقنيات الأساسية',
            description: 'نستخدم مجموعة حديثة من التقنيات الرائدة لبناء حلول قوية وقابلة للتوسع لعملائنا.'
        },
        services: {
            title: 'مركز مزايا لا مثيل لها',
            description: 'من مجموعة المواهب العميقة إلى النظام البيئي التكنولوجي المزدهر، تقدم تونس مزيجًا فريدًا من الفوائد للشركات التقنية العالمية.',
            talent: {
                title: 'مواهب من الدرجة الأولى',
                desc: 'الوصول إلى مجموعة متنامية من المهندسين متعددي اللغات ذوي المهارات العالية.'
            },
            cost: {
                title: 'فعالية التكلفة',
                desc: 'استفد من التكاليف التشغيلية التنافسية دون المساس بالجودة.'
            },
            location: {
                title: 'الموقع الاستراتيجي',
                desc: 'توافق مثالي للمنطقة الزمنية للتعاون السلس.'
            },
            ecosystem: {
                title: 'نظام بيئي مزدهر',
                desc: 'بيئة داعمة مع حوافز حكومية ومراكز ابتكار.'
            },
            pillars: {
                devops: {
                    title: 'تحول DevOps',
                    tagline: 'بسط خط أنابيب التسليم الخاص بك',
                    desc: 'سرع تسليم برمجياتك مع خطوط CI/CD قوية، والبنية التحتية كرمز، وتنسيق الحاويات.',
                    features: ['أتمتة خط أنابيب CI/CD', 'البنية التحتية كرمز (IaC)', 'Kubernetes & Docker', 'تطبيق GitOps']
                },
                cloud: {
                    title: 'الهندسة المعمارية السحابية',
                    tagline: 'قابلة للتوسع، آمنة، وفعالة من حيث التكلفة',
                    desc: 'صمم وانتقل إلى معماريات سحابية أصلية تتوسع مع عملك مع تحسين التكاليف.',
                    features: ['الترحيل السحابي (AWS/Azure/GCP)', 'معمارية Serverless', 'FinOps وتحسين التكاليف', 'استراتيجية السحابة المتعددة']
                },
                mlops: {
                    title: 'MLOps والذكاء الاصطناعي',
                    tagline: 'من النموذج إلى الإنتاج، أسرع',
                    desc: 'سد الفجوة بين علم البيانات والعمليات مع خطوط ML المؤتمتة وتقديم النماذج القابل للتوسع.',
                    features: ['خطوط ML المؤتمتة', 'تقديم ومراقبة النماذج', 'متاجر الميزات', 'إدارة مجموعات GPU']
                },
                sre: {
                    title: 'هندسة موثوقية الموقع',
                    tagline: 'وقت تشغيل وأداء مضمونان',
                    desc: 'تأكد من أن أنظمتك موثوقة وقابلة للتوسع وقابلة للمراقبة مع ممارسات SRE لدينا.',
                    features: ['مراقبة وتنبيهات 24/7', 'الاستجابة للحوادث', 'تعريف SLO/SLI', 'تحسين الأداء']
                },
                security: {
                    title: 'DevSecOps',
                    tagline: 'الأمان بسرعة الكود',
                    desc: 'ادمج الأمان في كل مرحلة من دورة التطوير الخاصة بك دون إبطاء التسليم.',
                    features: ['فحص الأمان الآلي', 'أتمتة الامتثال', 'إدارة الأسرار', 'تقييم الثغرات الأمنية']
                }
            }
        },
        cta: {
            title: 'هل أنت مستعد للاستفادة من مواهبنا؟',
            description: 'دع ديفأورا تربطك بأفضل مهندسي DevOps و MLOps لتوسيع عملياتك.',
            button: 'ابدأ مشروعًا مع مواهبنا'
        },
        footer: {
            description: 'تمكين الشركات بحلول DevOps و MLOps المتطورة.',
            company: 'الشركة',
            aboutUs: 'من نحن',
            services: 'الخدمات',
            careers: 'الوظائف',
            resources: 'الموارد',
            blog: 'المدونة',
            caseStudies: 'دراسات الحالة',
            contact: 'اتصل بنا',
            connect: 'تواصل',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الخدمة',
            rights: '© 2024 ديفأورا. جميع الحقوق محفوظة.'
        },
        contact: {
            title: 'لنبني معًا',
            description: 'سواء كان لديك سؤال حول خدماتنا أو تريد مناقشة مشروع، نحن جاهزون للمساعدة.',
            scheduleTitle: 'جدولة استشارة مجانية',
            scheduleDesc: 'جدول مكالمة مجانية لمدة 30 دقيقة مع خبراء DevOps لدينا لمناقشة احتياجاتك المحددة.',
            scheduleBtn: 'جدول الآن',
            otherWays: 'طرق أخرى للتواصل',
            otherDesc: 'تواصل معنا مباشرة أو تابع رحلتنا على وسائل التواصل الاجتماعي.',
            formTitle: 'أرسل لنا رسالة',
            name: 'اسمك',
            namePlaceholder: 'أدخل اسمك الكامل',
            company: 'الشركة',
            companyPlaceholder: 'أدخل اسم شركتك',
            email: 'البريد الإلكتروني للعمل',
            emailPlaceholder: 'أدخل بريدك الإلكتروني للعمل',
            inquiryType: 'نوع الاستفسار',
            message: 'الرسالة',
            messagePlaceholder: 'كيف يمكننا المساعدة؟',
            sendBtn: 'إرسال الرسالة',
            inquiryTypes: {
                general: 'استفسار عام',
                project: 'عرض مشروع',
                partnership: 'شراكة',
                careers: 'وظائف'
            }
        },
        about: {
            title: 'عن ديفأورا',
            intro: 'ديفأورا هي وكالة DevOps و MLOps رائدة مكرسة لمساعدة الشركات على تحديث بنيتها التحتية وتسريع خطوط التطوير الخاصة بها.',
            mission: 'مهمتنا',
            missionText: 'سد الفجوة بين تحديات البنية التحتية المعقدة والتميز التشغيلي السلس. نحن نؤمن بالأتمتة وقابلية التوسع والأمان كأعمدة لتسليم البرمجيات الحديثة.',
            vision: 'رؤيتنا',
            visionText: 'أن نكون الشريك العالمي المفضل للشركات التي تتطلع إلى الاستفادة من أفضل المواهب الهندسية، وتعزيز ثقافة الابتكار والتحسين المستمر.',
            whyChoose: 'لماذا تختارنا؟',
            reasons: [
                'خبرة في تقنيات السحابة الأصلية',
                'سجل حافل في تحويل DevOps',
                'حلول MLOps مخصصة',
                'دعم ومراقبة على مدار الساعة',
                'استراتيجيات توسع فعالة من حيث التكلفة'
            ]
        },
        cookie: {
            title: 'نحن نستخدم ملفات تعريف الارتباط',
            description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور.',
            accept: 'قبول',
            decline: 'رفض'
        },
        chatbot: {
            greeting: 'مرحبًا! 👋 كيف يمكنني مساعدتك في احتياجات DevOps اليوم؟',
            response: 'شكرًا لتواصلك معنا! سيتواصل فريقنا معك قريبًا. في هذه الأثناء، لا تتردد في الاطلاع على صفحة خدماتنا.',
            placeholder: 'اكتب رسالة...',
            assistant: 'مساعد ديفأورا',
            online: 'متصل'
        },
        careers: {
            title: 'انضم إلى فريقنا',
            subtitle: 'ابنِ مسيرتك المهنية مع ديفأورا وشكّل مستقبل DevOps و MLOps',
            whyJoin: 'لماذا تنضم إلى ديفأورا؟',
            benefits: {
                innovative: {
                    title: 'مشاريع مبتكرة',
                    desc: 'اعمل على مشاريع DevOps و MLOps المتطورة مع شركات عالمية رائدة'
                },
                learning: {
                    title: 'التعلم المستمر',
                    desc: 'الوصول إلى الشهادات وبرامج التدريب وأحدث التقنيات'
                },
                exposure: {
                    title: 'تعرض عالمي',
                    desc: 'تعاون مع عملاء دوليين واعمل على حلول مؤثرة'
                },
                balance: {
                    title: 'توازن العمل والحياة',
                    desc: 'ترتيبات عمل مرنة وثقافة داعمة وشاملة'
                }
            },
            openPositions: 'الوظائف المتاحة',
            applyBtn: 'تقدم الآن',
            location: 'الموقع',
            remote: 'عن بُعد',
            aboutRole: 'عن الوظيفة',
            keyResponsibilities: 'المسؤوليات الرئيسية',
            requiredQualifications: 'المؤهلات المطلوبة',
            niceToHave: 'يفضل أن يكون لديك',
            whatWeOffer: 'ما نقدمه',
            requiredSkills: 'المهارات المطلوبة',
            jobs: [
                {
                    slug: 'devops-engineer',
                    title: 'مهندس DevOps',
                    description: 'بناء وصيانة خطوط CI/CD، إدارة مجموعات Kubernetes وتنفيذ البنية التحتية كرمز.',
                    aboutRole: 'انضم إلى فريق البنية التحتية لبناء وصيانة خطوط CI/CD قوية.',
                    responsibilities: [
                        'تصميم وصيانة خطوط CI/CD',
                        'إدارة مجموعات Kubernetes',
                        'تنفيذ البنية التحتية كرمز',
                        'مراقبة أداء النظام',
                        'ضمان أمن البنية التحتية',
                        'التعاون مع فرق التطوير',
                        'أتمتة المهام المتكررة'
                    ],
                    qualifications: [
                        'درجة في علوم الكمبيوتر',
                        '3-5 سنوات خبرة في DevOps',
                        'خبرة قوية مع Kubernetes',
                        'إتقان لغة برمجة نصية',
                        'خبرة في IaC',
                        'معرفة بالمنصات السحابية',
                        'الشبكات والأمن'
                    ],
                    niceToHave: [
                        'شهادات (CKA, AWS)',
                        'أدوات المراقبة',
                        'Service Mesh',
                        'GitOps',
                        'أدوات الأمن'
                    ],
                    benefits: [
                        'راتب تنافسي',
                        'تأمين صحي',
                        'ساعات عمل مرنة',
                        'ميزانية تدريب',
                        'مكتب حديث',
                        'فرص نمو وظيفي'
                    ]
                },
                {
                    slug: 'mlops-engineer',
                    title: 'مهندس MLOps',
                    description: 'تصميم ونشر خطوط ML، إدارة دورة حياة النماذج وضمان بنية تحتية ML قابلة للتوسع.',
                    aboutRole: 'انضم إلى فريق ML لتصميم وصيانة خطوط ML في الإنتاج.',
                    responsibilities: [
                        'بناء خطوط ML',
                        'تنفيذ ممارسات MLOps',
                        'مراقبة أداء النماذج',
                        'أتمتة إعادة التدريب',
                        'إدارة بنية ML التحتية',
                        'التعاون مع علماء البيانات'
                    ],
                    qualifications: [
                        'درجة في علوم الكمبيوتر',
                        '3+ سنوات خبرة MLOps',
                        'دورة حياة ML',
                        'أطر عمل ML',
                        'Python',
                        'Docker و Kubernetes',
                        'منصات التقديم'
                    ],
                    niceToHave: [
                        'خدمات ML السحابية',
                        'مراقبة النماذج',
                        'Feature stores',
                        'تدريب موزع',
                        'AutoML'
                    ],
                    benefits: [
                        'راتب تنافسي',
                        'أدوات ML حديثة',
                        'مؤتمرات وتدريب',
                        'عمل مرن',
                        'فوائد صحية',
                        'فريق تعاوني'
                    ]
                },
                {
                    slug: 'cloud-architect',
                    title: 'مهندس معماري سحابي',
                    description: 'تصميم حلول السحابة الأصلية، تحسين البنية التحتية السحابية وقيادة مشاريع الترحيل السحابي.',
                    aboutRole: 'قُد تصميم وتنفيذ الحلول السحابية الأصلية.',
                    responsibilities: [
                        'تصميم حلول سحابية',
                        'قيادة ترحيل السحابة',
                        'تحسين التكاليف',
                        'تنفيذ الأمن',
                        'توثيق فني',
                        'توجيه فني'
                    ],
                    qualifications: [
                        'درجة في علوم الكمبيوتر',
                        '5+ سنوات هندسة سحابية',
                        'خبرة في منصة سحابية',
                        'شبكات وأمن',
                        'IaC',
                        'تواصل ممتاز',
                        'شهادات سحابية'
                    ],
                    niceToHave: [
                        'خبرة متعددة السحابة',
                        'TOGAF',
                        'FinOps',
                        'Serverless',
                        'استشارات'
                    ],
                    benefits: [
                        'راتب متميز',
                        'ميزانية شهادات',
                        'جدول مرن',
                        'تأمين عائلي',
                        'مكافآت',
                        'قيادة'
                    ]
                },
                {
                    slug: 'site-reliability-engineer',
                    title: 'مهندس موثوقية الموقع',
                    description: 'ضمان موثوقية النظام، تنفيذ حلول المراقبة وتحسين الأداء على نطاق واسع.',
                    aboutRole: 'انضم لفريق SRE لضمان موثوقية وأداء أنظمتنا.',
                    responsibilities: [
                        'تصميم أنظمة مراقبة',
                        'إدارة الحوادث',
                        'تحليل ما بعد الحادث',
                        'تحسين الأداء',
                        'أتمتة العمليات',
                        'تحديد SLIs و SLOs'
                    ],
                    qualifications: [
                        'درجة في علوم الكمبيوتر',
                        '3-5 سنوات SRE/DevOps',
                        'برمجة (Python, Go)',
                        'مراقبة',
                        'Linux وشبكات',
                        'إدارة حوادث'
                    ],
                    niceToHave: [
                        'Chaos engineering',
                        'اختبار الأداء',
                        'قواعد بيانات',
                        'تخطيط السعة',
                        'Open source'
                    ],
                    benefits: [
                        'تعويض تنافسي',
                        'تعويض المناوبات',
                        'ساعات مرنة',
                        'تطوير مهني',
                        'فوائد صحية',
                        'توازن الحياة والعمل'
                    ]
                },
                {
                    slug: 'devops-consultant',
                    title: 'مستشار DevOps',
                    description: 'توجيه العملاء خلال تحول DevOps، تنفيذ أفضل الممارسات وتقديم التدريب.',
                    aboutRole: 'ساعد العملاء في تحويل ممارسات DevOps الخاصة بهم.',
                    responsibilities: [
                        'تقييم نضج DevOps',
                        'تصميم خارطة طريق',
                        'تنفيذ CI/CD',
                        'تقديم ورش عمل',
                        'دعم التنفيذ',
                        'توثيق'
                    ],
                    qualifications: [
                        'درجة في علوم الكمبيوتر',
                        '5+ سنوات DevOps',
                        'مهارات استشارية',
                        'عرض وتواصل',
                        'أدوات CI/CD',
                        'Agile و DevOps',
                        'استقلالية'
                    ],
                    niceToHave: [
                        'شهادات',
                        'خبرة استشارية',
                        'قطاعات متعددة',
                        'خبرة تدريب',
                        'تعدد لغات'
                    ],
                    benefits: [
                        'راتب متميز ومكافآت',
                        'فرص سفر',
                        'ميزانية تدريب',
                        'عمل مرن',
                        'برامج رفاهية',
                        'مسار وظيفي'
                    ]
                },
                {
                    slug: 'backend-engineer',
                    title: 'مهندس Backend',
                    description: 'تطوير خدمات backend قابلة للتوسع، APIs ومicroservices باستخدام أطر عمل حديثة.',
                    aboutRole: 'ابنِ خدمات backend قوية وقابلة للتوسع.',
                    responsibilities: [
                        'تصميم APIs',
                        'كود نظيف',
                        'تحسين الأداء',
                        'مسا دقة',
                        'تكامل',
                        'مراجعة الكود'
                    ],
                    qualifications: [
                        'درجة في علوم الكمبيوتر',
                        '3+ سنوات backend',
                        'لغة backend',
                        'تصميم API',
                        'قواعد بيانات',
                        'Caching',
                        'Auth'
                    ],
                    niceToHave: [
                        'Microservices',
                        'Message queues',
                        'GraphQL',
                        'DDD',
                        'Open source'
                    ],
                    benefits: [
                        'راتب تنافسي',
                        'ساعات مرنة',
                        'عن بُعد',
                        'ميزانية تعلم',
                        'تأمين صحي',
                        'أنشطة فريق'
                    ]
                }
            ]
        }
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Detect browser language
        const detectLanguage = () => {
            const stored = localStorage.getItem('language');
            if (stored && translations[stored]) {
                return stored;
            }

            const browserLang = navigator.language.split('-')[0];
            return translations[browserLang] ? browserLang : 'en';
        };

        setLanguage(detectLanguage());
        setIsLoading(false);
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);

        // Update HTML dir attribute for RTL languages
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, isLoading }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}



