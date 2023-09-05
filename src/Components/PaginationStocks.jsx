import React, { useState } from 'react'

export const PaginationStocks = ({postPerPage,TotalPost,ChangePage}) => {
   const [startingIndex,setStartingIndex] = useState(0)
   const [lastIndex,setLastIndex] = useState(8)
    let pageNumber = []
    for(let i=1; i<=Math.ceil(TotalPost / postPerPage); i++){
        pageNumber.push(i)
    }
    let CurrentPages = pageNumber.slice(startingIndex,lastIndex)
    if(startingIndex <=0 && pageNumber.length > 8){
        return(
            <>
    <ul className='pageList'>
        {CurrentPages.map(item=>{
            return(
                <li key={item}>
                <button  onClick={()=>ChangePage(item)}>
                    {item}
                </button>
            </li>
                )
        })}

    <button  className="page-btn2" onClick={()=>{
        if(lastIndex >=44){
            ChangePage(0)
            setStartingIndex(0)
            setLastIndex(8)
        }
        else{
            ChangePage(startingIndex+9)
            setStartingIndex(n=>n+8)
            setLastIndex(n=>n+8)
        }
    }}>Next</button>
    </ul>
    </>
        )
    }
    if(startingIndex <=0 && pageNumber.length<=8){

        return(
            <>
            <ul className='pageList'>
                {CurrentPages.map(item=>{
                    return(
                        <li key={item}>
                        <button  onClick={()=>ChangePage(item)}>
                            {item}
                        </button>
                    </li>
                        )
                })}
            </ul>
            </>
        )
    }
    else{
    return (
    <>
    <ul className='pageList'>
    <button className="page-btn" onClick={()=>{
        if(startingIndex<=0){

            setStartingIndex(0)
            setLastIndex(8)
        }
        else{
            ChangePage(startingIndex-7)
            setStartingIndex(n=>n-8)
            setLastIndex(n=>n-8)
        }
    }}> Prev </button>
        {CurrentPages.map(item=>{
            return(
                <li key={item}>
                <button  onClick={()=>ChangePage(item)}>
                    {item}
                </button>
            </li>
                )
        })}

    <button  className="page-btn2" onClick={()=>{
        if(lastIndex >=44){
            ChangePage(1)
            setStartingIndex(0)
            setLastIndex(8)
        }
        else{
            ChangePage(startingIndex+9)
            setStartingIndex(n=>n+8)
            setLastIndex(n=>n+8)
        }
    }}>Next</button>
    </ul>
    </>
  )
}
}
