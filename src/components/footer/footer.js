import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer_container">
            <address>
                Avda Barcelona, 155,<br/>
                195112, Barcelona<br/>
                SPAIN
            </address>
            <div className="footer_contact">
                <span>Contact us:</span><br/>
                <a href="mailto:admin@mycoffeeshop.com">admin@mycoffeeshop.com</a>
            </div>
            
        </footer>
    )
}

export default Footer;