import Icon from './Icon';
import cls from './ButtonSecondary.module.css';

const ButtonSecondary = ({ children, className, icon, ...props }) => {
  const classNames = [className, cls.button, 'text-medium'].join(' ');
  const iconElem = icon && (
    <span className={cls.icon}>
      <Icon icon={icon} />
    </span>
  );

  return (
    <button className={classNames} {...props}>
      {iconElem}
      {children}
    </button>
  );
};

export default ButtonSecondary;
