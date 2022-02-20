// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDzFPw7IqGqtIIrXizL1RbO4oxy5jfHuZU',
  authDomain: 'todo-f2a31.firebaseapp.com',
  projectId: 'todo-f2a31',
  storageBucket: 'todo-f2a31.appspot.com',
  messagingSenderId: '494085423741',
  appId: '1:494085423741:web:afc50dd8b575683ca8e714',
  measurementId: 'G-0PP3L9RRWC',
};

firebase.initializeApp(firebaseConfig);


export const test = () => console.log('esasa');
