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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = onAuthStateChanged(auth, (userInfo: any) => {
      const nickname = userInfo?.displayName || userInfo?.reloadUserInfo.screenName;
      console.log(nickname);
      if (nickname && userInfo?.uid) {
        setUser({ username: nickname, id: userInfo.uid });
        window.localStorage.setItem('isLoggedIn', 'logged');
      } else {
        window.localStorage.removeItem('isLoggedIn');
      }
      setIsLoggedIn(window.localStorage.getItem('isLoggedIn'));
    });

    return () => listener();
  }, []);

  return { user, isLoggedIn, setUser };
};
