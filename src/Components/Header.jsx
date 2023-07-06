import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

import styles from './Header.module.css';

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={ styles.header }>
      <nav className={ `${ styles.nav } container }`} >
        <Link to='/' className={ styles.logo } aria-label='Dogs - Home'><Dogs /></Link>
        { data ? (
          <Link to='/account' className={ styles.login }>
            <button onClick={ userLogout }>Sair</button>
            { data.nome }
          </Link>
        ) : (
          <Link to='/login' className={ styles.login }>Login / Criar</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;