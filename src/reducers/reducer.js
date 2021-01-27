const initialState = {
    beverages: [],
    combos: [],
    menuItems: [],
    giftset: [],
    loading: true,
    error: false,
    modal: {
        shown: false,
        item: null
    },
    cart: {
        items: [],
        visible: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEVERAGES_LOADED': 
            return {
                ...state, 
                beverages: action.payload,
                loading: false
            }
        case 'BEVERAGES_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'BEVERAGES_ERROR': 
            return {
                ...state,
                error: true
            }

        case 'MENU_ITEMS_LOADED': 
            return {
                ...state, 
                menuItems: action.payload,
                loading: false
            }
        case 'MENU_ITEMS_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'MENU_ITEMS_ERROR': 
            return {
                ...state,
                error: true
            }

        case 'GIFTSET_LOADED': 
            return {
                ...state, 
                giftset: action.payload,
                loading: false
            }
        case 'GIFTSET_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'GIFTSET_ERROR': 
            return {
                ...state,
                error: true
            }

        case 'COMBOS_LOADED': 
            return {
                ...state, 
                combos: action.payload,
                loading: false
            }
        case 'COMBOS_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'COMBOS_ERROR': 
            return {
                ...state,
                error: true
            }
        case 'TOGGLE_MODAL': 
            return {
                ...state,
                modal: {
                    shown: !state.modal.shown,
                    item: action.payload
                }
            } 
        case 'TOGGLE_CART': 
            return {
                ...state,
                cart: {
                    visible: !state.cart.visible,
                    items: state.cart.items
                }
            } 
        case 'ADD_TO_CART':
            const itemToAdd = action.payload;
            itemToAdd.qty = 1;
            
            if (state.cart.items.filter(item => item.id === itemToAdd.id).length > 0) {
                const RepeatedItemIndex = state.cart.items.findIndex( item => item.id === itemToAdd.id);
                const changedItem = state.cart.items[RepeatedItemIndex];
                changedItem.qty++;

                return {
                    ...state,
                    cart: {
                        items: [
                        ...state.cart.items.slice(0, RepeatedItemIndex),
                        changedItem,
                        ...state.cart.items.slice(RepeatedItemIndex + 1)
                        ],
                        ...state.cart
                    }
                }
            }
            else return {
                ...state,
                cart: {
                    items: state.cart.items.push(itemToAdd), 
                    ...state.cart
                }
            }   
        case 'DELETE_FROM_CART':
            const idx = action.payload; 
            const itemIndex = state.cart.items.findIndex(item => item.id === idx);	
            return {
                ...state,
                cart: {
                    items: [ 
                        ...state.cart.items.slice(0, itemIndex),
                        ...state.cart.items.slice(itemIndex+1)
                    ],
                    visible: state.cart.visible
                }
            }
        default:
            return state;		
    }
}

export default reducer;