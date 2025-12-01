import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 40px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightText};
`;

const GroomBride = styled.p`
  font-size: 1.3rem;
  margin-top: 20px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Subtitle>Save the Date</Subtitle>
      <Title>우리, 집들이 합니다</Title>
      <GroomBride>OOO & OOO</GroomBride>
      <hr style={{width: "50px", margin: "30px auto", border: "1px solid #ddd"}}/>
      <p>2025년 12월 25일 목요일</p>
      <p>오후 6시</p>
    </HeaderContainer>
  );
};

export default Header;
