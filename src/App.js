/* eslint-disable no-unused-vars */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    ).then((res) => {
      setCoin(res.data);
    });
  }, []);

  return (
    <div className="coin_class">
      <SearchBar coin={coin} />
    </div>
  );
};

export default App;
