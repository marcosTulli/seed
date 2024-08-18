const ObjectId = require('mongodb').ObjectId;

const users = [
      {
            _id: new ObjectId(),
            name: 'Test User',
            password: 'tuki',
            email: 'test@test.com',
            phone: "111111",
            location: "Test, UK",
            availableLanguages: ["en", "es"],
            cvs: [
                  { cvEn: 'Test User CV-en' },
                  { cvEs: 'Test User CV-en' }
            ],
            network: {
                  linkedin: {
                        display: '/in/test-user',
                        url: 'http://linkedin.com/in/test-user'
                  },
                  github: {
                        display: '/testUser',
                        url: 'http://github.com/testUser',
                  },
            },
            info: {
                  en: {
                        candidateTitle: "Front-End Developer",
                        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi. Suscipit tellus mauris a diam maecenas sed. Vitae congue eu consequat ac felis donec et. Tortor at risus viverra adipiscing at. Dictum fusce ut placerat orci. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Eget nunc scelerisque viverra mauris.",
                        languages: [
                              { language: 'Spanish', level: 'Native', flag: 'spain' },
                              { language: 'English', level: 'C2', flag: 'uk' }
                        ]

                  },
                  es: {
                        candidateTitle: "Desarrollador Front-End",
                        about: "Aliquam nulla facilisi cras fermentum odio eu feugiat. Vitae elementum curabitur vitae nunc. Lacus viverra vitae congue eu consequat ac felis. Libero volutpat sed cras ornare arcu dui vivamus. Sapien eget mi proin sed libero enim sed faucibus turpis",
                        languages: [
                              { language: 'Español', level: 'Nativo', flag: 'spain' },
                              { language: 'Inglés', level: 'C2', flag: 'uk' }
                        ]

                  }
            }
      },
      {
            _id: new ObjectId(),
            name: 'Marcos Tulli',
            password: 'tuki',
            email: 'marcostulli@hotmail.com',
            phone: "+5492236833631",
            location: "Mar del Plata, Argentina",
            availableLanguages: ["en", "es"],
            cvs: [
                  { cvEn: 'Marcos Tulli CV-en' },
                  { cvEs: 'Marcos Tulli CV-es' }
            ],
            network: {
                  linkedin: {
                        display: '/in/marcos-tulli',
                        url: 'http://linkedin.com/in/marcos-tulli'
                  },
                  github: {
                        display: '/marcosTulli',
                        url: 'http://github.com/marcosTulli',
                  },
            },
            info: {
                  en: {
                        candidateTitle: "Front-End Developer",
                        about: "With a background in customer service and technical support, a Bachelor's in Technology, and a passion for continuously learning and evolving in my field, I bring a unique combination of empathy, teamwork, and technical skills to the table. Dedicated and ambitious, I am always striving to meet my goals and commitments on time.",
                        languages: [
                              { language: 'Spanish', level: 'Native', flag: 'spain' },
                              { language: 'English', level: 'C2', flag: 'uk' }
                        ]
                  },
                  es: {
                        candidateTitle: "Desarrollador Front-End",
                        about: "Con experiencia en servicio al cliente y soporte técnico, una licenciatura en tecnología y una pasión por aprender y evolucionar continuamente en mi campo, aporto una combinación única de empatía, trabajo en equipo y habilidades técnicas. Dedicado y ambicioso, siempre me esfuerzo por cumplir mis metas y compromisos a tiempo.",
                        languages: [
                              { language: 'Español', level: 'Nativo', flag: 'spain' },
                              { language: 'Inglés', level: 'C2', flag: 'uk' }
                        ]
                  }
            }
      }
];

module.exports = users;