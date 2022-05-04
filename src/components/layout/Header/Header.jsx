import cls from './Header.module.css';
import logo from '../../../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={cls.header}>
      <NavLink to='/'>
        <img src={logo} alt='logo' />
      </NavLink>
    </header>
  );
};

export default Header;
