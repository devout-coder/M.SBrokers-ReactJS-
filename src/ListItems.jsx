
const ListItems = ({stocks}) =>{
    return (
        <>
            {stocks?.map(stock => {
                return (
                    <section className="ul">
                    {stock?.pChange >= 0 ? (
                        <li className="green" key={stock?.identifier}>
                            <div className="Item">
                                <p className="symbol" >{stock?.symbol}</p>
                                <p className="ltp">₹ {stock?.lastPrice}</p>
                                <p className="change">{stock?.pChange} %</p>
                            </div>

                        </li>
                    ) : (
                        <li className="red" key={stock?.identifier}>
                            <div className="Item">
                                <p className="symbol">{stock?.symbol}</p>
                                <p className="ltp">₹ {stock?.lastPrice}</p>
                                <p className="change">{stock?.pChange} %</p>
                            </div>
                        </li>
                    ) }
            </section> )
            })}
        </>
    )

}


export default ListItems