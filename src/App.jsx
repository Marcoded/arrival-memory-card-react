/* eslint-disable */
import { useEffect, useState } from "react";

import "./App.css";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import _, { set } from "lodash";
import TopBar from "./topBar";
import FlipMove from 'react-flip-move';

function App() {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      clicked: false,
      name: "Aboot is Dead",
      source: "./AbbotIsDead1.webp",
    },
    { id: uuidv4(), clicked: false, name: "Ian", source: "./Ian1.webp" },
    {
      id: uuidv4(),
      clicked: false,
      name: "Ian Louise eat apple",
      source: "./IanLouiseEatApple1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Ian Louise must go",
      source: "./IanLouiseMustGo1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "It wansn't us",
      source: "./ItWasntUs1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Louise",
      source: "./Louise1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Louise has question",
      source: "./LouiseHasQuestion1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Louise has weapon",
      source: "./LouiseHasWeapon1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Offer Weapon",
      source: "./OfferWeapon_1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Ship grounded",
      source: "./ShipGrounded_1.webp",
    },
    {
      id: uuidv4(),
      clicked: false,
      name: "Solve",
      source: "./Solve1.webp",
    },
    { id: uuidv4(), clicked: false, name: "Time", source: "./Time1.webp" },
  ]);

  const [nameArray, setnameArray] = useState([]);
  const currentScore = nameArray.length;
  const [bestScore, setBestScore] = useState(0);

  const [hardMode, setHardMode] = useState(false);

  useEffect(() => {
    console.log("shuffling from use effect");
    setCards(_.shuffle(cards));
  }, []);

  const calculateBestScore = (currentArr, savedBest) => {
    const currentScore = currentArr.length;
    if (currentScore > savedBest) setBestScore(currentScore);
  };

  const calculateCurrentScore = (currentArr) => {
    return (currentArr = currentArr.length);
  };

  const handleClick = (name) => {
    if (nameArray.includes(name)) {
      setnameArray([]);
    } else {
      pushCardOnClick(name);
      const newNameArray = [...nameArray, name];
      calculateBestScore(newNameArray, bestScore);
    }
    setCards(_.shuffle(cards));
  };

  const toggleHardMode = () => {
    hardMode === true ? setHardMode(false) : setHardMode(true);
  };

  const pushCardOnClick = (name) => {
    setnameArray((existing) => [...existing, name]);
  };

  return (
    <>
      <TopBar
        bestScore={bestScore}
        currentScore={calculateCurrentScore(nameArray)}
        toggleHardMode={toggleHardMode}
        hardMode={hardMode}
      />

      <div className="card-container">
     
        {cards.map((card) => {
          return (
            <Card
              name={card.name}
              source={card.source}
              key={card.id}
              handleClick={handleClick}
              hardMode={hardMode}
            />
          );
        })}
       
      </div>
    </>
  );
}

export default App;
