import http from 'k6/http';
import { token } from './env.js';

export function getqrcodev2() {
  const url = 'https://nexgencommerce.one.th/api/backend_2/payment/getqrcodev2-lt';

  const payload = JSON.stringify({
    payment_transaction_number: 'NEXGEN-2026050013741',
  });

  const headers = {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'th,en-US;q=0.9,en-GB;q=0.8,en;q=0.7',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkZDIzZThjZjYwMmYzMTFkZTdjNmZiOTMyY2JjOWI5ZDZiOGNmMzhhYjM2YWMxZGU5YjQzYWYwMTFlYzYwZWZkNmZhZGYyNmMwZmQ0YzU4In0.eyJhdWQiOiI3ODQiLCJqdGkiOiI5ZGQyM2U4Y2Y2MDJmMzExZGU3YzZmYjkzMmNiYzliOWQ2YjhjZjM4YWIzNmFjMWRlOWI0M2FmMDExZWM2MGVmZDZmYWRmMjZjMGZkNGM1OCIsImlhdCI6MTc3OTgxMjU3MywibmJmIjoxNzc5ODEyNTczLCJleHAiOjE4MTEzNDg1NzIsInN1YiI6IjE1NzQwMzk4MTAiLCJzY29wZXMiOltdfQ.DKBXzbzayD6rNJNBMDl9MRulpQlmJQ1LUquc5UQ_dxL_NKqW10m81fpcNHln3drzwAq7W7SNmtUEf1FPs0vHEY8qj-1laVi9Vl8PVDPuvrLmCtw2mzZLloXHRb0zZ6KZGv_5MzFLsknB4MV-qe2kBc-JNKs7dBuVaOdzOqBtsyC3RBXyz6pfLOCQd9hc3S_sMxvEB4M_6HF4QCD3ipSvwv7aoH3KyACdzcFA6DzmD2uKbkAdNd2HV_Fo5N9wA2ueUqAz-cw3ojAqi-jwpUkCIGXxpFnup2wQ-b2agZW8esuPgJFWQf3draWZ8OeWTdtZlNJX5NbQk_rm85a4US5a5hwgPAi2vfhCtXR06BKgCbh0Bkxb2YhN7IRKoRhpSWKDH6iwz8IxgJm_Etjg6ZpyoR5VV34qkCyGkm5W7FUtFtKmaSYQ-tTXvMb1_hryWOx5Ha3J1cRNKAcgBY_4budXcJdoP67OzQnBEnSINk5GYOL2B6I_n4DViDMLRy8zUR2VuUctk9YUeqykOVff3HhDwAwEmYRULIiHo7PO8qoBVmEH4-Sphjh7j9CcQW7TQ3qIQWF3hX1grD5iuU0IhQaoufT__1qd0fc2xF9dC47Ox3utyifCArdqzkObhDLfvuLV12YEcQgBmopL6j4Nb6LzUEIa0k_gNjcdKrByvmTxTRM',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    origin: 'https://nexgencommerce.one.th',
    pragma: 'no-cache',
    priority: 'u=1, i',
    referer: 'https://nexgencommerce.one.th/checkoutExt',
    'sec-ch-ua': '"Google Chrome";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36',
    'x-xsrf-token': 'eyJpdiI6InZ5bFZFdEJlVkdEQlFURFhkRzVhdFE9PSIsInZhbHVlIjoiYVM4RStNZlA5T2VOdEk1bmRua0E3aGpwUGxKV3BlQkpabEFXcjNNRU1rUzcraFZ5RW5tenlmY3pmQTBqVTYrOXFPaGhVdkJxU2hGR253Rm4zU29KclRCbkJ0YmZSc2cwc1lrSmJ0c0t1RkFjMi9kM29pWCs4M0NDZkhXU2hzRnMiLCJtYWMiOiIzMDMxNWM2Yjc1NDgzZjc1NGE3MDk1NzRjMzRkOThmYTgxMGU5ODZkNzk5NTFmNjAwNjNiMzVkMDQ4NWI4ZDU4IiwidGFnIjoiIn0=',
    Cookie:
      '_ga=GA1.1.374418307.1770982931; _fbp=fb.1.1770982931816.971926528132041940',
  };

  const response = http.post(url, payload, { headers });

  //console.log('Response body:', response.body);

  return response;
}