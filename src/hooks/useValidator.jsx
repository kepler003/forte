import { useState, useEffect } from 'react';

const useValidator = (value) => {
  const [errors, setErrors] = useState([]);

  // Check if input is empty
  useEffect(() => {
    if (value === undefined) return;

    const errorMsg = 'This field is required';

    if (value) {
      setErrors((prevErrors) => prevErrors.filter((msg) => msg !== errorMsg));
    } else if (!errors.includes(errorMsg)) {
      setErrors((prevErrors) => prevErrors.concat(errorMsg));
    }
  }, [value]);

  return errors;
};

export default useValidator;
