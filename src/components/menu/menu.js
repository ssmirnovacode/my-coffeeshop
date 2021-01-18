import React from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';

const Menu = () => {
    return(
        <section className="stripe-left">
            <Heading small={'Choose Your Favorite'} big={'ORDER YOUR DRINK ONLINE'}/>
            <div className="menu_container">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>
    )
}

export default Menu;