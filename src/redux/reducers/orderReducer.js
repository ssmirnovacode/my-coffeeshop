

const orderReducer = (state={
    order: null,
    loading: true,
    error: false
}, action) => {
    switch (action.type) {
        case 'ORDER_SUBMITTED':
            return {
                ...state,
                order: action.payload
            }
        case 'ORDER_SAVED':
            return {
                ...state,
                loading: false
            }
        case 'ORDER_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;		
        }
}

export default orderReducer;