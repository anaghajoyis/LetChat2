const firebaseConfig = {
    apiKey: "AIzaSyA9v-2B-yEFJQdJ4wf_cGHzz1xrBGP6eVU",
    authDomain: "letchat-app.firebaseapp.com",
    projectId: "letchat-app",
    storageBucket: "letchat-app.appspot.com",
    messagingSenderId: "711840853430",
    appId: "1:711840853430:web:d2686bf95161347d2fa517",
    measurementId: "G-T19RPW1HH5"
  };
const app = initializeApp(firebaseConfig);
function logout(){
  window.location="kwitter.html";
}