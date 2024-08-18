const ObjectId = require('mongodb').ObjectId;

const jobs = [
    {
        experiences: [
            {
                _id: new ObjectId(),
                comapnyUrl: 'https: //www.google.com/',
                activePeriod: { startDate: 'March', endDate: 'April' },
                companyName: 'Test Company One',
                companyLogo: '/test.png',
                info: {
                    en: {
                        position: 'Leo duis ut diam',
                        tasks: [
                            { _id: new ObjectId(), task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
                            { _id: new ObjectId(), task: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa' },
                            { _id: new ObjectId(), task: 'Excepteur sint occaecat cupidatat non proident in culpa qui officia deserunt mollit anim id est laborum' },
                        ]
                    },
                    es: {
                        position: 'In pellentesque massa',
                        tasks: [
                            { _id: new ObjectId(), task: 'Ac placerat vestibulum lectus mauris ultrices eros' },
                            { _id: new ObjectId(), task: 'Fringilla ut morbi tincidunt augue interdum velit euismod in. Aliquet enim tortor at auctor urna nunc id cursus metus. Lectus quam id leo in' },
                            { _id: new ObjectId(), task: 'Dui nunc mattis enim ut tellus elementum' },
                        ]
                    },
                }
            },
            {
                _id: new ObjectId(),
                comapnyUrl: 'https: //www.google.com/',
                activePeriod: { startDate: 'March', endDate: 'April' },
                companyName: 'Test Company Two',
                companyLogo: '/test.png',
                info: {
                    en: {
                        position: 'Leo duis ut diam',
                        tasks: [
                            { _id: new ObjectId(), task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
                            { _id: new ObjectId(), task: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa' },
                            { _id: new ObjectId(), task: 'Excepteur sint occaecat cupidatat non proident in culpa qui officia deserunt mollit anim id est laborum' },
                        ]
                    },
                    es: {
                        position: 'In pellentesque massa',
                        tasks: [
                            { _id: new ObjectId(), task: 'Ac placerat vestibulum lectus mauris ultrices eros' },
                            { _id: new ObjectId(), task: 'Fringilla ut morbi tincidunt augue interdum velit euismod in. Aliquet enim tortor at auctor urna nunc id cursus metus. Lectus quam id leo in' },
                            { _id: new ObjectId(), task: 'Dui nunc mattis enim ut tellus elementum' },
                        ]
                    },
                }
            },
            {
                _id: new ObjectId(),
                comapnyUrl: 'https: //www.google.com/',
                activePeriod: { startDate: 'March', endDate: 'April' },
                companyName: 'Test Company Three',
                companyLogo: '/test.png',
                info: {
                    en: {
                        position: 'Leo duis ut diam',
                        tasks: [
                            { _id: new ObjectId(), task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
                            { _id: new ObjectId(), task: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa' },
                            { _id: new ObjectId(), task: 'Excepteur sint occaecat cupidatat non proident in culpa qui officia deserunt mollit anim id est laborum' },
                        ]
                    },
                    es: {
                        position: 'In pellentesque massa',
                        tasks: [
                            { _id: new ObjectId(), task: 'Ac placerat vestibulum lectus mauris ultrices eros' },
                            { _id: new ObjectId(), task: 'Fringilla ut morbi tincidunt augue interdum velit euismod in. Aliquet enim tortor at auctor urna nunc id cursus metus. Lectus quam id leo in' },
                            { _id: new ObjectId(), task: 'Dui nunc mattis enim ut tellus elementum' },
                        ]
                    },
                }
            },

        ],
    },
    {
        experiences: [
            {
                _id: new ObjectId(),
                comapnyUrl: 'https://mercapsoftware.com/',
                activePeriod: { startDate: '2024-05', endDate: '' },
                companyName: 'Mercap',
                companyLogo: '',
                info: {
                    en: {
                        position: 'Front-End Developer',
                        tasks: [
                            { _id: new ObjectId(), task: "Optimized React components with new UI, collaborating with UI developer using React Bootstrap, Vite, and testing tools to enhance user experience." },
                            { _id: new ObjectId(), task: "Implemented state management with Zustand and data fetching strategies using React Query, improving performance and maintainability." },
                            { _id: new ObjectId(), task: "Developed and refined various components (forms, offcanvas) and created custom hooks for sorting lists, enhancing functionality and code reusability." },
                            { _id: new ObjectId(), task: "Streamlined version releases using Jenkins, ensuring efficient and automated deployment of updates." },
                        ]
                    },
                    es: {
                        position: 'Desarrollador Front-End',
                        tasks: [
                            { _id: new ObjectId(), task: "Optimicé componentes de React con nueva interfaz de usuario, colaborando con desarrollador de UI utilizando React Bootstrap, Vite y herramientas de prueba para mejorar la experiencia del usuario." },
                            { _id: new ObjectId(), task: "Implementé gestión de estado con Zustand y estrategias de obtención de datos con React Query, mejorando el rendimiento y la mantenibilidad." },
                            { _id: new ObjectId(), task: "Desarrollé y refiné varios componentes (formularios, offcanvas) y creé ganchos personalizados para ordenar listas, mejorando la funcionalidad y la reutilización del código." },
                            { _id: new ObjectId(), task: "Mejoré la gestión de versiones utilizando Jenkins, garantizando una implementación eficiente y automatizada de actualizaciones." },
                        ]
                    }
                }
            },
            {
                _id: new ObjectId(),
                comapnyUrl: 'https://www.raona.com/',
                activePeriod: { startDate: '2022-11', endDate: '2024-05' },
                companyName: 'Raona',
                companyLogo: '/raona.png',
                info: {
                    en: {
                        position: 'Front-End Developer',
                        tasks: [
                            { _id: new ObjectId(), task: "Led the front-end development of a nationwide waste collection client's admin dashboard using Next.js, TypeScript, and Fluent UI, collaborating closely with Spanish back-end teams through daily meetings." },
                            { _id: new ObjectId(), task: "Contributed to the front-end development of a nationwide energy provider's admin dashboard, utilizing Vitte, Chakra UI, Zustand, and React Query to optimize state management and data retrieval." },
                            { _id: new ObjectId(), task: 'Collaborated with international teams to deliver high-quality products on time, utilizing Agile methodologies and version control systems like Azure DevOps.' },
                            { _id: new ObjectId(), task: 'Developed and debugged custom components for SharePoint framework.' },
                        ]
                    },
                    es: {
                        position: 'Desarrollador Front-End',
                        tasks: [
                            { _id: new ObjectId(), task: "Dirigí el desarrollo front-end del panel de administración de un cliente nacional de recolección de residuos en España utilizando Next.js, TypeScript y Fluent UI, colaborando estrechamente con equipos back-end españoles a través de reuniones diarias." },
                            { _id: new ObjectId(), task: "Colaboré en el desarrollo front-end del panel de administración de un proveedor nacional de energía en España, utilizando Vitte, Chakra UI, Zustand y React Query para optimizar la gestión del estado y la recuperación de datos." },
                            { _id: new ObjectId(), task: 'Lideré con éxito el desarrollo front-end para dos paneles de administración, aprovechando tecnologías como Vitte, Chakra UI, Zustand y React Query para impulsar una gestión eficiente del estado y la recuperación de datos.' },
                            { _id: new ObjectId(), task: 'Desarrollé y depuré componentes personalizados para SharePoint framework .' },
                        ]
                    }
                }
            },
            {
                _id: new ObjectId(),
                comapnyUrl: 'https://www.softtek.com/',
                activePeriod: { startDate: '2022-07', endDate: '2022-11' },
                companyName: 'Softtek',
                companyLogo: '/softtek.png',
                info: {
                    en: {
                        position: 'RPA Developer',
                        tasks: [
                            { _id: new ObjectId(), task: 'Analyzed business processes to identify automation opportunities, resulting in increased efficiency and productivity.' },
                            { _id: new ObjectId(), task: 'Designed and developed automated bots using RPA tools, achieving a 70% reduction in manual errors.' },
                            { _id: new ObjectId(), task: 'Implemented RPA solutions that accelerated digital transformation, resulting in a 90% reduction in processing time.' },
                            { _id: new ObjectId(), task: 'Collaborated with cross-functional teams to ensure seamless integration of RPA solutions with existing systems.' }
                        ]
                    },
                    es: {
                        position: 'Desarrollador RPA',
                        tasks: [
                            { _id: new ObjectId(), task: 'Analizé procesos comerciales para identificar oportunidades de automatización, lo que resultó en un aumento de la eficiencia y productividad.' },
                            { _id: new ObjectId(), task: 'Diseñé y desarrolló bots automatizados utilizando herramientas RPA, logrando una reducción del 70% en errores manuales.' },
                            { _id: new ObjectId(), task: 'Implementé soluciones RPA que aceleraron la transformación digital, lo que resultó en una reducción del 90% en el tiempo de procesamiento.' },
                            { _id: new ObjectId(), task: 'Colaboré con equipos multifuncionales para asegurar una integración fluida de las soluciones RPA con los sistemas existentes.' }
                        ]
                    }
                }
            },
            {
                _id: new ObjectId(),
                comapnyUrl: 'https://www.softwire.com/',
                activePeriod: { startDate: '2021-03', endDate: '2022-07' },
                companyName: 'Softwire',
                companyLogo: '',
                info: {
                    en: {
                        position: 'Front-End Developer',
                        tasks: [
                            { _id: new ObjectId(), task: 'Designed and built responsive web pages using HTML5, CSS3, and frameworks like Bootstrap, ensuring optimal user experience across various devices and screen sizes.' },
                            { _id: new ObjectId(), task: 'Developed interactive and dynamic UI components using React, enhancing user engagement and interface functionality.' },
                            { _id: new ObjectId(), task: 'Identified and fixed UI bugs using Chrome DevTools, ensuring high-quality and error-free user interfaces.' },
                            { _id: new ObjectId(), task: 'Managed code repositories using Git, collaborating with team members to ensure efficient and streamlined development processes.' }
                        ]
                    },
                    es: {
                        position: 'Desarrollador Front-End',
                        tasks: [
                            { _id: new ObjectId(), task: 'Diseñé y construí páginas web responsivas utilizando HTML5, CSS3 y frameworks como Bootstrap, garantizando una experiencia óptima del usuario en diversos dispositivos y tamaños de pantalla.' },
                            { _id: new ObjectId(), task: 'Desarrollé componentes de IU interactivos y dinámicos utilizando React, mejorando la participación del usuario y la funcionalidad de la interfaz.' },
                            { _id: new ObjectId(), task: 'Identifiqué y corregí errores de IU utilizando Chrome DevTools, garantizando interfaces de usuario de alta calidad y libres de errores.' },
                            { _id: new ObjectId(), task: 'Gestioné repositorios de código utilizando Git, colaborando con miembros del equipo para asegurar procesos de desarrollo eficientes y fluidos.' }
                        ]
                    }
                }
            }
        ]

    },
];

module.exports = jobs;
