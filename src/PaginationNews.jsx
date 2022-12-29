import React  from 'react'



export const PagesNews = ({nextNewsPage,previousNewsPage}) => {    
  return (
    <>
    <div className='news-btn'>
        <button className='prev' onClick = {()=>{
           previousNewsPage()
        }}> <i className="fa-sharp fa-solid fa-chevron-up fa-2xl"></i></button>    
        <button className='next' onClick = {()=>{
          nextNewsPage()
        }}><i className="fa-sharp fa-solid fa-chevron-down fa-2xl"></i></button>    
    </div>
    </>
  );
}
