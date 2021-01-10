import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const USER_LOCAL_STORAGE = 'user';

export const UserProvider = () => {
  const [user, setUser] = useState(null);
  const [userLocalStorage, setUserLocalStorage, removeUserLocalStorage] = useLocalStorage(USER_LOCAL_STORAGE);

  const save = (userData) => {
    setUserLocalStorage(userData);

    setUser(userData);
  }

  const remove = () => {
    removeUserLocalStorage();

    setUser(null);
  }
console.debug('UserProvider')
useEffect(() => {
    console.debug('UserProvider mount')
    saveUser(userLocalStorage);
  }, []);

  return {
    user,
    save,
    remove,
  }
}