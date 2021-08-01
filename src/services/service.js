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
}

export const baseApiUrl = 'https://my-coffeeshop-rest.herokuapp.com';

