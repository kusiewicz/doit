import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  QueryDocumentSnapshot,
  Timestamp,
} from '@firebase/firestore';
import { convertToArray } from '@utils/firebase-convert-to-array';
import { db } from '@lib/firebase';

export interface TaskData {
  title: string;
  description: string;
  priority: string;
  id: string;
  date: Timestamp;
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

export const createTask = async (task: Omit<TaskData, 'date'> & { date: Date }) => {
  await setDoc(doc(db, 'tasks', task.id), task);
};

export const editTask = async (id: string, editedField: { [key: string]: Partial<unknown> }) => {
  await updateDoc(doc(db, 'tasks', id), editedField);
};
