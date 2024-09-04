/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const cardCss = {
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }),

  photo: css({
    position: 'relative',
    img: {
      width: '100%',
      borderRadius: '0.6rem',
    },
  }),
  label: css({
    fontSize: '0.875rem',
    position: 'absolute',
    top: '15px',
    left: '15px',
    padding: '0.3rem 0.6rem',
    color: '#1b1d1f',
    backgroundColor: '#f6c768',
    borderRadius: '1.2rem',
  }),

  info: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  name: css({
    color: '#fef7ee',
    fontSize: '1rem',
  }),
  price: css({
    padding: '0.2rem 0.5rem',
    backgroundColor: '#bee3cc',
    borderRadius: '0.4rem',
    fontWeight: 'bold',
  }),

  review: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  rate: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }),
  rating: css({
    color: '#fef7ee',
  }),
  vote: css({
    color: '#6f757c',
  }),
  soldOut: css({
    color: '#ed735d',
  }),
};
