import React, { useState, useEffect } from "react";
import champimg from "../images/champ2/champ2image.png";
import "../../../css/MainPage.css";

export default function PlayerStats({
  playerHP,
  playerSpeed,
  playerDMG,
  playerMoney,
}) {
  const champImg = {
    width: "200px",
  };

  // State to store the fetched items
  const [shopItems, setShopItems] = useState([]);

  // Define a mapping of item types to labels
  const itemTypeLabels = {
    armor: "HP",
    sword: "Attack",
    boots: "Speed",
  };

  // State to store the displayed item index for each type
  const [displayedItems, setDisplayedItems] = useState({
    armor: 0,
    sword: 0,
    boots: 0,
  });

  // Function to fetch items
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json();
      })
      .then((data) => {
        setShopItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to handle the "Next" button click for a specific type
  const handleNextItem = (type) => {
    setDisplayedItems((prevDisplayedItems) => {
      const itemCount = filterShopItems(type).length;
      const nextIndex = (prevDisplayedItems[type] + 1) % itemCount;
      return {
        ...prevDisplayedItems,
        [type]: nextIndex,
      };
    });
  };

  // Function to filter shop items based on type
  const filterShopItems = (type) => {
    return shopItems.filter((item) => item.type === type);
  };

  // Function to handle the "BUY" button click for a specific type
  const handleBuyItem = (type) => {
    // You can implement the logic for buying items here
    console.log(`Buying ${type}`);
  };

  return (
    <div className="player-container">
      <div className="card">
        <div className="card-content">
          <img src={champimg} style={champImg} alt="Champion" />
          <div className="player-stats">
            <h3>Stats</h3>
            <h4>HP: {playerHP}</h4>
            <h4>Damage: {playerDMG}</h4>
            <h4>Speed: {playerSpeed}</h4>
            <h4>Money: {playerMoney}</h4>
          </div>
        </div>
      </div>
      <div className="shop-card">
        {/* Armor Column */}
        <div className="shop-column">
          {shopItems.length > 0 && (
            <div key={displayedItems.armor} className="shop-item">
              <div className="item-content">
                <img
                  src={filterShopItems("armor")[displayedItems.armor].img}
                  alt={filterShopItems("armor")[displayedItems.armor].name}
                />
                <div className="item-info">
                  <p>{filterShopItems("armor")[displayedItems.armor].name}</p>
                  <p>
                    {itemTypeLabels.armor} +{" "}
                    {filterShopItems("armor")[displayedItems.armor].added_power} |
                    Price: {filterShopItems("armor")[displayedItems.armor].price} Coins
                  </p>
                </div>
              </div>
              <div className="shop-buttons">
                <button onClick={() => handleBuyItem("armor")}>BUY</button>
                <button onClick={() => handleNextItem("armor")}>Next Armor</button>
              </div>
            </div>
          )}
        </div>

        {/* Sword Column */}
        <div className="shop-column">
          {shopItems.length > 0 && (
            <div key={displayedItems.sword} className="shop-item">
              <div className="item-content">
                <img
                  src={filterShopItems("sword")[displayedItems.sword].img}
                  alt={filterShopItems("sword")[displayedItems.sword].name}
                />
                <div className="item-info">
                  <p>{filterShopItems("sword")[displayedItems.sword].name}</p>
                  <p>
                    {itemTypeLabels.sword} +{" "}
                    {filterShopItems("sword")[displayedItems.sword].added_power} |
                    Price: {filterShopItems("sword")[displayedItems.sword].price} Coins
                  </p>
                </div>
              </div>
              <div className="shop-buttons">
                <button onClick={() => handleBuyItem("sword")}>BUY</button>
                <button onClick={() => handleNextItem("sword")}>Next Sword</button>
              </div>
            </div>
          )}
        </div>

        {/* Boots Column */}
        <div className="shop-column">
          {shopItems.length > 0 && (
            <div key={displayedItems.boots} className="shop-item">
              <div className="item-content">
                <img
                  src={filterShopItems("boots")[displayedItems.boots].img}
                  alt={filterShopItems("boots")[displayedItems.boots].name}
                />
                <div className="item-info">
                  <p>{filterShopItems("boots")[displayedItems.boots].name}</p>
                  <p>
                    {itemTypeLabels.boots} +{" "}
                    {filterShopItems("boots")[displayedItems.boots].added_power} |
                    Price: {filterShopItems("boots")[displayedItems.boots].price} Coins
                  </p>
                </div>
              </div>
              <div className="shop-buttons">
                <button onClick={() => handleBuyItem("boots")}>BUY</button>
                <button onClick={() => handleNextItem("boots")}>Next Boots</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
