import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(248, 163, 255, 1) 0%,
    rgba(0, 197, 255, 1) 100%
  );
`;

export const Container = styled.div`
  width: 60%;
  height: 80%;
  max-width: 720px;
  max-height: 400px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;
  padding: 0 4%;
`;

export const Header = styled.header`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 24px 0;
`;

export const Box = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  width: 45%;
  font-size: 16px;
  font-weight: 500;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
