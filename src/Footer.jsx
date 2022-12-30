import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className="footer">
        
        <div className="icons">
            <a  className="footer-icons" href=""><i className="fa-solid fa-arrow-trend-up fa-2xl"></i></a>
            <a className="footer-icons" href=""><i className="fa-sharp fa-solid fa-coins fa-2xl"></i></a>
            <a className="footer-icons" href=""><i className="fa-brands fa-facebook fa-2xl"></i></a>
            <a className="footer-icons" href=""><i className="fa-brands fa-twitter fa-2xl"></i></a>
            <a className="footer-icons" href=""><i className="fa-solid fa-id-card-clip fa-2xl"></i></a>
        </div>
     
        <div className="links">
            <a id="firstlink" className="footer-links"  href="">HOME</a>
            <a className="footer-links" target="_blank" href="https://www.nseindia.com/">NSE</a>
            <a className="footer-links" target="_blank" href="https://www.bseindia.com/">BSE</a>
            <a className="footer-links" target="_blank" href="">MCX</a>
            <a className="footer-links" target="_blank" href="https://www.binance.com/en">CRYPTO</a>
            <a className="footer-links" href="">CARRERS</a>
        </div>
           
            <div className="copyright">
                <a className="footer-links" href="">&copy; 2022 Grow More -LTD</a>

            </div>

    </div>
    </>
  )
}
