const users = require('../api/api')
const { ID } = require("appwrite");



const createAccountController = (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    
    // const account = new Account(client);
    
    let promise = users.create(
        ID.unique(),
        email,
        null,
        password
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });


    // const promise = account.create(
    //     ID.unique(),
    //     email,
    //     password
    // );

    // promise.then(function (response) {
    //     console.log(response);

    //     res.status(201).json(response)
        
    // }, function (error) {
    //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
    //     console.log(error);
    //     res.status(400).json(error)
    // });
}

module.exports = createAccountController
