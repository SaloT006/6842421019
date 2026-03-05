const firebaseConfig = {
  apiKey: "AIzaSyCAkyxu3dhJCg5no9RUlmER5vsucEuuK5c",
  authDomain: "my-website-e6a18.firebaseapp.com",
  projectId: "my-website-e6a18",
  storageBucket: "my-website-e6a18.firebasestorage.app",
  messagingSenderId: "40808195232",
  appId: "1:40808195232:web:e470abc3a829aca13215c5",
  measurementId: "G-TQX7QRYRZ7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();