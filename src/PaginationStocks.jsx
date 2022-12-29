import React, { useState } from 'react'

export const PaginationStocks = ({postPerPage,TotalPost,ChangePage}) => {
   const [startingIndex,setStartingIndex] = useState(0)
   const [lastIndex,setLastIndex] = useState(8)
    let pageNumber = []
    for(let i=1; i<=Math.ceil(TotalPost / postPerPage); i++){
        pageNumber.push(i)
    }
    let CurrentPages = pageNumber.slice(startingIndex,lastIndex)
    return (

    <>
    <ul className='pageList'>
    <buttton className="page-btn" onClick={()=>{
        if(startingIndex<=0){
            setStartingIndex(0)
            setLastIndex(8)
        }
        else{
            setStartingIndex(n=>n-8)
            setLastIndex(n=>n-8)
        }
    }}> Prev </buttton>
        {CurrentPages.map(item=>{
            return(
                <li key={item}>
                <button  onClick={()=>ChangePage(item)}>
                    {item}
                </button>
            </li>
                )
        })}

    <buttton  className="page-btn2" onClick={()=>{
        if(lastIndex >=44){
            setStartingIndex(0)
            setLastIndex(8)
        }
        else{
            setStartingIndex(n=>n+8)
            setLastIndex(n=>n+8)
        }
    }}>Next</buttton>
    </ul>
    </>
  )
}
