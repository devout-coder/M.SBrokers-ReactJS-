import React from 'react'

export const Startbutton = () => {
  return (
    <div className='Start-btn'>
        <button onClick={()=>{

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        }}>
            Get Started
        </button>

    </div>
  )
}
