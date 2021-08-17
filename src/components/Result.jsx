import styled from 'styled-components';

const Result = ({ numbers, color }) => {
  return (
    <Wrapper>
      <Number color={color}>{numbers.join(',')}</Number>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px #bbbbbb;
`;

const Number = styled.h3`
  font-size: 16px;
  color: ${(props) => props.color};
  height: 16px;
  margin: 8px 0;
  width: 100%;
`;

export default Result;
