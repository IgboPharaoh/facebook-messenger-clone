import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBrcBS0xUnbWSQ43N-7BzeHD4AV0CBYPwk",
        authDomain: "facebook-messenger-clone-ec2c3.firebaseapp.com",
        projectId: "facebook-messenger-clone-ec2c3",
        storageBucket: "facebook-messenger-clone-ec2c3.appspot.com",
        messagingSenderId: "49312554661",
        appId: "1:49312554661:web:c3eef6fecf9b0b4c1f774c",
        measurementId: "G-D3VJ974GJJ"
    }
)

const db = firebaseApp.firestore()

export {db}