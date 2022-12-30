import React from 'react'

export const Startbutton = () => {
  return (
    <div className='Start-btn'>
        <p className='info-Shift'>Stay updated with the current prices of all the</p>
             <p className='shift'>Stocks in NSE/BSE </p>
             <br></br>
        <button onClick={()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        }}>
            Get Started
        </button>
        <br></br>
        <br></br>
        <p className='info-Shift'>Global news at you fingertips and how that will</p>
            <p className='shift'> affect the market</p>

    </div>
  )
}
