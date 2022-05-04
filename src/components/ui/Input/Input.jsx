import { useEffect, useRef } from 'react';
import classes from '../../../utils/classes';
import Icon from '../Icon/Icon';
import cls from './Input.module.css';

const Input = ({ label, type, error, className, boxClassName, ...props }) => {
  const inputRef = useRef();

  // Set invalid if error
  useEffect(() => {
    if (error) {
      inputRef.current.setCustomValidity('Invalid input');
    } else {
      inputRef.current.setCustomValidity('');
    }
  }, [error]);

  // Event handlers
  const dateIconClickHandler = () => {
    inputRef.current.focus();
    inputRef.current.showPicker();
  };

  // ClassNames
  const inputBoxClassNames = classes(cls.box, boxClassName);
  const labelClassNames = classes(cls.label, 'text-bold-large');
  const inputClassNames = classes(className, cls.input, 'text-large');

  // Helper elements
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

  return (
    <div className={inputBoxClassNames}>
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
