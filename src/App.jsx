import { Input, Timer, Result, StartButton } from './components';
import styled from 'styled-components';
import { useState, useEffect, useCallback, useRef } from 'react';

import { ERROR_MSG } from './utils/config';
import { validateInput } from './utils/validation';
import { ascendingSort, descendingSort } from './utils/sort';
import { convertToNumArray } from './utils/convert';

const App = () => {
  const [ascNumber, setAscNumber] = useState([]);
  const [descNumber, setDescNumber] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const inputRef = useRef(null);

  const handleClick = useCallback(() => {
    const value = inputRef.current.value;
    if (validateInput(value)) {
      setNumbers(convertToNumArray(value));
    } else {
      inputRef.current.value = null;
      alert(ERROR_MSG);
    }
  }, []);

  useEffect(() => {
    if (!numbers.length) return; // 첫 마운트 제외

    setAscNumber(ascendingSort([...numbers]));
    setDescNumber([]);

    setTimeout(() => {
      setDescNumber(descendingSort([...numbers]));
    }, 3000);
  }, [numbers]);

  return (
    <Wrapper>
      <Timer type='ko-KR' />
      <Input ref={inputRef} />
      <StartButton onClick={handleClick} />
      <Result type='오름차순' numbers={ascNumber} />
      <Result type='내림차순' numbers={descNumber} />
      <Timer type='en-US' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default App;
