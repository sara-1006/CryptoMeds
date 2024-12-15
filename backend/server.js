const express = require('express');
const bodyParser = require('body-parser');
const { Web3 } = require('web3');
const CryptoMedsSupplyChain = require('./CryptoMedsSupplyChain.json'); // ABI file
const firebaseAdmin = require('firebase-admin');
require('dotenv').config(); // To use environment variables

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebase-adminsdk.json'); // Your Firebase service account JSON
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://<cryptomeds-388fe>.firebaseio.com' // Replace with your Firebase project URL
});

const db = firebaseAdmin.firestore();

const app = express();
app.use(bodyParser.json());

// Connect to Ethereum using Web3 (Ganache or other Ethereum node)
const web3 = new Web3('http://127.0.0.1:7545'); // Ganache RPC URL
const contract = new web3.eth.Contract(CryptoMedsSupplyChain.abi, process.env.CONTRACT_ADDRESS);

// Endpoint to add a new medication
app.post('/addMedication', async (req, res) => {
  const { name, manufacturer, distributor, pharmacy, patient, status } = req.body;
  
  try {
    // Get accounts from Ganache
    const accounts = await web3.eth.getAccounts();

    // Add medication to the Ethereum blockchain
    await contract.methods.addMedication(name, manufacturer, distributor, pharmacy, patient, status)
      .send({ from: accounts[0] });

    // Save medication to Firebase Firestore
    const medicationRef = db.collection('medications').doc();
    await medicationRef.set({
      name,
      manufacturer,
      distributor,
      pharmacy,
      patient,
      timestamp: Date.now(),
      status,
    });

    res.status(200).send('Medication added successfully');
  } catch (error) {
    console.error('Error adding medication:', error);
    res.status(500).send('Error adding medication');
  }
});

// Endpoint to fetch all medications
app.get('/medications', async (req, res) => {
  try {
    const medicationsSnapshot = await db.collection('medications').get();
    const medications = medicationsSnapshot.docs.map(doc => doc.data());
    res.status(200).json(medications);
  } catch (error) {
    console.error('Error fetching medications:', error);
    res.status(500).send('Error fetching medications');
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Backend is running on port 5000');
});
