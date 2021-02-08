import baseURL from '../services/baseURL';

export default class RequestService {

    async getMenuItems(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async postMenuItems(url, data) {
        const number = await this.getOrderNumber(); 
        const newOrder = {
            id: number, 
            order: data
        }
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
    }

    async getOrderNumber(){
        const res = await this.getMenuItems(baseURL+'orders');
        const orderNumber = res.length+1;

        return orderNumber;
    }
}
