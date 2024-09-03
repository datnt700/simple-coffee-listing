import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Card } from './components/Card';
import { Tab } from './components/Tab';
import { Introduction } from './components/Introduction';
import { CardType } from './styles/CardType';

function App() {
  const [cardData, setCardData] = useState<CardType[]>([]);
  const [filterdData, setFilterdData] = useState<CardType[]>([]);

  const [tabActive, setTabActive] = useState<string>('all');

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

  const handleTabClick = (tabId: string) => {
    setTabActive(tabId);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        );

        setCardData(result.data);
        setFilterdData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (tabActive === 'all') {
      setFilterdData(cardData);
    } else {
      const formattedData = cardData.filter((card) => card.available === true);
      setFilterdData(formattedData);
    }
  }, [tabActive, cardData]);

  return (
    <div className="container">
      <div className="collection">
        <div className="content">
          <Introduction />
          <Tab tabs={tabs} tabActive={tabActive} />
          <div className="list-card">
            {filterdData ? (
              filterdData.map((card) => (
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
  );
}

export default App;
