import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCQqmQ4MxHRGxl11-o-7KcVRywU4HN0Y6M",
    authDomain: "fir-app-react-772f6.firebaseapp.com",
    projectId: "fir-app-react-772f6",
    storageBucket: "fir-app-react-772f6.appspot.com",
    messagingSenderId: "1010621223721",
    appId: "1:1010621223721:web:5b5b4795e17a2fafc91d38",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;