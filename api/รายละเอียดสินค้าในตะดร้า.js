import http from 'k6/http';
import { token } from './env.js';

export function รายละเอียดสินค้าในตะดร้า() {
  const url = 'https://nexgencommerce.one.th/api/backend/api/detail_cart_b2b_v2';

  const payload = JSON.stringify({
    product_to_update: [],
    role_user: 'ext_buyer',
    seller_shop_id: 5,
    product_to_calculate: [
      {
        product_id: 819255,
        product_attribute_id: 1731069,
        attribute_priority_1: '2',
        attribute_priority_2: null,
        quantity: '1',
        revenue_default: 280.37,
        revenue_vat: 300,
        vat_revenue: 19.63,
        an_id: '',
        seller_shop_id: 5,
        have_attribute: 'yes',
        product_shipping_service_type: 'normal',
      },
    ],
    pay_type: 'general',
    company_id: -1,
    company_position: -1,
    com_perm_id: -1,
    point: [],
    coupon: [],
    seller_shop_not_use_auto_coupon: '',
    form: 'web',
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
    referer: 'https://nexgencommerce.one.th/shoppingcart',
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