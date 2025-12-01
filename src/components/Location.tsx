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
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #888;
`;

const Address = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const TransportInfo = styled.div`
  text-align: left;
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  h3 {
    font-size: 1.2rem;
    margin-top: 0;
  }
  
  p {
    margin: 5px 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #FFEB00; /* Kakao yellow */
  color: #3C1E1E;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  
  &:hover {
    opacity: 0.9;
  }
`;


const Location = () => {
  const address = "서울시 OO구 OO로 123, OOO아파트 101동 1001호";
  // Replace with your actual Kakao Maps URL
  const kakaoMapUrl = "https://map.kakao.com/link/to/YOUR_LOCATION_NAME,37.509990,127.035521";

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
        <p><strong>지하철:</strong> O호선 OO역 O번 출구, 도보 5분</p>
        <p><strong>버스:</strong> OO번, OO번 버스, OOO 정류장 하차</p>
      </TransportInfo>
    </Section>
  );
};

export default Location;
