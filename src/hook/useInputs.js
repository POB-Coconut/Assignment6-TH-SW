import { useState, useCallback, useRef } from 'react';
import { ERROR_MSG } from '../utils/config';
import { validateInput } from '../utils/validation';
import { stringToNumArray } from '../utils/convert';

const useInputs = () => {
  const [numbers, setNumbers] = useState([]);
  const inputRef = useRef(null);

  const onSubmit = useCallback(() => {
    const value = inputRef.current.value;

    if (validateInput(value)) {
      setNumbers(stringToNumArray(value));
    } else {
      inputRef.current.value = null;
      alert(ERROR_MSG);
    }
  }, [setNumbers, inputRef]);

  return [numbers, onSubmit, inputRef];
};

export default useInputs;
