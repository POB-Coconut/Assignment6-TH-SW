import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef((_, ref) => {
  return <InputStyled autoFocus ref={ref} placeholder='5,1,3,2,4' />;
});

const InputStyled = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  border-bottom: solid 1px #bbbbbb;
  outline: none;
  padding: 0;
`;

export default Input;
