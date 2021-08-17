import { Input, Timer, Result, StartButton } from './components';
import { useInputs, useSort } from './hook';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [value, onSubmit, inputRef] = useInputs();
  const [ascNumber, descNumber] = useSort(value);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Timer type='ko-KR' />
        <Input ref={inputRef} />
        <StartButton onSubmit={onSubmit} />
        <Result type='오름차순' numbers={ascNumber} />
        <Result type='내림차순' numbers={descNumber} />
        <Timer type='en-US' />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default App;
