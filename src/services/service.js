//export const baseApiUrl = 'https://my-coffeeshop-rest.herokuapp.com';
export const baseApiUrl = 'http://localhost:3001';

export const getItems = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

export const getItemById = async (url, id) => {
    const res = await fetch(`${url}/${id}`);
    if (!res.ok) {
        throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

export const postOrder = async (url, data) => {

    const newOrder = {
        firstname: data.firstname,
        tel: data.tel,
        items: data.items,
        number: data.number,
        total: data.total
    };
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newOrder)
    });
    if (!res.ok) {
        throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};





