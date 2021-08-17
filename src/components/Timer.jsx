import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = ({ type }) => {
  const [time, setTime] = useState(new Date().toLocaleString(type));

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString(type));
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Title>{type} 타이머</Title>
      <Time>{time}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const Title = styled.h2``;
const Time = styled.h3``;

export default Timer;
