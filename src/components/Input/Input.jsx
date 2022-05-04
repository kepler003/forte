import { useEffect, useRef } from 'react';
import Icon from '../Icon/Icon';
import cls from './Input.module.css';

const Input = ({ label, type, error, className, ...props }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (error) {
      inputRef.current.setCustomValidity('Invalid');
    } else {
      inputRef.current.setCustomValidity('');
    }
  }, [error]);

  const dateIconClickHandler = () => {
    inputRef.current.focus();
    inputRef.current.showPicker();
  };

  const labelClassNames = [cls.label, 'text-medium-l'].join(' ');
  const inputClassNames = [className, cls.input, 'text-l'].join(' ');

  const labelElem = label && <label className={labelClassNames}>{label}</label>;

  const warningIconElem = error && (
    <Icon
      className={type === 'date' ? cls.dateWarningIcon : cls.warningIcon}
      icon='alert'
      color='#a3270c'
    />
  );

  const dateIconElem = type === 'date' && (
    <Icon
      className={cls.dateIcon}
      icon='calendar'
      onClick={dateIconClickHandler}
    />
  );

  const errorElem = error && <p className={cls.error}>{error}</p>;

  console.log(cls);

  return (
    <div className={cls.box}>
      {labelElem}
      <div className={cls.inputBox}>
        <input
          type={type}
          className={inputClassNames}
          ref={inputRef}
          {...props}
        />
        {warningIconElem}
        {dateIconElem}
      </div>
      {errorElem}
    </div>
  );
};

export default Input;
