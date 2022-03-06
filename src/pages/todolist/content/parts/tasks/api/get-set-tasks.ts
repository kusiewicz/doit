import { collection, getDocs, doc, setDoc, QueryDocumentSnapshot } from '@firebase/firestore';
import { convertToArray } from '@utils/firebase-convert-to-array';
import { db } from '@lib/firebase';
import { v4 as uuidv4 } from 'uuid';

export interface TaskData {
  title: string;
  description: string;
  priority: string;
  date: Date;
}

const taskConverter = {
  toFirestore: (data: TaskData) => data,
  fromFirestore: (tasks: QueryDocumentSnapshot) => {
    return tasks.data() as TaskData;
  },
};

export const getTasks = async () => {
  const tasks = await getDocs(collection(db, 'tasks').withConverter(taskConverter));

  const dane = convertToArray(tasks);

  return dane;
};

export const createTask = async (task: TaskData) => {
  const id = uuidv4();
  await setDoc(doc(db, 'tasks', id), task);
};
