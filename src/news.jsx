 let count = 0
 const News = ({news}) =>{
    return(
        <>
        <h1 className="outlook">Today's Outlook</h1>
        <ul className="newscontainer">
            {news?.map((item) => {
            return (
            <li className="newsItem" key={count++}>
                <div className="newsimage" >
                    <img className="newsIMG" src={item.imageUrl} alt=""  />
                </div>
                <div className="feed">
                    <h3>{item?.title}</h3>
                    <p>{`${item?.author} | ${item.date} ${item?.time}`}</p>
                    <p>{item?.content} <a className="newslink" href={item?.readMoreUrl}>See More..</a></p>
                </div>
            </li>)}
            )}
        </ul>

        </>
    )
}
export default News