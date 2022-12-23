import Navbar from './Navbar.jsx'
import ListItems from './ListItems.jsx'
import SearchBar from'./SearchBar.jsx'

import {useState,useEffect} from 'react';


export default function App() {
  const[Stocks,setStocks] = useState([])
  const[data,setdata] = useState([])
  const [Type,setType] = useState('Fetching')
  useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3da147d207msh81549da6e4e8910p10a44ajsn1bcc5dcf03bb',
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
  };
  fetch('https://latest-stock-price.p.rapidapi.com/any', options)
    .then(response => response.json())
    .then(response => {
      setType('Fetched')
      setStocks(response)
      setdata(Stocks)
      console.log(response)})
    .catch(err => console.error(err));
  },[Type])

function handleFilter(name){
setdata(Stocks.filter((stock)=>{
  if(name == ''){
    return stock
  }
  else if(stock.symbol.toLowerCase().includes(name.toLowerCase())) {
    return stock
  }
}))  
}
function handleRenderData(val){
if(val === 'Advance'){
  setdata(Stocks.filter(stock=>stock.pChange>0))
}
if(val === 'Decline'){
  setdata(Stocks.filter(stock=>stock.pChange<0))
}
if(val === 'TopGainers'){
let newData = Stocks.filter(stock=>stock.pChange>0)
newData.sort((a,b)=>b.pChange-a.pChange)
 let TopTen = newData.slice(0,11)
setdata(TopTen)

}
if(val === 'TopLoosers'){
  let newData = Stocks.filter(stock=>stock.pChange<0)
  newData.sort((a,b)=>a.pChange-b.pChange)
  let TopTen = newData.slice(0,11)
  setdata(TopTen)
}
}

if(Type === 'Fetching'){
  return(
    <>
    <Navbar/>

    <SearchBar />
    <h1>Loading...</h1>
    </>

  )
}
if(Type === 'Fetched'){

  return (
    <>
    <Navbar/>
    
    <SearchBar RenderType={handleRenderData} filter={handleFilter}  />
    <ListItems Stocks={data}/>
    </>
);
}
}


