import Navbar from './Navbar.jsx'
import ListItems from './ListItems.jsx'
import SearchBar from'./SearchBar.jsx'
import News from "./news.jsx"

import {useState,useEffect} from 'react';

let stocks = null
let newsdata = null

fetch("https://inshorts.deta.dev/news?category=business").then(res=>res.json()).then(res=>{console.log(res)

}).catch(console.log('cannot fetch news api'))

fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=53579bd4f3c44b59b6cb9a017c65f583').then(res=>res.json()).then(res=>{console.log(res)
newsdata = res.articles
}).catch(console.log('cannot fetch news api'))
export default function App() {

  const[data,setdata] = useState([])
  const [type,setType] = useState('Fetching')

  //useEffect 
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
  //else(stock.symbol.toLowerCase().includes(name.toLowerCase())) 
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

if(type === 'Fetching'){
  return(
    <>
    <div className='loading' ></div>
    </>

  )
}
if(type === 'TryAgain'){
  return(
    <div className="maincontainer">
    <Navbar/>
    <h1 className='sorryinfo'>Could not fetch data kindly refresh the page</h1>
    <div className='sorry'></div>
    </div>

  )
}
if(type === 'Fetched'){

  return(
    <>
        <Navbar/>
    <div className='maincontainer'>
      <div className="container">
        <SearchBar  RenderType={handleRenderData} filter={handleFilter}  />
        <ListItems stocks={data}/>
      </div>
      <div className='newscontainer'>
        <News news={newsdata}/>
      </div>
    </div>
    </>
);
}
}


