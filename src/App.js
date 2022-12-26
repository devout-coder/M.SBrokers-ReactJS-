import Navbar from './Navbar.jsx'
import ListItems from './ListItems.jsx'
import SearchBar from'./SearchBar.jsx'

import {useState,useEffect} from 'react';


export default function App() {
  const[stocks,setStocks] = useState([])
  const[data,setdata] = useState([])
  const [type,setType] = useState('Fetching')



  //useEffect 
  useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3da147d207msh81549da6e4e8910p10a44ajsn1bcc5dcf03bb',
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
  }
 fetch('https://latest-stock-price.p.rapidapi.com/any',options)
    .then(response => response.json())
    .then(response => {
     setType('Fetched')
      setStocks(response)
      setdata(stocks)
      console.log(response)
      console.log('first time')
    })
    .catch(() => console.error('error caught could not fetch data'))

    // setType('fetched')
    // setStocks(OriginalData)
    // setdata(OriginalData)
  },[type])

const handleFilter = (name)=>{
setStocks(data.filter((stock)=>{
  if(name === ''){
    return stock
  }
  //else(stock.symbol.toLowerCase().includes(name.toLowerCase())) 
  else if(stock.symbol.toLowerCase().includes(name.toLowerCase())){
    return stock
  }

}))  
}
const handleRenderData = (val)=>{
if(val === 'Advance'){
  setStocks(data.filter(stock=>stock.pChange>0))
}
if(val === 'Decline'){
  setStocks(data.filter(stock=>stock.pChange<0))
}
if(val === 'TopGainers'){
let newData = data.filter(stock=>stock.pChange>0)
newData.sort((a,b)=>b.pChange-a.pChange)
 let TopTen = newData.slice(0,11)
 setStocks(TopTen)

}
if(val === 'TopLoosers'){
  let newData = data.filter(stock=>stock.pChange<0)
  newData.sort((a,b)=>a.pChange-b.pChange)
  let TopTen = newData.slice(0,11)
  setStocks(TopTen)
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


