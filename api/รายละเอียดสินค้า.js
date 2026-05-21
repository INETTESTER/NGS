import http from 'k6/http';
import { token } from './env.js';
// function getToken(start = 1) {
//   const num = start + ((__VU + __ITER) % 100000);
//   return `LT${num}`;
// }

export function รายละเอียดสินค้า() {
  //const token = getToken(1);
  const url = 'https://nexgencommerce.one.th/api/backend/api/product/get_product_detail';

  const payload = JSON.stringify({
    product_id: 819255,
    role_user: 'ext_buyer',
    company_id: '',
    quantity: 0,
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
      'https://nexgencommerce.one.th/DetailProduct/%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2-Attribute-819255',
    'sec-ch-ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',

    // ใส่จริงถ้า backend require
    'x-xsrf-token': '',
  };

  const response = http.post(url, payload, { headers });

  //console.log('Response body:', response.body);

  return response;
}