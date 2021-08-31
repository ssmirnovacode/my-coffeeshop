import React, {useState, useEffect} from 'react';

const useToggleBtn = () => {
    const [activeBtn, setActiveBtn] = useState('addToCart');

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn])

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    return [activeBtn, toggleBtn];
}

export default useToggleBtn;