import { useState, useEffect } from 'react';

const useValidator = (value, config = {}) => {
  const { type = 'text', empty = true, min } = config;
  const [errors, setErrors] = useState([]);

  const validate = (test, errorMsg) => {
    if (test) {
      setErrors((prevErrors) => prevErrors.filter((msg) => msg !== errorMsg));
    } else if (!errors.includes(errorMsg)) {
      setErrors((prevErrors) => prevErrors.concat(errorMsg));
    }
  };

  // Check if input is empty
  useEffect(() => {
    if (value === undefined) return;
    if (!empty) return;
    validate(value, 'This field is required');
  }, [value, empty]);

  return errors;
};

export default useValidator;
