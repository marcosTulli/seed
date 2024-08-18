const { MongoClient, ObjectId, Binary } = require('mongodb');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const usersLocal = require('./data/users');
const jobsLocal = require('./data/jobs');
const educationLocal = require('./data/education');
const skillsLocal = require('./data/skills');
const iconsLocal = require('./data/icons');
const { MONGO_URL, DB_NAME, OBJECTS_DB } = process.env;


const seedSkills = async () => {
    let client;
    try {
        client = new MongoClient(MONGO_URL);
        await client.connect();
        console.log('Connected to the mongo DB');
        const db = client.db(DB_NAME);
        const usersCollection = db.collection('Users');
        const educationCollection = db.collection('Skills');
        const users = await usersCollection.find().toArray();

        const skillsWithUsers = skillsLocal.map((job, index) => {
            const user = users[index % users.length];
            return {
                userId: user._id,
                ...job
            };

        });

        await educationCollection.drop();
        await educationCollection.insertMany(skillsWithUsers);

    } catch (error) {
        console.error(error.stack);
    } finally {
        if (client) {
            await client.close();
        }
    }
};

const ID = '6677099bbf292fc9277f5464';

const postSkills = async ({ skills, userId }) => {
    let client;
    try {
        client = new MongoClient(MONGO_URL);
        await client.connect();
        console.log('Connected to the mongo DB');
        const db = client.db(DB_NAME);
        const userIdObject = { userId: new ObjectId(`${userId}`) };
        const skillsCollection = db.collection('Skills');
        const userSkills = await skillsCollection.find(userIdObject).toArray();
        if (userSkills) {
            const newSkills = skills.map((skill) => ({
                _id: new ObjectId(),
                name: skill.name,
                formattedName: skill.formattedName
            }));

            console.log(userIdObject);
            await skillsCollection.updateOne(
                userIdObject,
                { $push: { skills: { $each: newSkills } } }
            );
        }
        console.log("done");


    } catch (error) {
        console.error(error.stack);
    } finally {
        if (client) {
            await client.close();
        }
    }
};

// postSkills({
//   skills: [],
//   userId: ID
// });


/*
this is my skills collection in mongodb. 

 i need to be able to post more skills to the skills array with node
i would like to be able to post an array of skills object from the client. 
and add the ids in the backend

so i would be able to do skillsservice.post([
{name:'...', formattedname:'...' },
{name:'...', formattedname:'...' }
])

skills: [
  {
    _id: new objectid(),
    userid: new objectid(),
    skills: [
    {
      _id: new objectid('66849e644c53869a66194e9e'),
      name: 'typescript',
      formattedname: 'typescript'
    },
    {
      _id: new objectid('66849e644c53869a66194e9f'),
      name: 'javascript',
      formattedname: 'javascript'
    },
    ...
    ]
  },
  {
  ...
  
  }
]

  */


const newSkills = [
    // {
    //   name: "vite",
    //   formattedName: "Vite",
    // },
    // {
    //   name: "vite",
    //   formattedName: "Vite",
    // },
    // {
    //   name: "mongoDb",
    //   formattedName: "Mongo DB",
    // },
    // {
    //   name: "mySQL",
    //   formattedName: "mySQL",
    // },
    // {
    //   name: "reactQuery",
    //   formattedName: "React Query",
    // },
    // {
    //   name: "redux",
    //   formattedName: "Redux",
    // },
    // {
    //   name: "zustand",
    //   formattedName: "Zustand",
    // },
    // {
    //   name: "fluentUi",
    //   formattedName: "Fluent UI",
    // },
    // {
    //   name: "materialUi",
    //   formattedName: "material UI",
    // },
    // {
    //   name: "chakraUi",
    //   formattedName: "chakra UI",
    // },
    // {
    //   name: "vim",
    //   formattedName: "VIM",
    // },
    // {
    //   name: "bootstrap",
    //   formattedName: "Bootstrap",
    // },
    // {
    //   name: "figma",
    //   formattedName: "Figma",
    // },
    // {
    //   name: "git",
    //   formattedName: "Git",
    // },
    // {
    //   name: "github",
    //   formattedName: "Github",
    // },
    // {
    //   name: "gitlab",
    //   formattedName: "Gitlab",
    // },
    // {
    //   name: "linux",
    //   formattedName: "Linux",
    // },
    // {
    //   name: "azure",
    //   formattedName: "Azure",
    // },
    // {
    //   name: "vercel",
    //   formattedName: "Vercel",
    // },
    // {
    //   name: "testing",
    //   formattedName: "Testing",
    // },
    // {
    //   name: "jenkins",
    //   formattedName: "Jenkins",
    // },
    // {
    //   name: "bash",
    //   formattedName: "Bash",
    // },

];














// seedSkills();


// I'll keep this for testing purposes, but I won't be seeding the db with object no more. 

// const seedIcon = async () => {
//   let client;
//   try {
//     client = new MongoClient(MONGO_URL);
//     await client.connect();
//     console.log('Connected to the mongo DB');

//     const db = client.db(OBJECTS_DB);
//     const iconsCollection = db.collection('icons');

//     const iconsDir = path.join(__dirname, 'public/icons');
//     const dirs = fs.readdirSync(iconsDir);


//     const iconsFiles = dirs.flatMap((dir) => {
//       const dirPath = path.join(iconsDir, dir);
//       const files = fs.readdirSync(dirPath);
//       return files.map(file => ({ dir, file }));
//     });

//     await iconsCollection.drop();

//     const iconDocuments = iconsFiles.map(({ dir, file }) => {
//       const filePath = path.join(__dirname, `public/icons/${dir}/${file}`);
//       const fileBuffer = fs.readFileSync(filePath);
//       return {
//         _id: new ObjectId(),
//         name: file,
//         file: fileBuffer,
//         type: dir,
//       };
//     });


//     await iconsCollection.insertMany(iconDocuments);

//   } catch (error) {
//     console.error(error.stack);
//   } finally {
//     if (client) {
//       await client.close();
//     }
//   }
// };

// seedIcon();