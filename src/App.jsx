import GlobalStyles from './styles/GlobalStyles';
import { _PINK, _SKYBLUE } from './utils/config';
import { Wrapper, Container, Header, Box, Label, Content } from './styles';
import { Input, Timer, Result, SortButton } from './components';
import { useInputs, useSort } from './hook';

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
            <Label>TIMER-KR</Label>
            <Content>
              <Timer type='ko-KR' />
            </Content>
          </Box>
          <Box>
            <Label>INPUT</Label>
            <Content>
              <Input ref={inputRef} />
              <SortButton onSubmit={onSubmit} />
            </Content>
          </Box>
          <Box>
            <Label>ASCEND</Label>
            <Content>
              <Result numbers={ascNumber} color={_SKYBLUE} />
            </Content>
          </Box>
          <Box>
            <Label>DESCEND</Label>
            <Content>
              <Result numbers={descNumber} color={_PINK} />
            </Content>
          </Box>
          <Box>
            <Label>TIMER-US</Label>
            <Content>
              <Timer type='en-US' />
            </Content>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
