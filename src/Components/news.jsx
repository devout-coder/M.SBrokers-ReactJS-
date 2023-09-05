import { MyNewsContext } from "../context.js";
import { useContext } from "react";

let count = 0;
const News = () => {
  const news = useContext(MyNewsContext);
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${day} ${month}`;
    const formattedTime = `${hours}:${minutes}`;

    return { formattedDate, formattedTime };
  }
  return (
    <div className="newsbox">
      <h1 className="outlook">Today's Outlook</h1>
      <br></br>
      <ul className="newscontainer">
        {news?.map((item) => {
          const { formattedDate, formattedTime } = formatTimestamp(item.createdAt);
          return (
            <li className="newsItem" key={count++}>
              <div className="newsimage">
                <img className="newsIMG" src={item.imageUrl} alt="" />
              </div>
              <div className="feed">
                <h3>{item?.title}</h3>
                <p className="date">{`${item?.authorName} | ${formattedDate} ${formattedTime}`}</p>
                <p className="Content">
                  {item?.content}{" "}
                  <a className="newslink" href={item?.readMoreUrl}>
                    See More..
                  </a>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default News;
