import styled from 'styled-components';

const Result = ({ type, numbers }) => {
  return (
    <Wrapper>
      <Title>{type} 결과</Title>
      <Number>{numbers}</Number>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const Title = styled.h2``;

const Number = styled.h3`
  font-size: 24px;
`;

export default Result;
