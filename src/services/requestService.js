export default class RequestService {

    async getMenuItems(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async postMenuItems(url, data) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: data
        });
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
}
