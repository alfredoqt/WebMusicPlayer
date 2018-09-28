// Setup firebase
import firebase, { firestore } from 'firebase';

export const init = () => {
    const config = {
        apiKey: "AIzaSyA46a6Jf9HIO3OjrDIdCgbMFTLFCssFRuQ",
        authDomain: "miniplayer-8a987.firebaseapp.com",
        databaseURL: "https://miniplayer-8a987.firebaseio.com",
        projectId: "miniplayer-8a987",
        storageBucket: "miniplayer-8a987.appspot.com",
        messagingSenderId: "991957637206"
    };
    
    firebase.initializeApp(config);
    firestore().settings({ timestampsInSnapshots: true });
};

