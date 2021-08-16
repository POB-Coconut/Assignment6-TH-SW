import styled from 'styled-components';
import Input from './components/Input';
import Result from './components/Result';
import StartButton from './components/StartButton';
import Timer from './components/Timer';

const App = () => {
  return (
    <Wrapper>
      <Timer />
      <Input />
      <StartButton />
      <Result />
      <Result />
      <Timer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
