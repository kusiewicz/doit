import { collection, getDocs, QueryDocumentSnapshot } from '@firebase/firestore';
import { convertToArray } from '@lib/firebase/convert-to-array';
import { db } from '@lib/firebase/firebase';

export interface TaskData {
  title: string;
  description: string;
  priority: string;
}

export const GET_TASKS = 'get-tasks';

const taskConverter = {
  toFirestore: (data: TaskData) => data,
  fromFirestore: (tasks: QueryDocumentSnapshot) => {
    return tasks.data() as TaskData;
  },
};

export const getTasksData = async () => {
  const tasks = await getDocs(collection(db, 'tasks').withConverter(taskConverter));

  const dane = convertToArray(tasks);

  return dane;
};
