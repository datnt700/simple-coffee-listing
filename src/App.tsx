/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Card } from './components/Card';
import { Tab } from './components/Tab';
import { Introduction } from './components/Introduction';
import backGround from './assets/bg-cafe.jpg';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    font-optical-sizing: auto;
    background-color: #1b1d1f;
  }

  p,
  h1,
  h3,
  ul {
    margin: 0;
    padding: 0;
  }
`;

const containerStyles = css`
  background-image: url(${backGround});
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
`;

const collectionStyles = css`
  padding: 3.5rem 1rem 3rem;
  @media (min-width: 640px) {
    padding: 3.5rem 5rem 3rem;
  }
`;
const contentStyles = css`
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

const listCardStyles = css`
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

interface CardObject {
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
  available: boolean;
}

function App() {
  const [cardData, setCardData] = useState<Array<CardObject>>([]);
  const [tabActive, setTabActive] = useState<string>('all');

  const getData = async () => {
    try {
      const result = await axios.get(
        'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
      );
      setCardData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTab1Click = () => {
    getData();
    setTabActive('all');
  };

  const handleTab2Click = () => {
    const availableCard = cardData?.filter((card) => card.available === true);
    setCardData(availableCard);
    setTabActive('available');
  };

  return (
    <>
      <Global styles={globalStyles} />
      <div css={containerStyles}>
        <div css={collectionStyles}>
          <div css={contentStyles}>
            <Introduction />
            <Tab
              clickEventTab1={handleTab1Click}
              clickEventTab2={handleTab2Click}
              tabActive={tabActive}
            />
            <div css={listCardStyles}>
              {cardData ? (
                cardData.map((card) => (
                  <Card
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    popular={card.popular}
                    price={card.price}
                    rating={card.rating}
                    votes={card.votes}
                    available={card.available}
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
