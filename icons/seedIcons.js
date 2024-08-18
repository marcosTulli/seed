
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

const seedIcons = async () => {
    let client;
    try {
        client = new MongoClient(MONGO_URL);
        await client.connect();
        console.log('Connected to the mongo DB');
        const db = client.db(DB_NAME);
        const usersCollection = db.collection('Icons');
        await usersCollection.drop();
        await usersCollection.insertMany(iconsLocal);
    } catch (error) {
        console.error(error.stack);
    } finally {
        if (client) {
            await client.close();
        }
    }
};
// seedIcons();