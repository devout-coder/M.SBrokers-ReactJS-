import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";
import { Navbar } from "./Components/Navbar";

const Stock = () => {
  const { symbol } = useParams();

  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  function fetchStock() {
    let StockSymbol = symbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}.BSE&outputsize=compact&apikey=HGJWFG4N8AQ66ICD`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValuesFunction);
        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
      });
  }

  useEffect(() => {
    fetchStock();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{ width: 720, height: 440, title: symbol }}
      />
    </div>
  );
};

export default Stock;
