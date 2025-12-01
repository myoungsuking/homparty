import React, { useState, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const createFallAnimation = (swayAmount: number, isMobile: boolean) => keyframes`
  0% {
    transform: translateY(-100vh) translateX(0) ${isMobile ? '' : 'rotate(0deg)'};
    opacity: 1;
  }
  25% {
    transform: translateY(25vh) translateX(${swayAmount * 0.5}px) ${isMobile ? '' : 'rotate(90deg)'};
  }
  50% {
    transform: translateY(50vh) translateX(${swayAmount}px) ${isMobile ? '' : 'rotate(180deg)'};
  }
  75% {
    transform: translateY(75vh) translateX(${swayAmount * 0.5}px) ${isMobile ? '' : 'rotate(270deg)'};
  }
  100% {
    transform: translateY(100vh) translateX(0) ${isMobile ? '' : 'rotate(360deg)'};
    opacity: 0.2;
  }
`;

const Snowflake = styled.div<{ 
  left: number; 
  delay: number; 
  duration: number; 
  size: number; 
  swayAmount: number;
  isMobile: boolean;
}>`
  position: fixed;
  top: -10px;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: white;
  border-radius: 50%;
  opacity: 0.9;
  animation: ${({ swayAmount, isMobile }) => createFallAnimation(swayAmount, isMobile)} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  pointer-events: none;
  box-shadow: ${({ isMobile, size }) => 
    isMobile 
      ? `0 0 ${size}px rgba(255, 255, 255, 0.5)` 
      : `0 0 ${size * 1.5}px rgba(255, 255, 255, 0.7), 0 0 ${size * 2}px rgba(255, 255, 255, 0.4)`
  };
  z-index: 1;
  will-change: transform;
  transform: translateZ(0); /* GPU 가속 */
  backface-visibility: hidden; /* 렌더링 최적화 */
  -webkit-backface-visibility: hidden;
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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // 모바일 감지 (화면 크기 + 터치 지원 여부)
    const checkMobile = () => {
      const widthCheck = window.innerWidth <= 768;
      const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(widthCheck || touchCheck);
    };
    
    checkMobile();
    const resizeHandler = () => checkMobile();
    window.addEventListener('resize', resizeHandler, { passive: true });
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  
  // 모바일 성능 최적화: 눈송이 개수 대폭 감소
  const snowflakeCount = isMobile ? 30 : 100;
  
  // useMemo로 눈송이 배열 메모이제이션 (리렌더링 방지)
  const snowflakes = useMemo(() => {
    return Array.from({ length: snowflakeCount }, (_, i) => {
      const size = isMobile 
        ? 2 + Math.random() * 4  // 모바일: 2-6px (더 작게)
        : 2 + Math.random() * 6; // 데스크톱: 2-8px
      
      const speed = Math.random();
      // 모바일에서는 더 느리게 (5-12초)
      let duration = isMobile 
        ? 5 + Math.random() * 7  // 모바일: 5-12초
        : 4 + Math.random() * 6;  // 데스크톱: 4-10초
      
      // 모바일에서는 흔들림도 줄임
      let swayAmount = isMobile
        ? 10 + Math.random() * 20  // 모바일: 10-30px
        : 20 + Math.random() * 40; // 데스크톱: 20-60px
      
      if (speed > 0.7) {
        duration = isMobile 
          ? 4 + Math.random() * 5  // 모바일: 4-9초
          : 3.5 + Math.random() * 4; // 데스크톱: 3.5-7.5초
        swayAmount = isMobile
          ? 15 + Math.random() * 25  // 모바일: 15-40px
          : 30 + Math.random() * 50; // 데스크톱: 30-80px
      } else if (speed < 0.3) {
        duration = isMobile
          ? 7 + Math.random() * 5  // 모바일: 7-12초
          : 6 + Math.random() * 4;  // 데스크톱: 6-10초
        swayAmount = isMobile
          ? 8 + Math.random() * 15   // 모바일: 8-23px
          : 15 + Math.random() * 25; // 데스크톱: 15-40px
      }
      
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration,
        size,
        swayAmount: swayAmount * (Math.random() > 0.5 ? 1 : -1),
      };
    });
  }, [snowflakeCount, isMobile]);

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
          isMobile={isMobile}
        />
      ))}
    </SnowflakesContainer>
  );
};

export default Snowflakes;

