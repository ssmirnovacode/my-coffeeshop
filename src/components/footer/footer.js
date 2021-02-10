import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer_container">
            <address>
                Avda Europa, 15,<br/>
                43400, Barcelona<br/>
                SPAIN
            </address>
            <div className="footer_contact">
                <span>Contact us:</span><br/>
                <a href="mailto:contact@mycoffeeshop.com">contact@mycoffeeshop.com</a><br/>
                <span>Tel:</span> +34 111 222 333
            </div>
            
        </footer>
    )
}

export default Footer;