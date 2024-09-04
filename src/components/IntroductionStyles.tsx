/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const introStyles = css({
  position: 'relative',
  img: {
    position: 'absolute',
    top: '-60px',
    right: ' -30px',
  },
});

export const titleStyles = css({
  zIndex: '10',
  position: 'relative',
  fontSize: '2rem',
  color: '#fef7ee',
});

export const descriptionStyles = css({
  zIndex: '10',
  position: 'relative',
  fontSize: '1rem',
  color: '#6f757c',
  marginTop: '0.5rem',
  maxWidth: '500px',
});
