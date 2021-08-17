import styled from 'styled-components';
import { useTimer } from '../hook';

const Timer = ({ type }) => {
  const time = useTimer(type);

  return (
    <Wrapper>
      <Time>{time}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px #bbbbbb;
`;

const Time = styled.h3`
  font-size: 16px;
  margin: 8px 0;
  width: 100%;
`;

export default Timer;
