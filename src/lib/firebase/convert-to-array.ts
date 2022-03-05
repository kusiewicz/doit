import { QuerySnapshot } from 'firebase/firestore';

export const convertToArray = <Type>(data: QuerySnapshot<Type>): Type[] => {
  let array: Type[] = [];
  data?.forEach((elem) => {
    array.push(elem.data());
  });

  return array;
};
