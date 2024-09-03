/** @jsxImportSource @emotion/react */
import vector from '../assets/vector.svg';
import {
  introStyles,
  titleStyles,
  descriptionStyles,
} from './IntroductionStyles';

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
