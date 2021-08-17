import styled from 'styled-components';
import { useTimer } from '../hook';

const Timer = ({ type }) => {
  const time = useTimer(type);

  return (
    <Wrapper>
      {type}
      <Time>{time}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const Time = styled.h3``;

export default Timer;
