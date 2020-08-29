import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCVJGw5ECQiyyZMVPEpQrJtRCzvotvv4ok",
    authDomain: "facebook-clone-59b30.firebaseapp.com",
    databaseURL: "https://facebook-clone-59b30.firebaseio.com",
    projectId: "facebook-clone-59b30",
    storageBucket: "facebook-clone-59b30.appspot.com",
    messagingSenderId: "662735957550",
    appId: "1:662735957550:web:40b8aed9809ce3461c39bf",
    measurementId: "G-W3N46B86XL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db