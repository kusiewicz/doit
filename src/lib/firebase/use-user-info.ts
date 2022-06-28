import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

interface User {
  username: string;
  id: string;
}

export const useUserInfo = () => {
  const [user, setUser] = useState<User>({ username: '', id: '' });

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo?.displayName && userInfo?.uid) {
        setUser({ username: userInfo.displayName, id: userInfo.uid });
      }
    });
  }, []);

  return { user };
};
