import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginRecover from "./LoginRecover";
import LoginReset from "./LoginReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if(login === true) return <Navigate to="/account" />

  return (
    <>
      <Routes>
        <Route path="/" element={ <LoginForm /> } />
        <Route path="novo" element={ <LoginCreate /> } />
        <Route path="recuperar" element={ <LoginRecover /> } />
        <Route path="resetar" element={ <LoginReset /> } />
      </Routes>
    </>
  );
}

export default Login;