import React  from 'react'



export const PagesNews = ({nextNewsPage,previousNewsPage}) => {    
  return (
    <>
    <div className='news-btn'>
        <button onClick = {()=>{
           previousNewsPage()
        }}> <i className="fa-sharp fa-solid fa-chevron-up fa-2xl"></i></button>    
        <button onClick = {()=>{
          nextNewsPage()
        }}><i className="fa-sharp fa-solid fa-chevron-down fa-2xl"></i></button>    
    </div>
    </>
  );
}
