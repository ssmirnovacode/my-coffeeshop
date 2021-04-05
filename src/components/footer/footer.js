import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer_container">
            
            <address>
            <div className="footer_title">My coffeeshop</div>
                Avda Europa, 15,<br/>
                43400, Barcelona<br/>
                SPAIN
            </address>
            <div className="footer_contact">
                <span>Contact us:</span><br/>
                <a href="mailto:contact@mycoffeeshop.com">contact@mycoffeeshop.com</a><br/>
                <span>Tel:</span> +34 111 222 333
            </div>
            <div className="footer_social">
                <div className="footer_social_title">Find us on social media:</div><br/>
                <div className="footer_social_icons">
                    <a href={'https://github.com/ssmirnovacode'} ><i className="fa fa-facebook-square"></i></a>
                    <a href={'https://github.com/ssmirnovacode'} ><i className="fa fa-linkedin-square"></i></a>
                    <a href={'https://github.com/ssmirnovacode'} ><i className="fa fa-github-square"></i></a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;