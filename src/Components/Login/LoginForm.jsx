import { useContext } from "react";
import { Link } from "react-router-dom";

import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from '../../UserContext';

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }


  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <Input label="Usuário" type="text" name="username" { ...username } />
        <Input label="Senha" type="password" name="password" { ...password } />
        { loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        { error && <p>{ error }</p>}
      </form>

      <Link to="/login/novo">Cadastrar</Link>
    </section>
  );
}

export default LoginForm;