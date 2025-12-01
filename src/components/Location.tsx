import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  font-weight: 700;
  background: linear-gradient(135deg, #E8D5C4 0%, #F5E6D3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 20px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Address = styled.p`
  font-size: 1.15rem;
  margin-bottom: 30px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  padding: 20px;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TransportInfo = styled.div`
  text-align: left;
  margin-top: 30px;
  padding: 30px;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  
  h3 {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
  
  p {
    margin: 8px 0;
    font-size: 1.05rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: linear-gradient(135deg, #FFEB00 0%, #FFD700 100%);
  color: #3C1E1E;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 6px 20px rgba(255, 235, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 20px;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 235, 0, 0.5);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;


const Location = () => {
  const address = "서울특별시 강서구 허준로 139, 강변아파트 309동 1302호";
  const latitude = 37.564555;
  const longitude = 126.855101;
  const kakaoMapUrl = `https://map.kakao.com/link/to/강변아파트 309동,${latitude},${longitude}`;
  
  // 카카오맵 공유 링크를 사용한 미리보기
  const mapEmbedUrl = `https://map.kakao.com/link/map/강변아파트,${latitude},${longitude}`;

  return (
    <Section>
      <SectionTitle>오시는 길</SectionTitle>
      <MapContainer>
        <iframe
          src={mapEmbedUrl}
          title="카카오맵 미리보기"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          loading="lazy"
        />
      </MapContainer>
      <Address>{address}</Address>
      <Button href={kakaoMapUrl} target="_blank" rel="noopener noreferrer">
        🗺️ 카카오맵으로 길찾기
      </Button>
      <TransportInfo>
        <h3>🚇 대중교통 안내</h3>
        <p><strong>지하철:</strong> 9호선 가양역 3번 출구, 도보 5분</p>
        <p><strong>버스:</strong> 강서구청 정류장 하차</p>
      </TransportInfo>
    </Section>
  );
};

export default Location;
