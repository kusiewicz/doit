import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

interface User {
  username: string;
  id: string;
}

export const useUserInfo = () => {
  const [user, setUser] = useState<User>({ username: '', id: '' });
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(
    window.localStorage.getItem('isLoggedIn'),
  );

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo?.displayName && userInfo?.uid) {
        setUser({ username: userInfo.displayName, id: userInfo.uid });
        window.localStorage.setItem('isLoggedIn', 'logged');
      } else {
        window.localStorage.removeItem('isLoggedIn');
      }
      setIsLoggedIn(window.localStorage.getItem('isLoggedIn'));
    });

    return () => listener();
  }, []);

  return { user, isLoggedIn };
};
