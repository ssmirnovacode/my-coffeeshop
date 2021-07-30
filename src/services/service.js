export const getItems = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}

export const baseApiUrl = 'http://localhost:3001';

