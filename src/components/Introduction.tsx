/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import vector from '../assets/vector.svg';

const introStyles = css({
  position: 'relative',
  img: {
    position: 'absolute',
    top: '-60px',
    right: ' -30px',
  },
});

const titleStyles = css({
  zIndex: '10',
  position: 'relative',
  fontSize: '2rem',
  color: '#fef7ee',
});

const descriptionStyles = css({
  zIndex: '10',
  position: 'relative',
  fontSize: '1rem',
  color: '#6f757c',
  marginTop: '0.5rem',
  maxWidth: '500px',
});

export const Introduction = () => {
  return (
    <div css={introStyles}>
      <img src={vector} alt="vector" />
      <h1 css={titleStyles}>Our Collection</h1>
      <p css={descriptionStyles}>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </div>
  );
};
