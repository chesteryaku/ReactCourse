import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Book section 9.2: paste YOUR OWN values from the Firebase console here.
// databaseURL is required for the Realtime Database; copy it from Build > Realtime Database.
const firebaseConfig = {
  apiKey: "AIzaSyCZ5h14oYopPCoge5fGgV9jrAjSExL1bmA",
  authDomain: "reactcourse-f613d.firebaseapp.com",
  projectId: "reactcourse-f613d",
  storageBucket: "reactcourse-f613d.firebasestorage.app",
  messagingSenderId: "580463099401",
  appId: "1:580463099401:web:39aadf58e2f2bc339b02d8",
  measurementId: "G-2RKSY8KLB0",
  databaseURL:"https://reactcourse-f613d-default-rtdb.europe-west1.firebasedatabase.app/"
};
//https://reactcourse-f613d-default-rtdb.europe-west1.firebasedatabase.app/
//https://console.firebase.google.com/project/reactcourse-f613d/database/reactcourse-f613d-default-rtdb/data/~2F
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
