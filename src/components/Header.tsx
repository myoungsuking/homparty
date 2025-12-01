import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0 0 10px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightText};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const HostName = styled.p`
  font-size: 1.5rem;
  margin-top: 30px;
  font-weight: 600;
`;

const DateInfo = styled.p`
  font-size: 1.1rem;
  margin-top: 5px;
`;

const Hr = styled.hr`
  width: 50px;
  margin: 40px auto;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
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
