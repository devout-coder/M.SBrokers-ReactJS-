export default function SearchBar({filter,RenderType}){
    return(
        <div className="searchbar">
            <input placeholder="Search For Stocks....." onChange={e=>filter(e.target.value)}/>
            <div className="buttons">
                <button onClick={()=>RenderType('Advance')} >Advance</button>
                <button onClick={()=>RenderType('TopGainers')} >Top 10 Gainers</button>
                <button onClick={()=>RenderType('Decline')} >Decline</button>
                <button onClick={()=>RenderType('TopLoosers')} >Top 10 Loosers</button>

            </div>
        </div>
    )
}