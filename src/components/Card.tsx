/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import starNoFill from '../assets/Star.svg';
import starFill from '../assets/Star_fill.svg';

const cardCss = {
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

interface CardProps {
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
  available: boolean;
}

export const Card = ({
  image,
  name,
  popular,
  price,
  rating,
  votes,
  available,
}: CardProps) => {
  return (
    <div css={cardCss.card}>
      <div css={cardCss.photo}>
        <img src={image} alt="photo" />
        {popular && <span css={cardCss.label}>Popular</span>}
      </div>
      <div css={cardCss.info}>
        <h3 css={cardCss.name}>{name}</h3>
        <span css={cardCss.price}>{price}</span>
      </div>
      <div css={cardCss.review}>
        {rating !== null ? (
          <>
            <div css={cardCss.rate}>
              <img src={starFill} alt="icon" />
              <span css={cardCss.rating}>{rating}</span>
              <span css={cardCss.vote}>({votes} votes)</span>
            </div>
            {!available && <p css={cardCss.soldOut}>Sold Out</p>}
          </>
        ) : (
          <>
            <div css={cardCss.rate}>
              <img src={starNoFill} alt="icon" />
              <span css={cardCss.vote}>No Rating</span>
            </div>
            {!available && <p css={cardCss.soldOut}>Sold Out</p>}
          </>
        )}
      </div>
    </div>
  );
};
