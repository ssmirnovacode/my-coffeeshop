import React from 'react';
import './home.css';
import Navigation from '../navigation/navigation';

const Home = () => {


    return (
        <div className="container home">
            <div className="left block">
                <div className="moto">YOUR <span>PERSONALIZED</span> COFFEE</div>
            </div>

            <div className="home-image">
                
            </div>

            <div className="right block">
                <div className="navigation">
                    <Navigation/>
                </div>
            </div>

        </div>
    )
}

export default Home;