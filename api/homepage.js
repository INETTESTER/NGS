import http from 'k6/http';
import { cookie } from './env.js';

export function homepage() {
    const url = 'https://nexgencommerce.one.th/';

    const params = {
        headers: {
            'Cookie': cookie,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}