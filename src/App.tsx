import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Card } from './components/Card';
import { Tab } from './components/Tab';
import { Introduction } from './components/Introduction';

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
      console.log(result.data);
      const formattedData = result.data.map((item: CardObject) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        popular: item.popular,
        price: item.price,
        rating: item.rating,
        votes: item.votes,
        available: item.available,
      }));
      setCardData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(cardData);

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
    <div className="container">
      <div className="collection">
        <div className="content">
          <Introduction />
          <Tab
            clickEventTab1={handleTab1Click}
            clickEventTab2={handleTab2Click}
            tabActive={tabActive}
          />
          <div className="list-card">
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
  );
}

export default App;
