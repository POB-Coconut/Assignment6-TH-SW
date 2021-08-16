import styled from 'styled-components';

const Input = ({ onChange }) => {
  return (
    <Wrapper>
      <InputStyled onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const InputStyled = styled.input``;

export default Input;
