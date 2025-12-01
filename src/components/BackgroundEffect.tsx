import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fall = keyframes`
  0% {
    opacity: 0;
    top: -10%;
    transform: translateX(0) rotate(0);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
    top: 110%;
    transform: translateX(-10vw) rotate(360deg);
  }
`;

const sway = keyframes`
  0% { transform: translateX(0) rotate(0); }
  100% { transform: translateX(10vw) rotate(-360deg); }
`;

const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const Snowflake = styled.div.attrs<{ speed: number; delay: number; size: number }>(props => ({
  style: {
    animationDelay: `${props.delay}s`,
    width: `${props.size}px`,
    height: `${props.size}px`,
    left: `${Math.random() * 100}%`,
  },
}))<{ speed: number; delay: number; size: number; animation: any }>`
  position: absolute;
  top: -10%;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: ${({ animation, speed }) => css`${animation} ${speed}s linear infinite`};
`;

const BackgroundEffect = () => {
  const snowflakes = Array.from({ length: 100 }).map((_, i) => {
    const speed = Math.random() * 10 + 5; // 5-15s
    const delay = Math.random() * 15;
    const size = Math.random() * 4 + 1; // 1-5px
    const animation = Math.random() > 0.5 ? fall : sway;
    return <Snowflake key={i} speed={speed} delay={delay} size={size} animation={animation} />;
  });

  return <SnowContainer>{snowflakes}</SnowContainer>;
};

export default BackgroundEffect;
