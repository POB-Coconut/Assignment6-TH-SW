import React from 'react';
import styled from 'styled-components';

const StartButton = ({ onClick }) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>시작</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled.button``;

export default StartButton;
