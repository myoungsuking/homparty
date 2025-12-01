import React from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.3;
  }
`;

const Snowflake = styled.div<{ left: number; delay: number; duration: number; size: number }>`
  position: fixed;
  top: -10px;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: ${fall} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  pointer-events: none;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const SnowflakesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Snowflakes: React.FC = () => {
  // 눈송이 개수와 위치를 랜덤하게 생성
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4, // 3-7초
    size: 3 + Math.random() * 4, // 3-7px
  }));

  return (
    <SnowflakesContainer>
      {snowflakes.map((snowflake) => (
        <Snowflake
          key={snowflake.id}
          left={snowflake.left}
          delay={snowflake.delay}
          duration={snowflake.duration}
          size={snowflake.size}
        />
      ))}
    </SnowflakesContainer>
  );
};

export default Snowflakes;

