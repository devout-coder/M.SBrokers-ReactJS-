 let count = 0
 const News = ({news}) =>{
    return(
        <>
        <h1 className="outlook">Today's Outlook</h1>
        <ul>
            {news?.map((item) => {
            return (
            <li className="newsItem" key={count++}>
                <div className="newsimage" >
                    <img className="newsIMG" src={item?.urlToImage} alt=""  />
                </div>
                <div className="feed">
                    <h3>{item?.title}</h3>
                    <p>{`${item?.source.name} | ${item.publishedAt}`}</p>
                    <p>{item?.description} <a className="newslink" href={item?.url}>See More..</a></p>
                </div>
            </li>)}
            )}
        </ul>

        </>
    )
}
export default News