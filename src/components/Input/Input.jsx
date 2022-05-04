import { useEffect, useRef } from 'react';
import Icon from '../Icon/Icon';
import cls from './Input.module.css';

const Input = ({ label, error, className, ...props }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (error) {
      inputRef.current.setCustomValidity('Invalid');
    } else {
      inputRef.current.setCustomValidity('');
    }
  }, [error]);

  const labelClassNames = [cls.label, 'text-medium-l'].join(' ');
  const inputClassNames = [className, cls.input, 'text-l'].join(' ');

  const labelElem = label && <label className={labelClassNames}>{label}</label>;
  const iconElem = error && (
    <Icon className={cls.icon} icon='alert' color='#a3270c' />
  );
  const errorElem = error && <p className={cls.error}>{error}</p>;

  return (
    <div className={cls.box}>
      {labelElem}
      <div className={cls.inputBox}>
        <input ref={inputRef} className={inputClassNames} {...props} />
        {iconElem}
      </div>
      {errorElem}
    </div>
  );
};

export default Input;
