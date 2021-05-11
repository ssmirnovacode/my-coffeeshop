const initialState = {
    allItems: [],
    giftset: {
        items: [],
        activeItemId: 7
    },
    loading: true,
    error: false,
    cart: [],
    order: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_ALLITEMS': 
        const newItems = action.payload.filter(item => state.allItems.includes(item) === false); // почему-то не фильтрует
        return {
            ...state,
            allItems: [...state.allItems, ...newItems]
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
        default:
            return state;		
    }
}

export default reducer;