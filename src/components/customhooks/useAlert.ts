import { useEffect, useState, Dispatch, SetStateAction } from "react";

export const useAlert = (
  initialState: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [alert, setAlert] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [alert]);

  return [alert, setAlert];
};
