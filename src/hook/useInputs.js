import { useState, useCallback, useRef } from 'react';
import { ERROR_MSG } from '../utils/config';
import { validateInput } from '../utils/validation';
import { convertToNumArray } from '../utils/convert';

const useInputs = () => {
  const [numbers, setNumbers] = useState([]);
  const inputRef = useRef(null);

  const onSubmit = useCallback(() => {
    const value = inputRef.current.value;
    if (validateInput(value)) {
      setNumbers(convertToNumArray(value));
    } else {
      inputRef.current.value = null;
      alert(ERROR_MSG);
    }
  }, []);

  return [numbers, onSubmit, inputRef];
};

export default useInputs;
