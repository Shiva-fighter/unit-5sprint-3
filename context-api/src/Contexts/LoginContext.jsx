import { createContext, useState } from "react";
import axios from 'axios'
export const LoginContext = createContext({});

export const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [wrongdetails,setWrongdetails] = useState(false);
  const [password, setPassword] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const [token,setToken]=useState("");
  function toggleAuth(email, password) {
    const obj = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", obj)
      .then((res) => {
        console.log(res);
        setToken(res.data.token)
        setIsAuth(true)
        setWrongdetails(false)
      })
      .catch((err) => {
        console.log(err);
        setWrongdetails(true)

      });
  }
  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        isAuth,
        setIsAuth,
        toggleAuth,
        token,
        wrongdetails
      }}
    >
      {" "}
      {children}
    </LoginContext.Provider>
  );
};
