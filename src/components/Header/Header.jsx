import cls from './Header.module.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={cls.header}>
      <img src={logo} alt='logo' />
    </header>
  );
};

export default Header;
