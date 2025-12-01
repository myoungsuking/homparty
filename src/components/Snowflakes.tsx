import React from 'react';
import styled, { keyframes } from 'styled-components';

const createFallAnimation = (swayAmount: number) => keyframes`
  0% {
    transform: translateY(-100vh) translateX(0) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: translateY(25vh) translateX(${swayAmount * 0.5}px) rotate(90deg);
  }
  50% {
    transform: translateY(50vh) translateX(${swayAmount}px) rotate(180deg);
  }
  75% {
    transform: translateY(75vh) translateX(${swayAmount * 0.5}px) rotate(270deg);
  }
  100% {
    transform: translateY(100vh) translateX(0) rotate(360deg);
    opacity: 0.2;
  }
`;

const Snowflake = styled.div<{ 
  left: number; 
  delay: number; 
  duration: number; 
  size: number; 
  swayAmount: number;
}>`
  position: fixed;
  top: -10px;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: white;
  border-radius: 50%;
  opacity: 0.9;
  animation: ${({ swayAmount }) => createFallAnimation(swayAmount)} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${({ size }) => size * 2}px rgba(255, 255, 255, 0.8),
              0 0 ${({ size }) => size * 3}px rgba(255, 255, 255, 0.5),
              0 0 ${({ size }) => size * 4}px rgba(255, 255, 255, 0.3);
  z-index: 1;
  filter: blur(${({ size }) => size < 4 ? 0.5 : 0}px);
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
  // 눈보라 효과를 위해 눈송이를 훨씬 많이 생성 (300개)
  const snowflakes = Array.from({ length: 300 }, (_, i) => {
    const size = 2 + Math.random() * 8; // 2-10px
    const speed = Math.random();
    let duration = 1.5 + Math.random() * 2; // 1.5-3.5초 (빠르게)
    let swayAmount = 30 + Math.random() * 50; // 30-80px 흔들림
    
    if (speed > 0.7) {
      duration = 1 + Math.random() * 1.5; // 1-2.5초 (매우 빠름)
      swayAmount = 50 + Math.random() * 80; // 50-130px (더 많이 흔들림)
    } else if (speed < 0.3) {
      duration = 2.5 + Math.random() * 2; // 2.5-4.5초
      swayAmount = 20 + Math.random() * 30; // 20-50px (적게 흔들림)
    }
    
    return {
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration,
      size,
      swayAmount: swayAmount * (Math.random() > 0.5 ? 1 : -1), // 좌우 랜덤
    };
  });

  return (
    <SnowflakesContainer>
      {snowflakes.map((snowflake) => (
        <Snowflake
          key={snowflake.id}
          left={snowflake.left}
          delay={snowflake.delay}
          duration={snowflake.duration}
          size={snowflake.size}
          swayAmount={snowflake.swayAmount}
        />
      ))}
    </SnowflakesContainer>
  );
};

export default Snowflakes;

