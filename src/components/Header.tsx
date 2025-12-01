import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeaderContainer = styled.header`
  padding: 80px 30px;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  font-size: 3.2rem;
  margin: 0 0 15px;
  font-weight: 800;
  background: linear-gradient(135deg, #8D7B68 0%, #A4907C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${float} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.lightText};
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.8;
`;

const HostName = styled.p`
  font-size: 1.6rem;
  margin-top: 35px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DateInfo = styled.p`
  font-size: 1.15rem;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Hr = styled.hr`
  width: 60px;
  margin: 40px auto;
  border: none;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.accent}, transparent) 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Subtitle>Save the Date</Subtitle>
      <Title>Home Sweet Home</Title>
      <HostName>김명수의 집들이에 초대합니다</HostName>
      <Hr/>
      <DateInfo>2025년 12월 20일 토요일, 오후 6시</DateInfo>
    </HeaderContainer>
  );
};

export default Header;
