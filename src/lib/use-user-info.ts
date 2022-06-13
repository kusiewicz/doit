import { auth } from './firebase';

import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

export const useUserInfo = () => {
  const [name, setName] = useState<string | null>('');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setName(user.displayName);
    }
  });
  console.log(name);
  return { name };
};
