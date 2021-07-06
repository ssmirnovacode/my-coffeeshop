import bevReducer from './reducers/bevReducer';
import cartReducer from './reducers/cartReducer';
import comboReducer from './reducers/comboReducer';
import detailsReducer from './reducers/detailsReducer';
import giftsetReducer from './reducers/giftsetReducer';
import menuReducer from './reducers/menuReducer';
import orderReducer from './reducers/orderReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    beverages: bevReducer, 
    cart: cartReducer, 
    combos: comboReducer, 
    details: detailsReducer, 
    giftset: giftsetReducer, 
    menuItems: menuReducer, 
    order: orderReducer
});

export default reducer;