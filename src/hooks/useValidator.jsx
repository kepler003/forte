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

  // Check if email is incorrect
  useEffect(() => {
    if (value === undefined) return;
    if (type !== 'email') return;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validate(regex.test(value), 'This email address is incorrect');
  }, [value, type]);

  // Check if date is after min date
  useEffect(() => {
    if (value === undefined) return;
    if (type !== 'date') return;
    if (!min) return;
    const currDate = Date.parse(value.replace('+00Z', ':00.000Z'));
    const minDate = Date.parse(min.replace('+00Z', ':00.000Z'));
    validate(minDate < currDate, 'This date is incorrect');
  }, [value, type, min]);

  return errors;
};

export default useValidator;
