function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // For demonstration purposes, just logging the credentials
    console.log('Username: ' + username);
    console.log('Password: ' + password);

    window.location.href = "./map.html";
}

const { MongoClient } = require('mongodb');

// MongoDB Atlas connection URI
const uri = "mongodb+srv://<prub>:<prub>@cluster0.k45y8pa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Connect to the database
        const database = client.db('prueba');

        // Access the collection
        const collection = database.collection('prueba');

        // Insert a document
        await collection.insertOne({ key: 'value' });

        console.log('Document inserted successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Automatically call the main function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Attempting to connect to MongoDB Atlas...');
    main();
});
