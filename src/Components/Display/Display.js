import React from "react";
import "./Display.css";

export default function Display(props) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={props.image} alt="coinImg" />
          <h1>{props.name}</h1>
          <p className="coin-symbol">{props.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{props.currPrice}</p>
          <p className="coin-volume">Rs.{props.vol.toLocaleString()}</p>
          {props.coinPriceChange < 0 ? (
            <p className="coin-percent red">
              {props.coinPriceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              +{props.coinPriceChange.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">Last Update: {props.lastUpdate}</p>
        </div>
      </div>
    </div>
  );
}
