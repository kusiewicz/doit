import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  QueryDocumentSnapshot,
} from '@firebase/firestore';
import { convertToArray } from '@utils/firebase-convert-to-array';
import { db } from '@lib/firebase/firebase';
import { Dayjs } from 'dayjs';

export enum Priorities {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}
export interface TaskData {
  title: string;
  description: string;
  priority: Priorities;
  id: string;
  date: Dayjs | string;
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

export const deleteTask = async (id: string) => {
  await deleteDoc(doc(db, 'tasks', id));
};
