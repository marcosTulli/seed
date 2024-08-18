
const { MongoClient } = require('mongodb');
require('dotenv').config();
const jobsLocal = require('./jobs');
const { MONGO_URL, DB_NAME } = process.env;

const seedJobs = async () => {
    let client;
    try {
        client = new MongoClient(MONGO_URL);
        await client.connect();
        console.log('Connected to the mongo DB');
        const db = client.db(DB_NAME);
        const usersCollection = db.collection('Users');
        const jobsCollection = db.collection('WorkExperiences');
        const users = await usersCollection.find().toArray();

        const jobsWithUserId = jobsLocal.map((job, index) => {
            const user = users[index % users.length];
            return {
                userId: user._id,
                ...job
            };

        });


        await jobsCollection.drop();
        await jobsCollection.insertMany(jobsWithUserId);

    } catch (error) {
        console.error(error.stack);
    } finally {
        if (client) {
            await client.close();
        }
    }
};

seedJobs();