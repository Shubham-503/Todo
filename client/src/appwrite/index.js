import { Client as Appwrite, Account } from 'appwrite';


let appwrite = new Appwrite();
appwrite.setEndpoint('http://localhost/v1').setProject('638423a96dc85606a393');
const account = new Account(appwrite);

console.log("in Appwrite")
export default account