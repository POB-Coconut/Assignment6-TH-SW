import styled from 'styled-components';

const Input = ({ onChange }) => {
  return (
    <Wrapper>
      <Title>입력창</Title>
      <InputStyled onChange={onChange} type='number' />
    </Wrapper>
  );
};

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
