import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import cls from './ButtonSecondary.module.css';

const ButtonSecondary = ({ children, className, icon, to, ...props }) => {
  const classNames = [className, cls.button, 'text-medium'].join(' ');
  const iconElem = icon && (
    <span className={cls.icon}>
      <Icon icon={icon} />
    </span>
  );

  return to ? (
    <NavLink to={to} className={classNames} {...props}>
      {iconElem}
      {children}
    </NavLink>
  ) : (
    <button className={classNames} {...props}>
      {iconElem}
      {children}
    </button>
  );
};

export default ButtonSecondary;
