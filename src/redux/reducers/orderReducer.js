

const orderReducer = (state=null, action) => {
    switch (action.type) {
        case 'ORDER_SUBMITTED':
            return action.payload
            
        default:
            return state;		
        }
}

export default orderReducer;