/* eslint-disable */
import { useEffect, useState } from "react";

import "./App.css";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import _, { set } from "lodash";

function App() {
  const [cards, setCards] = useState([
    { id: uuidv4(), clicked: false, name: "Aboot is Dead", source:"public/AbbotIsDead1.jpg" },
    { id: uuidv4(), clicked: false, name: "Ian", source:'public/Ian1.jpg' },
    { id: uuidv4(), clicked: false, name: "Ian Louise eat apple" ,source:"public/IanLouiseEatApple1.jpg"},
    { id: uuidv4(), clicked: false, name: "Ian Louise must go" ,source:"public/IanLouiseMustGo1.jpg"},
    { id: uuidv4(), clicked: false, name: "It wansn't us" ,source:"public/ItWasntUs1.jpg"},
    { id: uuidv4(), clicked: false, name: "Louise" ,source:"public/Louise1.jpg"},
    { id: uuidv4(), clicked: false, name: "Louise has question" ,source:"public/LouiseHasQuestion1.jpg"},
    { id: uuidv4(), clicked: false, name: "Louise has weapon" ,source:"public/LouiseHasWeapon1.jpg"},
    { id: uuidv4(), clicked: false, name: "Offer Weapon" ,source:"public/OfferWeapon_1.jpg"},
    { id: uuidv4(), clicked: false, name: "Ship grounded" ,source:"public/ShipGrounded_1.jpg"},
    { id: uuidv4(), clicked: false, name: "Solve",source:"public/Solve1.jpg" },
    { id: uuidv4(), clicked: false, name: "Time",source:"public/Time1.jpg" },
  ]);

  const [nameArray, setnameArray] = useState([]);
  const currentScore = nameArray.length;
  const [bestScore, setBestScore] = useState(0);

  const [hardMode, setHardMode] = useState(true)

  useEffect(() => {
    console.log("shuffling from use effect");
    setCards(_.shuffle(cards));
  }, []);

  const calculateBestScore = (currentArr, savedBest) => {
    const currentScore = currentArr.length;
    if (currentScore > savedBest) setBestScore(currentScore);
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

  const pushCardOnClick = (name) => {
    setnameArray((existing) => [...existing, name]);
  };

  return (
    <>
      <div className="top-bar">
        <h1>Memory Game</h1>
        <p>Current score : {currentScore}</p>
        <p>Best score {bestScore}</p>
      </div>

      <div className="card-container">
        {cards.map((card) => {
          return (
            <div
              className="card"
              onClick={() => handleClick(card.name)}
              key={card.id}
            >
              <img className="image-card" src={card.source} alt="" />
              {!hardMode && <p>{card.name}</p>}
             
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
