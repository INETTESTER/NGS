import http from 'k6/http';
//import { token } from './env.js';
function getToken(start = 1) {
  const num = start + ((__VU + __ITER) % 100000);
  return `LT${num}`;
}

export function Checkstock() {
  const token = getToken(1);
  const url = 'https://nexgencommerce.one.th/api/backend/api/ckeck_stock_before_create_order';

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'th',
    'Authorization': 'Bearer ' + token,
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://nexgencommerce.one.th',
    'pragma': 'no-cache',
    'referer': 'https://nexgencommerce.one.th/checkoutExt',
    'sec-ch-ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
    'x-xsrf-token': 'YOUR_XSRF_TOKEN',
    'Cookie': '_ga=GA1.1.919625322.1778060202; cf_clearance=pjfT4_HHGvlnJpF.XS5XGZapXJ1uEd7Y1f9bbhLTkeo-1778060203-1.2.1.1-lt.KiDwb4WC_LbbNjuIWRKdsRgYoFx5MoTxPX.Peith0a_7mMpFTUN7bwk_Lu4l_glXMM9QTOtl_i4mXps_xSdiBSf31G93DeB4lvNLSKh9Thcb8qBMqQo3pmmrRkKUQ89L4KyKZjFPpaGgTmj4AGu0cxSOm4624ZXtMkBEoOJKw5UISAvwlzg9o2Fv0XersmLsqvR067WPDQXSpErmXSFPAQTCKE7fnVHRN0z9lDwSKvUPsObORaIjsZarhR_bCt1Md08YQQw00zzxIFn5wgRg68knoRzRJ6OTW7Lvojbt7c1nA8pKdPqTpwDYcLuV6hc_QLG_rFx6KOKQTBWjNoA; _fbp=fb.1.1778060202655.339539809299917465; laravel_session=bPDQl49rLlkMHxWRhtHsaM7DQbY4TlIbu0y6VdeB; XSRF-TOKEN=eyJpdiI6IkNGMVJKb1lReUVSQmJkZmZIbERhTWc9PSIsInZhbHVlIjoiMzh0em1Qbnh3aFFDQ0x4QkdGZHBUM1J3SG0zU292azA0U0kySkZZejI4ekhDVU9pcFV3R3p4OUZcLytQZmFjUkpjTzdzRUhZdWVTdlJtU1dET3lIU0tnPT0iLCJtYWMiOiI2NWJhMDJiYjU1MTQ2NWQ1YjkxZmUzZjEwNTZmMjY1NTliY2EwYTg5NmI0YWYyNjJlN2M1M2Y5NTcwMTQ1NDk5In0%3D; onethsession=eyJpdiI6IjQwMFZFUW8wajIwSkRsaHRLb282Tnc9PSIsInZhbHVlIjoiUW5QZVNIaHpWdDl3R0o3V1J5cVdGM096RlJxQ2t4YW84Uk01a0RCSUhHajhaRGU5ZElNMzJ1dm5KSVp5SVJmblVSc01kVTVyVVhNYmhNTXBnTDZZYnc9PSIsIm1hYyI6ImY1YjVmZTRlNDRiYTI3MWJkM2M4NjkwMDY4NWFmYTExOTIxZTNlY2ViYmVjYjcxNGE3Nzg1YmVhYjdjNjVkZjkifQ%3D%3D; _ga_7NQ65YQ2S2=GS2.1.s1778060201$o1$g1$t1778061993$j60$l0$h825319773; _ga_LEB4GQBSMW=GS2.1.s1778060202$o1$g1$t1778062012$j45$l0$h0',
  };

  const response = http.post(url, payload, { headers });

  //console.log('Response body:', response.body);

  return response;
}