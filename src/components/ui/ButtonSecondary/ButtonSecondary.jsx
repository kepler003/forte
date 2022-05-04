import { NavLink } from 'react-router-dom';
import classes from '../../../utils/classes';
import Icon from '../Icon/Icon';
import cls from './ButtonSecondary.module.css';

const ButtonSecondary = ({ children, className, icon, to, ...props }) => {
  const classNames = classes(className, cls.button, 'text-medium');
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
