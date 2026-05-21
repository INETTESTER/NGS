import http from 'k6/http';
import { cookie } from './env.js';

export function health_check() {
    const url = 'https://nexgencommerce.one.th/api/backend/api/health_check';

    const params = {
        headers: {
            'Cookie': cookie,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}