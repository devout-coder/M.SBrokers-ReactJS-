import Navbar from './Navbar.jsx'
import ListItems from './ListItems.jsx'
import SearchBar from'./SearchBar.jsx'

import {useState,useEffect} from 'react';


export default function App() {

  const[data,setdata] = useState([])
  const [type,setType] = useState('Fetching')

  const stocks = null;

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
        console.log(response)
        console.log('first time')
      }
      else{
        console.log('not fetched');
        setType('TryAgain')
      }
    })
    .catch(() => console.log('error caught could not fetch data'))
    return ()=>{controller.abort()}

    // setType('fetched')
    // setdata(OriginalData)
    // setdata(OriginalData)
  },[])

const handleFilter = (name)=>{
setdata(stocks.filter((stock)=>{
   if(stock.symbol.toLowerCase().includes(name.toLowerCase())){
    return stock
  }
  else{
    return stock
  }
  //else(stock.symbol.toLowerCase().includes(name.toLowerCase())) 

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
    <Navbar/>

    <SearchBar />
    <h1 className='loading'>Loading...</h1>
    </>

  )
}
if(type === 'TryAgain'){
  return(
    <>
    <Navbar/>

    <SearchBar />
    <h1 className='loading'>Sorry For Inconvienience Kindly Refresh The Page....</h1>
    </>

  )
}
if(type === 'Fetched'){

  return(
          <>
    <Navbar/>
    <SearchBar  RenderType={handleRenderData} filter={handleFilter}  />
    <ListItems stocks={stocks}/>
    </>
);
}
}


