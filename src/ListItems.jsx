
const ListItems = ({Stocks}) =>{
  
            return (
                <>
                <ul className="ul">
                    {Stocks.map(stock=>{
                    if(stock.pChange>=0){
                        return(
                            <li className="green" key={stock.identifier}>
                            <div className="Item">
                            <p className="symbol" >{stock.symbol}</p>
                            <p className="ltp">₹ {stock.lastPrice}</p>
                            <p className="change">{stock.pChange} %</p>
                            </div>
        
                        </li>
                        )
                    }
                    else if(stock.pChange<0){
                        return(
                        <li className="red" key={stock.identifier}>
                        <div className="Item">
                        <p className="symbol">{stock.symbol}</p>
                        <p className="ltp">₹ {stock.lastPrice}</p>
                        <p className="change">{stock.pChange} %</p>
                        </div>
                    </li>
                            )}
                    }
                    )}
                </ul>
            </>
            )
        }


export default ListItems