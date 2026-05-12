import http from 'k6/http';
import { token } from './env.js';

export function เพิ่มสินค้า() {
  const url = 'https://nexgencommerce.one.th/api/backend/api/add_to_cart_b2b';

  const payload = JSON.stringify({
    ref_code: '',
    an_id: '',
    seller_shop_id: 5,
    role_user: 'ext_buyer',
    product_id: 819255,
    pay_type: '',
    order_type: 'newser',
    attribute_option_1: '2',
    attribute_option_2: '',
    quantity: '1',
    company_id: null,
    company_position: -1,
    com_perm_id: -1,
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