const ObjectId = require('mongodb').ObjectId;

const educationLocal = [
    {
        education: [
            {
                _id: new ObjectId(),
                url: "",
                en: {
                    title: "tellus cras",
                    content: "Aliquet eget sit amet adipiscing enim eu turpis",
                },
                es: {
                    title: "Gravida in fermentum",
                    content: "Egestas sed sed risus pretium quam vulputate dignissim suspendisse",
                }
            },
            {
                _id: new ObjectId(),
                url: "",
                en: {
                    title: "Sed risus pretium",
                    content: "Nisi lacus sed viverra tellus",
                },
                es: {
                    title: "Non arcu risus",
                    content: "Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere",
                }
            }
        ],
    },
    {

        education: [
            {
                _id: new ObjectId(),
                url: "",
                en: {
                    title: "Bachelor's degree in computer programming",
                    content: "Teclab instituto tencico",
                },
                es: {
                    title: "Tecnicatura en Programacion",
                    content: "Teclab instituto tencico",
                }
            },
            {
                _id: new ObjectId(),
                url: "",
                en: {
                    title: "PluralSight path",
                    content: "150+ hours of Front-End development path",
                },
                es: {
                    title: "Curso de Pluralsight",
                    content: "150+ horas de curso de desarrollo front-end en React.js ",
                }
            },
            {
                _id: new ObjectId(),
                url: "https://www.credly.com/badges/5d54f43d-768f-4d3f-89d8-8fcb3678c89e",
                en: {
                    title: "Cloud Computing",
                    content: "AZ-900 certified",
                },
                es: {
                    title: "Desarrollo en la nube ",
                    content: "Certificacion AZ-900",
                }
            },
            {
                _id: new ObjectId(),
                url: "/reactCert.pdf",
                en: {
                    title: "React",
                    content: "National Technological University",
                },
                es: {
                    title: "React",
                    content: "Universidad Tecnologica Nacional",
                }
            },
        ],
    },
];

module.exports = educationLocal;