const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
});

const deleteFromCart = (itemId) => ({
    type: 'DELETE_FROM_CART',
    payload: itemId
});

const plusQty = (id) => ({  
    type: 'PLUS_QTY',
    payload: id
})

const minusQty = (id) => ({  
    type: 'MINUS_QTY',
    payload: id
})

const clearCart = () => ({
    type: 'CLEAR_CART'
})

export {addToCart, deleteFromCart, plusQty, minusQty, clearCart};