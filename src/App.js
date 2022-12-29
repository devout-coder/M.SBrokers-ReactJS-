import Navbar from './Navbar.jsx'
import ListItems from './ListItems.jsx'
import SearchBar from'./SearchBar.jsx'
import News from "./news.jsx"
import { PaginationStocks } from './PaginationStocks.jsx'
import { PagesNews } from './PaginationNews.jsx'
import { Player } from '@lottiefiles/react-lottie-player';

import {useState,useEffect} from 'react';

let stocks = null


export default function App() {

  const[data,setdata] = useState([])
  const [type,setType] = useState('Fetching')
  const[newsdata,setNewsdata] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(7)
  const [currentNewsPage,setCurrentNewsPage] = useState(2)
  const [newsPerPage] = useState(2)

  //UseEffect News
useEffect(()=>{
  let newscontroller = new AbortController()
  let newsSignal = newscontroller.signal
  fetch("https://inshorts.deta.dev/news?category=business",newsSignal).then(res=>res.json()).then(res=>{console.log(res.data)
  setNewsdata(res.data)
}).catch(console.log('cannot fetch news api'))
return ()=>{newscontroller.abort()}
},[])


  //useEffect stocks

  useEffect(()=>{
    let controller = new AbortController()
    let signal = controller.signal;
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3da147d207msh81549da6e4e8910p10a44ajsn1bcc5dcf03bb',
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
  }
 fetch('https://latest-stock-price.p.rapidapi.com/any',options,signal)
    .then(response => response.json())
    .then(response => {

      if(response.length !== 0){
        setType('Fetched')
        stocks = response
        setdata(stocks)
      }
      else{
        console.log('not fetched');
        setType('TryAgain')
      }
    })
    .catch(() => console.log('error caught could not fetch data'))
    return ()=>{controller.abort()}
  },[])

const handleFilter = (name)=>{
setdata(stocks.filter((stock)=>{
   if(stock.symbol.toLowerCase().includes(name.toLowerCase())){
    return stock
  }
  if(name === " "){
    return stock
  }
 
  else{
    return null
  }

}))  
}
const handleRenderData = (val)=>{
if(val === 'Advance'){
  setdata(stocks.filter(stock=>stock.pChange>0))
}
if(val === 'Decline'){
  setdata(stocks.filter(stock=>stock.pChange<0))
}
if(val === 'TopGainers'){
let newData = stocks.filter(stock=>stock.pChange>0)
newData.sort((a,b)=>b.pChange-a.pChange)
 let TopTen = newData.slice(0,11)
 setdata(TopTen)

}
if(val === 'TopLoosers'){
  let newData = stocks.filter(stock=>stock.pChange<0)
  newData.sort((a,b)=>a.pChange-b.pChange)
  let TopTen = newData.slice(0,11)
  setdata(TopTen)
}
}
function handleChangePage(number){
  setCurrentPage(number)
}
function NextNewsPage(){
  if(currentNewsPage>=13){
    setCurrentNewsPage(1)
  }
  else{
    setCurrentNewsPage(n=>n+1)
  }
}
function PreviousNewsPage(){
  if(currentNewsPage<=1){
    setCurrentNewsPage(1)
  }
  else{
    setCurrentNewsPage(n=>n-1)
  }
}
const indexOfLastPost = currentPage*postPerPage
const indexOfFirstPost = indexOfLastPost - postPerPage
const CurrentStocksData = data.slice(indexOfFirstPost,indexOfLastPost)

const indexOfLastNews = currentNewsPage*newsPerPage
const indexOfFirstNews = indexOfLastNews-newsPerPage

const CurrentNewsData = newsdata.slice(indexOfFirstNews,indexOfLastNews)

if(type === 'Fetching'){
  return(
    <>
    <div className='loading' >
         <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_kxsd2ytq.json"
              style={{ height: '300px', width: '300px' }}>
          </Player>
    </div>
    </>

  )
}
if(type === 'TryAgain'){
  return(
<>
    <div className='sorry'>
       <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_ge2cws3x.json"
              style={{ height: '600px', width: '600px' }}>
      </Player>
    </div>

</>


  )
}
if(type === 'Fetched'){

  return(
    <>
      <Navbar/>
      <div className='maincontainer'>
        <div className="container">
          <SearchBar  RenderType={handleRenderData} filter={handleFilter}  />
          <ListItems stocks={CurrentStocksData}/>
          <PaginationStocks ChangePage={handleChangePage} TotalPost={data.length} postPerPage={postPerPage}/>

        </div>
        <div className='newscontainer'>
          {newsdata.length === 0 ? (
          <div className='loadingNews'>
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/private_files/lf30_fup2uejx.json"
              style={{ height: '300px', width: '300px' }}>
            </Player>
          </div>):
          (<News  news={CurrentNewsData}/>)
          }
        </div>
        <div className='NewsCarousel'>
          <PagesNews nextNewsPage={NextNewsPage} previousNewsPage={PreviousNewsPage} />
        </div>
      </div>
      
    </>
);
}
}


