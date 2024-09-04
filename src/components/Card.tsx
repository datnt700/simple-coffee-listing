/** @jsxImportSource @emotion/react */
import starNoFill from '../assets/Star.svg';
import starFill from '../assets/Star_fill.svg';
import { cardCss } from './CardStyles';

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
