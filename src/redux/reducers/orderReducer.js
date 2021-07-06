

const orderReducer = (state=null, action) => {
    switch (action.type) {
        case 'ORDER_SUBMITTED':
            return action.payload
            
        /* case 'ORDER_ERROR':
            return {
                ...state,
                error: true
            } */
            default:
                return state;		
        }
}

export default orderReducer;