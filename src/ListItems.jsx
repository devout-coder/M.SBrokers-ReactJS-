
const ListItems = ({stocks}) =>{
    return (
        <>
            {stocks?.map(stock => {
                return (
                    <section className="ul">
                    {stock?.pChange >= 0 ? (
                        <>  
                        <a key={stock?.identifier} className="links" href={`https://in.tradingview.com/symbols/NSE-${stock.symbol}/`}>
                        <li className="green" key={stock?.identifier}>
                            <div className="Item">
                                <p className="symbol" >{stock?.symbol}</p>
                                <p className="ltp">₹ {stock?.lastPrice}</p>
                                <p className="change">{stock?.pChange} %</p>
                            </div>
                        </li>
                        </a>
                        </>
                    ) : (
                        <>
                        <a key={stock?.identifier} className="links" href={`https://in.tradingview.com/symbols/NSE-${stock.symbol}/`}>
                        <li className="red" key={stock?.identifier}>
                            <div className="Item">
                                <p className="symbol">{stock?.symbol}</p>
                                <p className="ltp">₹ {stock?.lastPrice}</p>
                                <p className="change">{stock?.pChange} %</p>
                            </div>
                        </li>
                        </a>
                        </>
                    ) }
            </section> )
            })}
        </>
    )

}


export default ListItems