/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import backGround from '../assets/bg-cafe.jpg';

export const containerStyles = css`
  background-image: url(${backGround});
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
`;

export const collectionStyles = css`
  padding: 3.5rem 1rem 3rem;
  @media (min-width: 640px) {
    padding: 3.5rem 5rem 3rem;
  }
`;
export const contentStyles = css`
  padding: 5rem 2.5rem;
  background-color: #111315;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    padding: 5rem 4rem;
  }
  @media (min-width: 1024px) {
    padding: 5rem 5rem;
  }
  @media (min-width: 1280px) {
    padding: 5rem 8rem;
  }
`;

export const listCardStyles = css`
  margin-top: 2.6rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
