import { Input, Timer, Result, StartButton } from './components';
import { useState } from 'react';
import styled from 'styled-components';
import { ascendingSort, descendingSort } from './utils/sort';

const App = () => {
  const [ascendedNumber, setAscendedNumber] = useState([]);
  const [descendedNumber, setDescendedNumber] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const handleChange = ({ target: { value } }) => setNumbers([...value]);
  const handleClick = () => {
    setAscendedNumber(ascendingSort(numbers));
    setDescendedNumber([]);

    setTimeout(() => {
      setDescendedNumber(descendingSort(numbers));
    }, 3000);
  };

  return (
    <Wrapper>
      <Timer type='ko-KR' />
      <Input onChange={handleChange} />
      <StartButton onClick={handleClick} />
      <Result type='오름차순' numbers={ascendedNumber} />
      <Result type='내림차순' numbers={descendedNumber} />
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
