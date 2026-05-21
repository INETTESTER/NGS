import http from 'k6/http';
import { token } from './env.js';
// function getToken(start = 1) {
//   const num = start + ((__VU + __ITER) % 100000);
//   return `LT${num}`;
// }

export function Search() {
  const url = 'https://nexgencommerce.one.th/api/backend_2/search/product/v2/search_bar';

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    company_id: '-1',
    seller_shop_id: '-1',
    keyword: 'ทดสอบการสร้างสินค้า Attribute',
    order_by_price: '',
    category: '',
    status_product: '',
    limit: 48,
    page: 2,
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
    referer:
      'https://nexgencommerce.one.th/search/%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%20Attribute',
    'sec-ch-ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',

    // ใส่จริงถ้าระบบ require xsrf token
    'x-xsrf-token': '',
  };

  const response = http.post(url, payload, { headers });

  //console.log('Response body:', response.body);

  return response;
}