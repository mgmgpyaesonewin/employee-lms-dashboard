import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: 'AIzaSyA4-2HATS4hjig3AcYR6xYwRomz6FgwYcI',
  authDomain: 'employee-lms.firebaseapp.com',
  databaseURL: 'https://employee-lms.firebaseio.com',
  projectId: 'employee-lms',
  storageBucket: 'employee-lms.appspot.com',
  messagingSenderId: '1061076243519',
  appId: '1:1061076243519:web:ae0c8f25a2ec75c3f2148a',
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
