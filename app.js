const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB Atlas connection URI
const uri = "mongodb+srv://<prub>:<prub>@cluster0.k45y8pa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri);

// Middleware to connect to MongoDB
app.use(async (req, res, next) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).send('Error connecting to MongoDB');
    }
    next();
});

// Endpoint to connect to MongoDB explicitly
app.get('/connect-to-mongodb', async (req, res) => {
    try {
        // Access the database
        const database = client.db('your-database-name');

        // Access a specific collection
        const collection = database.collection('your-collection-name');

        // Insert a document
        await collection.insertOne({ key: 'value' });

        console.log('Document inserted successfully');

        res.send('Successfully connected to MongoDB and inserted a document.');
    } catch (error) {
        console.error('Error connecting to MongoDB or inserting document:', error);
        res.status(500).send('Error connecting to MongoDB or inserting document');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
