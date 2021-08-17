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
        <Container>
          <Header>Sorting Machine</Header>
          <Box>
            <Label>KR</Label>
            <Content>
              <Timer type='ko-KR' />
            </Content>
          </Box>
          <Box>
            <Label>INPUT</Label>
            <Content>
              <Input ref={inputRef} />
              <StartButton onSubmit={onSubmit} />
            </Content>
          </Box>
          <Box>
            <Label>ASCEND</Label>
            <Content>
              <Result numbers={ascNumber} color='#00c5ff' />
            </Content>
          </Box>
          <Box>
            <Label>DESCEND</Label>
            <Content>
              <Result numbers={descNumber} color='#f8a3ff' />
            </Content>
          </Box>
          <Box>
            <Label>US</Label>
            <Content>
              <Timer type='en-US' />
            </Content>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(248, 163, 255, 1) 0%,
    rgba(0, 197, 255, 1) 100%
  );
`;

const Container = styled.div`
  width: 60%;
  height: 80%;
  max-width: 720px;
  max-height: 400px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;
  padding: 0 4%;
`;

const Header = styled.header`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 24px 0;
`;

const Box = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  width: 45%;
  font-size: 16px;
  font-weight: 500;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default App;
