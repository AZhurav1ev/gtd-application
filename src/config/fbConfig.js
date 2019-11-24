import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import  'firebase/database'

var config = {
    apiKey: "AIzaSyDtUT-O5PsS6Mzrq8RV9iF6IUXkliagHWc",
    authDomain: "gtd-pro.firebaseapp.com",
    databaseURL: "https://gtd-pro.firebaseio.com",
    projectId: "gtd-pro",
    storageBucket: "gtd-pro.appspot.com",
    messagingSenderId: "993351857938",
    appId: "1:993351857938:web:e450fe3f494f99ae2aa5cb"
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();


export default firebase;