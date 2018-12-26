import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

var config = {
    apiKey: "AIzaSyAjxSXt6_RQGZMOa9J5A_tkI8O-52SdA_8",
    authDomain: "crud-firestore-logusit.firebaseapp.com",
    databaseURL: "https://crud-firestore-logusit.firebaseio.com",
    projectId: "crud-firestore-logusit",
    storageBucket: "crud-firestore-logusit.appspot.com",
    messagingSenderId: "989545544348"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;