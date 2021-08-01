

const giftsetReducer = (state={
                            items: [],
                            loading: true,
                            error: false,
                            activeItemId: 'tf27bh'
                    }, action) => {
    switch (action.type) {
        case 'GIFTSET_LOADED': 
            return {
                    ...state,
                    items: action.payload,
                    loading: false,
                    error: false
                }
        case 'GIFTSET_REQUESTED': 
            return {
                    ...state,
                    loading: true,
                    error: false
                }
        case 'GIFTSET_ERROR': 
            return {
                    ...state,
                    loading: false,
                    error: true
                }
        case 'GIFTSET_TAB_CLICK':
            return {
                    ...state,
                    activeItemId: action.payload
                }
            default:
                return state;		
        }
}

export default giftsetReducer;