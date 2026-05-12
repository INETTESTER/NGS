import http from 'k6/http';
import { token } from './env.js';

export function หน้าแรก_สินค้าสำหรับคุณ() {
  const url = 'https://nexgencommerce.one.th/api/backend_2/search/product/filter';

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    company_id: '-1',
    category: -1,
    seller_shop_id: -1,
    orderBy: -1,
    status_product: 'recommend',
    limit: 30,
    page: 1,
  });

  const headers = {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'th',
    Authorization: 'Bearer ' + token,
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    origin: 'https://nexgencommerce.one.th',
    pragma: 'no-cache',
    priority: 'u=1, i',
    referer: 'https://nexgencommerce.one.th/',
    'sec-ch-ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',

    // ใส่จริงเฉพาะกรณี backend validate xsrf
    'x-xsrf-token': '',
  };

  const response = http.post(url, payload, { headers });

  //console.log('Response body:', response.body);

  return response;
}