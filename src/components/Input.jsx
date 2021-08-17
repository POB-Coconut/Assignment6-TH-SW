import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ onChange }, ref) => {
  return (
    <Wrapper>
      <Title>입력창</Title>
      <InputStyled ref={ref} onChange={onChange} placeholder='ex: 1,2,3' />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2``;

const InputStyled = styled.input`
  width: 50%;
  height: 48px;
  font-size: 24px;
`;

export default Input;
