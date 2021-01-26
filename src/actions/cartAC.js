const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
});

const deleteFromCart = (itemId) => ({
    type: 'DELETE_FROM_CART',
    payload: itemId
});

const toggleCart = () => ({
    type: 'TOGGLE_CART'
})

export {addToCart, deleteFromCart, toggleCart};