import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  QueryDocumentSnapshot,
} from '@firebase/firestore';
import { convertToArray } from '@utils/firebase-convert-to-array';
import { db } from '@lib/firebase';
import { Dayjs } from 'dayjs';

export interface TaskData {
  title: string;
  description: string;
  priority: string;
  id: string;
  date: Dayjs;
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

export const getTask = async (id: string) => {
  const task = await getDoc(doc(db, 'tasks', id).withConverter(taskConverter));

  return task.data();
};

export const createTask = async (task: Omit<TaskData, 'date'> & { date: string }) => {
  await setDoc(doc(db, 'tasks', task.id), task);
};

export const editTask = async (id: string, editedField: { [key: string]: Partial<unknown> }) => {
  await updateDoc(doc(db, 'tasks', id), editedField);
};
