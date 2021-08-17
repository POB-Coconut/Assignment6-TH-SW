import React from 'react';
import styled from 'styled-components';
import { _PINK, _SKYBLUE } from '../utils/config';

const SortButton = ({ onSubmit }) => {
  return <ButtonStyled onClick={onSubmit}>sort</ButtonStyled>;
};

const ButtonStyled = styled.button`
  width: 100px;
  font-size: 16px;
  margin-left: 12px;
  padding: 4px;
  background: white;
  border: solid 1px ${_SKYBLUE};
  color: ${_SKYBLUE};
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    border: solid 1px ${_PINK};
    background-color: ${_PINK};
    color: white;
  }
`;

export default SortButton;
