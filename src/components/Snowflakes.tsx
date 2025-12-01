import React, { useState, useEffect } from 'react';
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
  box-shadow: 0 0 ${({ size }) => size * 1.5}px rgba(255, 255, 255, 0.7),
              0 0 ${({ size }) => size * 2}px rgba(255, 255, 255, 0.4);
  z-index: 1;
  will-change: transform;
  transform: translateZ(0); /* GPU 가속 */
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
  const [snowflakeCount, setSnowflakeCount] = useState(100);
  
  useEffect(() => {
    // 모바일 성능을 위해 눈송이 개수 조절 (데스크톱: 100개, 모바일: 50개)
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setSnowflakeCount(isMobile ? 50 : 100);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // 부드럽게 사르륵 떨어지도록 속도 조절
  const snowflakes = Array.from({ length: snowflakeCount }, (_, i) => {
    const size = 2 + Math.random() * 6; // 2-8px (조금 작게)
    const speed = Math.random();
    // 느리게 사르륵 떨어지도록 duration 증가 (4-10초)
    let duration = 4 + Math.random() * 6; // 4-10초
    let swayAmount = 20 + Math.random() * 40; // 20-60px 흔들림 (조금 줄임)
    
    if (speed > 0.7) {
      duration = 3.5 + Math.random() * 4; // 3.5-7.5초
      swayAmount = 30 + Math.random() * 50; // 30-80px
    } else if (speed < 0.3) {
      duration = 6 + Math.random() * 4; // 6-10초 (더 느리게)
      swayAmount = 15 + Math.random() * 25; // 15-40px (적게 흔들림)
    }
    
    return {
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5, // 지연 시간도 늘려서 자연스럽게
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

