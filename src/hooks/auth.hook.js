import axios from "axios";
import { useEffect, useState } from "react";

const USER_LOCAL_STORAGE = 'user';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const logInHouseCode = async (credentials) => {
    setIsError(false);
    setIsLoading(true);

    try {
      await axios
        .post(`https://reqres.in/api/login`,
          credentials,
        )
        .then((response) => {
          saveUser(response.data);
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
    localStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(userData));

    setUser(userData);
  }

  const logOut = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE);

    setUser(null);
  }

  useEffect(() => {
    if (!localStorage.getItem(USER_LOCAL_STORAGE)) {
      saveUser(JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE)));
    }
  }, []);

  return {
    loginHouseCode,
    logOut,
    user,
    isLoading,
    isError,
  };
}
