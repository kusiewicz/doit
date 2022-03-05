import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDzFPw7IqGqtIIrXizL1RbO4oxy5jfHuZU',
  authDomain: 'todo-f2a31.firebaseapp.com',
  projectId: 'todo-f2a31',
  storageBucket: 'todo-f2a31.appspot.com',
  messagingSenderId: '494085423741',
  appId: '1:494085423741:web:afc50dd8b575683ca8e714',
  measurementId: 'G-0PP3L9RRWC',
};

const firebase = initializeApp(firebaseConfig);

const db = getFirestore();

export { firebase, db };
