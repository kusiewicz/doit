import {
  collectionGroup,
  query,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  QueryDocumentSnapshot,
  documentId,
  orderBy,
  startAt,
  endAt,
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

export const getTasks = async (userId: string) => {
  // const tasks = await getDocs(
  //   collection(db, 'tasks', 'ewjRYj7knNPdwHZ9LfGSMDjuWEj2', 'tasks').withConverter(taskConverter),
  // );

  // const dane = convertToArray(tasks);

  // return dane;

  const userRef = doc(db, 'users', userId);

  const tasksRef = collectionGroup(db, 'tasks').withConverter(taskConverter);

  const q = query(
    tasksRef,
    orderBy(documentId()),
    startAt(userRef.path),
    endAt(userRef.path + '\uf8ff'),
  );

  const qtas = await getDocs(q);

  const dane = convertToArray(qtas);
  return dane;
};

export const getTask = async (taskId: string, userId: string) => {
  const task = await getDoc(doc(db, 'tasks', userId, taskId).withConverter(taskConverter));

  return task.data();
};

export const createTask = async (
  task: Omit<TaskData, 'date'> & { date: string },
  userId: string,
) => {
  await setDoc(doc(db, 'users', userId, 'tasks', task.id), task);
};

export const editTask = async (
  taskId: string,
  editedField: { [key: string]: Partial<unknown> },
  userId: string,
) => {
  await updateDoc(doc(db, 'users', userId, 'tasks', taskId), editedField);
};

export const deleteTask = async (taskId: string, userId: string) => {
  await deleteDoc(doc(db, 'users', userId, 'tasks', taskId));
};
