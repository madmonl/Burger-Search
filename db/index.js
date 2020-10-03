const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyAngaqZhQmO-xZ58uHHzeaTmwKz67bHbkc",
  authDomain: "food-search-47d26.firebaseapp.com",
  databaseURL: "https://food-search-47d26.firebaseio.com",
  projectId: "food-search-47d26",
  storageBucket: "food-search-47d26.appspot.com",
  messagingSenderId: "422903877655",
  appId: "1:422903877655:web:f23898cfd757481f5b0c52",
  measurementId: "G-WWY8BBZ1FJ",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = database;
