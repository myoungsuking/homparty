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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`;

const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #eee;
`;

const Gallery = () => {
  // Replace with your actual image URLs
  const images = [
    'https://picsum.photos/id/1015/600/600',
    'https://picsum.photos/id/1018/600/600',
    'https://picsum.photos/id/1025/600/600',
    'https://picsum.photos/id/10/600/600',
    'https://picsum.photos/id/20/600/600',
    'https://picsum.photos/id/30/600/600',
  ];

  return (
    <Section>
      <SectionTitle>우리의 공간</SectionTitle>
      <PhotoGrid>
        {images.map((src, index) => (
          <Photo key={index} src={src} alt={`House photo ${index + 1}`} />
        ))}
      </PhotoGrid>
    </Section>
  );
};

export default Gallery;
