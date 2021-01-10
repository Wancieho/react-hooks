import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useLocalStorage } from 'react-use';

const UserContext = React.createContext();
const UserSaveContext = React.createContext();
const UserRemoveContext = React.createContext();
const USER_LOCAL_STORAGE = 'user';

export const useUser = () => {
  return useContext(UserContext);
}

export const useUserSave = () => {
  return useContext(UserSaveContext);
}

export const useUserRemove = () => {
  return useContext(UserRemoveContext);
}

export const UserProvider = ({ children }) => {
  const [userLocalStorage, setUserLocalStorage, removeUserLocalStorage] = useLocalStorage(USER_LOCAL_STORAGE);
  const [user, setUser] = useState(null);

  const remove = () => {
    removeUserLocalStorage();

    setUser(null);
  }

  const save = (userData) => {
    setUserLocalStorage(userData);

    setUser(userData);
  }

  useEffect(() => {
    save(userLocalStorage);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <UserSaveContext.Provider value={save}>
        <UserRemoveContext.Provider value={remove}>
          {children}
        </UserRemoveContext.Provider>
      </UserSaveContext.Provider>
    </UserContext.Provider>
  );
}