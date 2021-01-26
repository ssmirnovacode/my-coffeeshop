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
    cart: []
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
        case 'ADD_TO_CART':
            const itemToAdd = action.payload;
            if (state.cart.filter(item => item.id === itemToAdd.id)) {
                const RepeatedItemIndex = state.cart.findIndex( item => item.id === itemToAdd.id);
                const changedItem = state.cart[RepeatedItemIndex];
                changedItem.qty++;

                return {
                    ...state,
                    items: [
                        ...state.cart.slice(0, RepeatedItemIndex),
                        changedItem,
                        ...state.cart.slice(RepeatedItemIndex+1)
                    ]
                }
            }
            else return {
                ...state,
                cart: [...state.cart, action.payload]
            }   
        default:
            return state;		
    }
}

export default reducer;