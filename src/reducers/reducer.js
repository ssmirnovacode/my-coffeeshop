const initialState = {
    beverages: [],
    combos: [],
    menuItems: [],
    giftset: {
        items: [],
        activeItemId: 7
    },
    loading: true,
    error: false,
    modal: {
        shown: false,
        item: null
    },
    cart: {
        items: [],
        visible: false
    },
    order: {
        data: {},
        shown: false
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
                giftset: {
                    items: action.payload,
                    activeItemId: state.giftset.activeItemId
                },
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
                modal: {
                    shown: false,
                    item: state.modal.item
                },
                cart: {
                    visible: !state.cart.visible,
                    items: state.cart.items
                }
            } 
        case 'ADD_TO_CART':
            const itemToAdd = action.payload;
            itemToAdd.qty = 1;
            
            if (state.cart.items.filter(item => item.id === itemToAdd.id)[0]) {
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
        case 'PLUS_QTY':
            return {
                ...state,
                cart: {
                    items: state.cart.items.map(item =>
                        item.id === action.payload ? 
                        {...item, qty: item.qty + 1}
                          : item
                      ),
                      visible: state.cart.visible
                }
            };
        case 'MINUS_QTY':
            return {
                ...state,
                cart: {
                    items: state.cart.items.map(item =>
                        item.id === action.payload ? 
                        {...item, qty: item.qty - 1}
                          : item
                      ),
                      visible: state.cart.visible
                }
                };
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
        case 'TOGGLE_ORDER_FORM':
            return {
                ...state,
                order: {
                    ...state.order,
                    shown: !state.order.shown
                }
            }
        case 'SAVE_FORM_DATA':
            return {
                ...state,
                order: {
                    data: action.payload,
                    shown: state.order.shown // make it hide later
                }
            }

        default:
            return state;		
    }
}

export default reducer;