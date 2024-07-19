import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCEZG7dWDV12c1nwLXnf4qJGAj599v1fs0",
  authDomain: "my-phonebook-app-93ff9.firebaseapp.com",
  projectId: "my-phonebook-app-93ff9",
  storageBucket: "my-phonebook-app-93ff9.appspot.com",
  messagingSenderId: "121375050805",
  appId: "1:121375050805:web:873b800c05f4195cd9f57c",
  measurementId: "G-54R897WYSL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

