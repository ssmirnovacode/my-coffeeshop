const toggleButton = (addToCartBtnSelector, viewCartBtnSelector, e) => {

    console.log(e.target);

    const cardId = e.target.getAttribute('data-id'); 

    const addToCartBtns = document.querySelectorAll(addToCartBtnSelector),
        viewCartBtns = document.querySelectorAll(viewCartBtnSelector);

    addToCartBtns.forEach(elem => {
        if (elem.getAttribute('data-id') === cardId) {
            elem.classList.add('hidden');
        }
    });

    viewCartBtns.forEach(elem => {
        if (elem.getAttribute('data-id') === cardId) {
            elem.classList.remove('hidden');
            elem.addEventListener('click', () => {
                elem.classList.add('hidden');
                addToCartBtns.forEach(elem => {
                    if (elem.getAttribute('data-id') === cardId) {
                        elem.classList.remove('hidden');
                    }
                });
            })
        }
    });
}


export default toggleButton;