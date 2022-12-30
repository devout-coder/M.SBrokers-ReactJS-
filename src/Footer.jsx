import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className="footer">
        
        <div className="icons">
            <a  className="footer-icons" href="https://in.tradingview.com/"><i className="fa-solid fa-arrow-trend-up fa-2xl"></i></a>
            <a className="footer-icons" href="https://www.binance.com/en"><i className="fa-sharp fa-solid fa-coins fa-2xl"></i></a>
            <a className="footer-icons" href="https://www.facebook.com/tradingview/"><i className="fa-brands fa-facebook fa-2xl"></i></a>
            <a className="footer-icons" href="https://twitter.com/in_tradingview"><i className="fa-brands fa-twitter fa-2xl"></i></a>
            <a className="footer-icons" href="https://twitter.com/linkedin"><i className="fa-solid fa-id-card-clip fa-2xl"></i></a>
        </div>
     
        <div className="links">
            <a id="firstlink" className="footer-links"  href="https://soft-panda-db902f.netlify.app">HOME</a>
            <a className="footer-links" target="_blank" href="https://www.nseindia.com/">NSE</a>
            <a className="footer-links" target="_blank" href="https://www.bseindia.com/">BSE</a>
            <a className="footer-links" target="_blank" href="https://www.mcxindia.com/">MCX</a>
            <a className="footer-links" target="_blank" href="https://www.binance.com/en">CRYPTO</a>

        </div>
           
            <div className="copyright">
                <a className="footer-links" href="">&copy; 2022 Grow More -LTD</a>

            </div>

    </div>
    </>
  )
}
