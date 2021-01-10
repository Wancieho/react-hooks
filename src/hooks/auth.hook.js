import axios from 'axios';
import { useState } from 'react';

import { useUserSave } from '../contexts/user.context';

export const useAuth = () => {
  const userSave = useUserSave();
  const [isBusy, setIsBusy] = useState(false);
  const [isError, setIsError] = useState(null);

  const logInHouseCode = async (credentials) => {
    setIsError(false);
    setIsBusy(true);

    try {
      await axios
        .post(`https://reqres.in/api/login`,
          credentials,
        )
        .then((response) => {
          userSave({ ...response.data, credentials });
        })
        .catch((error) => {
          setIsError(error.message || error.error || JSON.stringify(error));
        });
    } catch (error) {
      setIsError(error.message || error.error || JSON.stringify(error));
    }

    setIsBusy(false);
  }

  return {
    logInHouseCode,
    isBusy,
    isError,
  };
}
