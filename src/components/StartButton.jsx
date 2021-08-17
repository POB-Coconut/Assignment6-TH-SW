import React from 'react';
import styled from 'styled-components';

const StartButton = ({ onSubmit }) => {
  return (
    <Wrapper>
      <Button onClick={onSubmit}>sort</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled.button`
  width: 100px;
  font-size: 16px;
  margin-left: 12px;
  padding: 4px;
  background: white;
  border: solid 1px #00c5ff;
  color: #00c5ff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    border: solid 1px #f8a3ff;
    background-color: #f8a3ff;
    color: white;
  }
`;

export default StartButton;
