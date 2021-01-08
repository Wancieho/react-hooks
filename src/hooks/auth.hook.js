import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [userLocalStorage, setUserLocalStorage, removeUserLocalStorage] = useLocalStorage('user');

  const logInHouseCode = async (credentials) => {
    setIsError(false);
    setIsLoading(true);

    try {
      await axios
        .post(`https://reqres.in/api/login`,
          credentials,
        )
        .then((response) => {
          saveUser({ ...response.data, credentials });
        })
        .catch((error) => {
          setIsError(error.message || JSON.stringify(error));
        });
    } catch (error) {
      setIsError(error.message || JSON.stringify(error));
    }

    setIsLoading(false);
  }

  const saveUser = (userData) => {
    setUserLocalStorage(userData);

    setUser(userData);
  }

  const logOut = () => {
    removeUserLocalStorage();

    setUser(null);
  }

  useEffect(() => {
    saveUser(userLocalStorage);
  }, []);

  return {
    logInHouseCode,
    logOut,
    user,
    isLoading,
    isError,
  };
}
