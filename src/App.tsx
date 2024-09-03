/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalSyles';
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Card } from './components/Card';
import { Tab } from './components/Tab';
import { Introduction } from './components/Introduction';
import {
  containerStyles,
  collectionStyles,
  contentStyles,
  listCardStyles,
} from './styles/ContainerStyles';

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
  const [cardData, setCardData] = useState<CardObject[]>([]);
  const [tabActive, setTabActive] = useState<string>('all');
  const [filteredData, setFilteredData] = useState<CardObject[]>([]);

  const tabs = [
    {
      label: 'All Products',
      id: 'all',
      onClick: () => handleTabClick('all'),
    },
    {
      label: 'Available Now',
      id: 'available',
      onClick: () => handleTabClick('available'),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        );
        setCardData(result.data);
        setFilteredData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (tabActive === 'all') {
      setFilteredData(cardData);
    } else {
      const availableCard = cardData.filter((card) => card.available === true);
      setFilteredData(availableCard);
    }
  }, [tabActive, cardData]);

  const handleTabClick = (tabId: string) => {
    setTabActive(tabId);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <div css={containerStyles}>
        <div css={collectionStyles}>
          <div css={contentStyles}>
            <Introduction />
            <Tab tabs={tabs} activeTabId={tabActive} />

            <div css={listCardStyles}>
              {filteredData ? (
                filteredData.map((card) => (
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
