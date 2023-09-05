import { Link } from "react-router-dom";
import { MyStockContext } from "../context.js";
import { useContext } from "react";
let count = 0;
const ListItems = () => {
  const stocks = useContext(MyStockContext);
  if (stocks?.length === 0) {
    return (
      <div className="listcontainer">
        <h2 className="noresult">No Result Found ...</h2>
      </div>
    );
  } else {
    return (
      <>
        <div className="listcontainer">
          <li className="heading">
            <p>Index</p>
            <p>Price</p>
            <p>Change %</p>
          </li>

          {stocks?.map((stock) => {
            return (
              <section key={count++} className="ul">
                {stock?.pChange >= 0 ? (
                  <>
                    {/* <a key={stock?.identifier} className="links" href={`https://in.tradingview.com/symbols/NSE-${stock.symbol}/`}> */}
                    <Link to={`/stock/${stock?.symbol}`}>
                      <li className="green" key={stock?.identifier}>
                        <div className="Item">
                          <p className="symbol">{stock?.symbol}</p>
                          <p className="ltp">₹ {stock?.lastPrice}</p>
                          <p className="change">{stock?.pChange} %</p>
                        </div>
                      </li>
                    </Link>
                    {/* </a> */}
                  </>
                ) : (
                  <>
                    {/* <a
                      key={stock?.identifier}
                      className="links"
                      href={`https://in.tradingview.com/symbols/NSE-${stock.symbol}/`}
                    > */}
                    <Link to={`/stock/${stock?.symbol}`}>
                      <li className="red" key={stock?.identifier}>
                        <div className="Item">
                          <p className="symbol">{stock?.symbol}</p>
                          <p className="ltp">₹ {stock?.lastPrice}</p>
                          <p className="change">{stock?.pChange} %</p>
                        </div>
                      </li>
                    </Link>
                    {/* </a> */}
                  </>
                )}
              </section>
            );
          })}
        </div>
      </>
    );
  }
};

export default ListItems;
