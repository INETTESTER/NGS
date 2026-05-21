import http from 'k6/http';
import { cookie } from './env.js';

export function backend_4() {
    const url = 'https://nexgencommerce.one.th/api/backend_4/api/health_check';

    const params = {
        headers: {
            'Cookie': cookie,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}