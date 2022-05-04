import classes from '../../../utils/classes';
import cls from './Button.module.css';

const Button = ({ children, className, ...props }) => {
  const classNames = classes(cls.button, className, 'text-medium');
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
