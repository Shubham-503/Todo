
const { Client,Users } = require('node-appwrite');

const client = new Client()
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('638423a96dc85606a393')                // Your project ID
    .setKey('b872fd3ccdf3d80fda7c34f3fd6aab53e62a20d1ee1524ce930c6749787d05fbd1af49cfc38822cda413d7fb6c8529a6dbae212fd7016e81e88ccf704d7556de04c6d4b92613e157d852d0bdf768b96ed8b5ce25a3c0e431a45fcba65e9e8b842ee5537bd6004efe2d52c11f77fc4a23fd6810bd3acaaa3ee79584aff1d238e8');         // Your secret API key

    const users = new Users(client);

// const { Client, Account, ID } =  require("appwrite");

// const client = new Client()
//     .setEndpoint('http://localhost/') // Your API Endpoint
//     .setProject('638423a96dc85606a393');               // Your project ID

// const account = new Account(client);

// module.exports=account
module.exports= users