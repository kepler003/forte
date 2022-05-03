import cls from './Button.module.css';

const Button = ({ children, className, ...props }) => {
  const classNames = [cls.button, className, 'text-medium'].join(' ');
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
