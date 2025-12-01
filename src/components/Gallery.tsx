import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 30px;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

const Photo = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #eee;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
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
