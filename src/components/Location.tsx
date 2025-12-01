import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
`;

const Address = styled.p`
  font-size: 1.1rem;
  margin-bottom: 25px;
  line-height: 1.7;
`;

const TransportInfo = styled.div`
  text-align: left;
  margin-top: 30px;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  
  h3 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    margin: 5px 0;
    font-size: 1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: #FFEB00; /* Kakao yellow */
  color: #3C1E1E;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;


const Location = () => {
  const address = "서울특별시 강서구 허준로 139, 강변아파트 309동 1302호";
  // 강변아파트 309동
  const kakaoMapUrl = "https://map.kakao.com/link/to/강변아파트 309동,37.564555,126.855101";

  return (
    <Section>
      <SectionTitle>오시는 길</SectionTitle>
      <MapContainer>
        지도 이미지 영역
      </MapContainer>
      <Address>{address}</Address>
      <Button href={kakaoMapUrl} target="_blank" rel="noopener noreferrer">
        카카오맵으로 길찾기
      </Button>
      <TransportInfo>
        <h3>대중교통 안내</h3>
        <p><strong>지하철:</strong> 9호선 가양역 3번 출구, 도보 5분</p>
      </TransportInfo>
    </Section>
  );
};

export default Location;
