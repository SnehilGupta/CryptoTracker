import React, { useState } from "react";
import Display from "../Display/Display";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearButton = (event) => {
    setSearchText("");
  };

  const inputLength = searchText.length > 0;

  const filteredCoins = props.coin.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="coin-input"
          onChange={handleInputChange}
        />
        {inputLength && <button onClick={handleClearButton}>Clear</button>}
      </form>

      {filteredCoins.map((coin) => {
        return (
          <Display
            key={coin}
            id={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            image={coin.image}
            currPrice={coin.current_price}
            vol={coin.total_volume}
            coinPriceChange={coin.price_change_24h}
            lastUpdate={coin.last_updated}
          />
        );
      })}
    </div>
  );
};

export default SearchBar;
