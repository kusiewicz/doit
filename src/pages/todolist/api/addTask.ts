import { addDoc, collection, getDocs } from '@firebase/firestore';
import { db } from '@lib/firebase';

export const addTask = async () => {
  console.log('e');
  try {
    const docRef = await addDoc(collection(db, 'tasks'), {
      title: 'Zgas swiatlo',
      description: 'proszem',
      priority: 'Low',
    });
    console.log('Doc written with ID: ', docRef.id);
  } catch (e) {
    console.log(e);
  }
};

export const getTask = async () => {
  const tasks = await getDocs(collection(db, 'tasks'));
  tasks.forEach((task) => {
    console.log(task.data());
  });
};
