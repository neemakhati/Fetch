// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcIsa0emSA_b0cFrRUpDz8Mn33aL1m4q4",
  authDomain: "events-network-cc384.firebaseapp.com",
  projectId: "events-network-cc384",
  storageBucket: "events-network-cc384.appspot.com",
  messagingSenderId: "501953481776",
  appId: "1:501953481776:web:fcfe153d78d9048294b1f5"
};

let app;
if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };