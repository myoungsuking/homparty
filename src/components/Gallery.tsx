import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
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

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const PhotoContainer = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;

  ${PhotoContainer}:hover & {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Gallery = () => {
  // 두 번째 이미지 URL을 원하시는 것으로 교체하세요.
  const images = [
    'https://i3.ruliweb.com/img/22/02/26/17f34c7e588524cc2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd9qR1uXz_RyBEmbpKPFYJYlpzwfzI6nbaA&s',
  ];

  return (
    <Section>
      <SectionTitle>My Sweet Home</SectionTitle>
      <PhotoGrid>
        {images.map((src, index) => (
          <PhotoContainer key={index}>
            <Photo src={src} alt={`House photo ${index + 1}`} />
          </PhotoContainer>
        ))}
      </PhotoGrid>
    </Section>
  );
};

export default Gallery;
