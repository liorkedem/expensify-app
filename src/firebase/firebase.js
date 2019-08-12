import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const exps = [];

//         snapshot.forEach((child) => {
//             exps.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });
//         console.log(exps);
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const exps = [];

//         snapshot.forEach((child) => {
//             exps.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });
//         console.log(exps);
//     });

// database.ref('expenses').push({
//     description: expenses[0].description,
//     note: expenses[0].note,
//     amount:expenses[0].amount,
//     createdAt:expenses[0].createdAt,
// });

// database.ref().update({
//     name: 'LIOR',
//     'job/title': 'CEO',
//     'job/company': 'AMAZON'
// }).then(() => {
//     onValueChange();
// }).catch((e) => {
//     console.log('failed', e);
// });

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         const msg = `${val.name} is a ${val.job.title} at ${val.job.company}`;
//         console.log(msg);
//     });
// setTimeout(() => {
//     database.ref().update({
//         name: 'lawer',
//         'job/title': 'CMO',
//         'job/company': 'google'
//     }).then(() => {
//         onValueChange();
//     }).catch((e) => {
//         console.log('failed', e);
//     });
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value',onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref().update({
//         name: 'KEDEM',
//         'job/title': 'ENG',
//         'job/company': 'APPLE'
//     }).then(() => {
//         onValueChange();
//     }).catch((e) => {
//         console.log('failed', e);
//     });
// }, 10000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
//     });

// database.ref().set({
//     name: 'lior',
//     age: 26,
//     srtessLevel: 6,
//     job: {
//         title: 'sofdev',
//         company: 'google'
//     },
//     isSingle: false,
//     location: {
//         city: 'phily',
//         country: 'usa'
//     }
// }).then((data) => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('this is FAILED: ', e);
// });


// database.ref().update({
//     srtessLevel:9,
//     'job/company': 'amazon',
//     'location/city': 'Seatlle'
// }).then(() => {
//     console.log('removed:[V]');
// }).catch((e) => {
//     console.log('removed:[X]', e);
// });


// database.ref('isSingle').remove()
// .then(() => {
//     console.log('removed:[V]');
// }).catch((e) => {
//     console.log('removed:[X]', e);
// });