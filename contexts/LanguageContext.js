'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
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
        techMarquee: {
            title: 'Core Technologies',
            description: 'We leverage a modern stack of leading technologies to build robust and scalable solutions for our clients.'
        },
        services: {
            title: 'A Hub of Unmatched Advantages',
            description: 'From a deep talent pool to a thriving tech ecosystem, Tunisia offers a unique combination of benefits for global tech companies.',
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
            }
        },
        cta: {
            title: 'Ready to Leverage Tunisia\'s Tech Talent?',
            description: 'Let Devaura connect you with the best DevOps and MLOps engineers to scale your operations.',
            button: 'Start a Project with Tunisian Talent'
        },
        footer: {
            description: 'Empowering businesses with cutting-edge DevOps and MLOps solutions.',
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
            visionText: 'To be the global partner of choice for companies looking to leverage the best engineering talent from Tunisia and beyond, fostering a culture of innovation and continuous improvement.',
            whyChoose: 'Why Choose Us?',
            reasons: [
                'Expertise in Cloud Native Technologies',
                'Proven Track Record in DevOps Transformation',
                'Dedicated MLOps Solutions',
                '24/7 Support and Monitoring',
                'Cost-Effective Scaling Strategies'
            ]
        },
        cookie: {
            title: 'We use cookies',
            description: 'We use cookies to enhance your browsing experience and analyze our traffic.',
            accept: 'Accept',
            decline: 'Decline'
        },
        chatbot: {
            greeting: 'Hi there! 👋 How can I help you with your DevOps needs today?',
            response: 'Thanks for reaching out! Our team will get back to you shortly. In the meantime, feel free to check out our services page.',
            placeholder: 'Type a message...',
            assistant: 'Devaura Assistant',
            online: 'Online'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            contact: 'Contact',
            schedule: 'Planifier une Consultation'
        },
        hero: {
            title: 'Sécurisez Votre',
            titleHighlight: 'Infrastructure avec Devaura',
            description: 'Nous fournissons des solutions expertes DevOps et MLOps pour rationaliser votre cycle de développement et accélérer l\'innovation.',
            scheduleBtn: 'Planifier une Consultation',
            learnBtn: 'En Savoir Plus'
        },
        techMarquee: {
            title: 'Technologies Principales',
            description: 'Nous utilisons une pile moderne de technologies de pointe pour créer des solutions robustes et évolutives pour nos clients.'
        },
        services: {
            title: 'Un Centre d\'Avantages Inégalés',
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
            }
        },
        cta: {
            title: 'Prêt à Exploiter les Talents Technologiques Tunisiens?',
            description: 'Laissez Devaura vous connecter avec les meilleurs ingénieurs DevOps et MLOps pour développer vos opérations.',
            button: 'Démarrer un Projet avec des Talents Tunisiens'
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
            visionText: 'Être le partenaire mondial de choix pour les entreprises cherchant à tirer parti des meilleurs talents en ingénierie de Tunisie et d\'ailleurs, favorisant une culture d\'innovation et d\'amélioration continue.',
            whyChoose: 'Pourquoi Nous Choisir?',
            reasons: [
                'Expertise en Technologies Cloud Natives',
                'Bilan Éprouvé en Transformation DevOps',
                'Solutions MLOps Dédiées',
                'Support et Surveillance 24/7',
                'Stratégies d\'Évolution Rentables'
            ]
        },
        cookie: {
            title: 'Nous utilisons des cookies',
            description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic.',
            accept: 'Accepter',
            decline: 'Refuser'
        },
        chatbot: {
            greeting: 'Bonjour! 👋 Comment puis-je vous aider avec vos besoins DevOps aujourd\'hui?',
            response: 'Merci de nous avoir contactés! Notre équipe vous répondra sous peu. En attendant, n\'hésitez pas à consulter notre page de services.',
            placeholder: 'Tapez un message...',
            assistant: 'Assistant Devaura',
            online: 'En ligne'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            contact: 'Contacto',
            schedule: 'Programar Consulta'
        },
        hero: {
            title: 'Asegure Su',
            titleHighlight: 'Infraestructura con Devaura',
            description: 'Brindamos soluciones expertas de DevOps y MLOps para optimizar su ciclo de desarrollo y acelerar la innovación.',
            scheduleBtn: 'Programar Consulta',
            learnBtn: 'Saber Más'
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
            }
        },
        cta: {
            title: '¿Listo para Aprovechar el Talento Tecnológico de Túnez?',
            description: 'Deje que Devaura lo conecte con los mejores ingenieros de DevOps y MLOps para escalar sus operaciones.',
            button: 'Iniciar un Proyecto con Talento Tunecino'
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
            visionText: 'Ser el socio global de elección para empresas que buscan aprovechar el mejor talento de ingeniería de Túnez y más allá, fomentando una cultura de innovación y mejora continua.',
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
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            contact: 'اتصل بنا',
            schedule: 'حجز استشارة'
        },
        hero: {
            title: 'أمّن',
            titleHighlight: 'بنيتك التحتية مع ديفأورا',
            description: 'نقدم حلول DevOps و MLOps احترافية لتبسيط دورة التطوير وتسريع الابتكار.',
            scheduleBtn: 'حجز استشارة',
            learnBtn: 'اعرف المزيد'
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
            }
        },
        cta: {
            title: 'هل أنت مستعد للاستفادة من المواهب التقنية التونسية؟',
            description: 'دع ديفأورا تربطك بأفضل مهندسي DevOps و MLOps لتوسيع عملياتك.',
            button: 'ابدأ مشروعًا مع المواهب التونسية'
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
            visionText: 'أن نكون الشريك العالمي المفضل للشركات التي تتطلع إلى الاستفادة من أفضل المواهب الهندسية من تونس وخارجها، وتعزيز ثقافة الابتكار والتحسين المستمر.',
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
