import React, { useContext } from "react";

export const LoginContext = React.createContext(false);

const useLogin = () => {
  const isLogin = useContext(LoginContext);

  return isLogin;
};

export default useLogin;
