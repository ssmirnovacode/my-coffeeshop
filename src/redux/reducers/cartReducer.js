
const cartReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemToAdd = action.payload;
            itemToAdd.qty = 1;
            
            if (state.filter(item => item.id === itemToAdd.id)[0]) {
                const RepeatedItemIndex = state.findIndex( item => item.id === itemToAdd.id);
                const changedItem = state[RepeatedItemIndex];
                changedItem.qty++;
                const arr = [
                    ...state.slice(0, RepeatedItemIndex),
                    changedItem,
                    ...state.slice(RepeatedItemIndex + 1)
                    ];
                return arr;
            }
            else{
                const arr = [...state,
                    itemToAdd
                ];
                return arr;
                
            }
        case 'PLUS_QTY':
            return state.map(item =>
                        item.id === action.payload ? 
                        {...item, qty: item.qty + 1}
                          : item );
        case 'MINUS_QTY':
            return state.map(item =>
                        item.id === action.payload ? 
                        {...item, 
                            qty: item.qty !== 1 ? item.qty -1 : 1}
                            : item,                       
                      );
        case 'DELETE_FROM_CART':
            const idx = action.payload; 
            const itemIndex = state.findIndex(item => item.id === idx);
            const arr = [ 
                ...state.slice(0, itemIndex),
                ...state.slice(itemIndex+1)
            ]	
            return arr;
        case 'CLEAR_CART':
            return [];
            default:
                return state;		
        }
}

export default cartReducer;