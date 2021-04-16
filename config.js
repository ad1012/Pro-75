import firebase from 'firebase'
require("@firebase/firestore")


//Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyDGhLpimeb8oQhs6ApN4c4lWUMEe-tGrCU",
    authDomain: "story-hub-4af32.firebaseapp.com",
    projectId: "story-hub-4af32",
    storageBucket: "story-hub-4af32.appspot.com",
    messagingSenderId: "891343008699",
    appId: "1:891343008699:web:cd2b183c106f52e4ca0a9e"
  };


//Initialize firebase
firebase.intializeApp(firebaseConfig);

export default firebase.firestore()