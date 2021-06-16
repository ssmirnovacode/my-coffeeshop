const initialState = {
    beverages: {
        items: [],
        loading: true,
        error: false
    },
    combos: {
        items: [],
        loading: true,
        error: false
    },
    menuItems: {
        items: [],
        loading: true,
        error: false
    },
    giftset: {
        items: [],
        loading: true,
        error: false,
        activeItemId: 'qxevR5yI0BPpyOH2Q5D7'
    },
    details: {
        item: null,
        loading: true,
        error: false
    },
    cart: [],
    order: null,
    loggedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEVERAGES_LOADED': 
            return {
                ...state, 
                beverages: {
                    items: action.payload,
                    loading: false,
                    error: false
                }
            }
        case 'BEVERAGES_REQUESTED': 
            return {
                ...state, 
                beverages: {
                    ...state.beverages,
                    loading: true,
                    error: false
                }
            }
        case 'BEVERAGES_ERROR': 
            return {
                ...state, 
                beverages: {
                    ...state.beverages,
                    loading: false,
                    error: true
                }
            }

        case 'MENU_ITEMS_LOADED': 
            return {
                ...state, 
                menuItems: {
                    items: action.payload,
                    loading: false,
                    error: false
                }
            }
        case 'MENU_ITEMS_REQUESTED': 
            return {
                ...state, 
                menuItems: {
                    ...state.menuItems,
                    loading: true,
                    error: false
                }
            }
        case 'MENU_ITEMS_ERROR': 
            return {
                ...state, 
                menuItems: {
                    ...state.menuItems,
                    loading: false,
                    error: true
                }
            }

        case 'DETAILS_LOADED': 
            return {
                ...state, 
                details: {
                    item: action.payload,
                    loading: false,
                    error: false
                }
            }
        case 'DETAILS_REQUESTED': 
            return {
                ...state, 
                details: {
                    ...state.details,
                    loading: true,
                    error: false
                }
            }
        case 'DETAILS_ERROR': 
            return {
                ...state, 
                details: {
                    ...state.details,
                    loading: false,
                    error: true
                }
            }

        case 'GIFTSET_LOADED': 
            return {
                ...state, 
                giftset: {
                    ...state.giftset,
                    items: action.payload,
                    loading: false,
                    error: false
                }
            }
        case 'GIFTSET_REQUESTED': 
            return {
                ...state, 
                giftset: {
                    ...state.giftset,
                    loading: true,
                    error: false
                }
            }
        case 'GIFTSET_ERROR': 
            return {
                ...state, 
                giftset: {
                    ...state.giftset,
                    loading: false,
                    error: true
                }
            }
        case 'GIFTSET_TAB_CLICK':
            return {
                ...state,
                giftset: {
                    ...state.giftset,
                    activeItemId: action.payload
                }
            }
        case 'COMBOS_LOADED': 
            return {
                ...state, 
                combos: {
                    items: action.payload,
                    loading: false,
                    error: false
                }
            }
        case 'COMBOS_REQUESTED': 
            return {
                ...state, 
                combos: {
                    items: action.payload,
                    loading: true,
                    error: false
                }
            }
        case 'COMBOS_ERROR': 
            return {
                ...state, 
                combos: {
                    items: action.payload,
                    loading: false,
                    error: true
                }
            }
        case 'ADD_TO_CART':
            const itemToAdd = action.payload;
            itemToAdd.qty = 1;
            
            if (state.cart.filter(item => item.id === itemToAdd.id)[0]) {
                const RepeatedItemIndex = state.cart.findIndex( item => item.id === itemToAdd.id);
                const changedItem = state.cart[RepeatedItemIndex];
                changedItem.qty++;

                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, RepeatedItemIndex),
                        changedItem,
                        ...state.cart.slice(RepeatedItemIndex + 1)
                        ]
                    
                }
            }
            else return {
                ...state,
                cart: [...state.cart,
                    itemToAdd
                ]
                
            }
        case 'PLUS_QTY':
            return {
                ...state,
                cart: state.cart.map(item =>
                        item.id === action.payload ? 
                        {...item, qty: item.qty + 1}
                          : item )               
            };
        case 'MINUS_QTY':
            return {
                ...state,
                cart: state.cart.map(item =>
                        item.id === action.payload ? 
                        {...item, 
                            qty: item.qty !== 1 ? item.qty -1 : 1}
                            : item,                       
                      )
                
                };
        case 'DELETE_FROM_CART':
            const idx = action.payload; 
            const itemIndex = state.cart.findIndex(item => item.id === idx);	
            return {
                ...state,
                cart: [ 
                        ...state.cart.slice(0, itemIndex),
                        ...state.cart.slice(itemIndex+1)
                    ]
                
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        case 'ORDER_SUBMITTED':
            return {
                ...state,
                order: action.payload
            }
        case 'ORDER_ERROR':
            return {
                ...state,
                error: true
            }
        case 'SET_LOGIN_STATUS': 
            return {
                ...state, 
                loggedIn: action.payload
            }
        default:
            return state;		
    }
}

export default reducer;