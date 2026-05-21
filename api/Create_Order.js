import http from 'k6/http';
//import { token } from './env.js';
//import { cookie } from './cookie.js';

function getToken(start = 1) {
  const num = start + ((__VU + __ITER) % 100000);
  return `LT${num}`;
}
export function Create_Order() {
  const token = getToken(1);
  const url = 'https://nexgencommerce.one.th/api/backend/api/create_order_b2b';

  const payload = JSON.stringify({
    utm_source_keyword: null,
    checkout_detail: [
      {
        seller_shop_id: 5,
        address: [
          {
            id: 53706,
            email: 'ping@mail.com',
            first_name: 'ทดสอบโหลด',
            last_name: 'การสร้างออเดอร์',
            detail: 'บ้านเลขที่ 123 ชั้นที่ - อาคาร - หมู่บ้าน - หมู่ที่ - ซอย - แยก - ถนน -',
            house_no: '123',
            room_no: '-',
            floor: '-',
            building_name: '-',
            moo_ban: '-',
            moo_no: '-',
            soi: '-',
            yaek: '-',
            street: '-',
            sub_district: 'คลองต้นไทร',
            district: 'คลองสาน',
            province: 'กรุงเทพมหานคร',
            zip_code: '10600',
            note_address: '',
            phone: '0682221111',
            phone_ext: '',
            status: 'Y',
          },
        ],
        product_free: [],
        coupon: [
          {
            id: 11995,
            seller_shop_id: 5,
            coupon_image: null,
            coupon_name: 'ส่วนลด 100 บาท',
            coupon_code: 'Test100',
            coupon_description: null,
            collect_startdate: '2024-11-30 00:00:00',
            collect_enddate: null,
            use_startdate: '2025-01-31 00:00:00',
            use_enddate: null,
            coupon_type: 'discount',
            quota: 1000,
            use_count: 1,
            user_cap: 1000,
            spend_minimum: 200,
            discount_amount: 100,
            raw_list: '["special_1"]',
            discount_type: 'baht',
            discount_maximum: null,
            status: 'active',
            deleted_at: null,
            hide: 0,
            generate_id: null,
            search: 1,
            created_by: 6,
            updated_by: 6,
            created_at: '2024-11-30 02:00:38',
            updated_at: '2026-04-17 16:00:00',
            allow_all_shops: 0,
            budget_limit: null,
            budget_used: '0.00',
            is_new_user_only: null,
            new_user_limit_unit: 'day',
            new_user_limit_value: null,
            new_user_start_date: null,
            new_user_end_date: null,
            coupon_name_eng: null,
            coupon_description_eng: null,
            new_user_group_key: null,
            product_list: '[]',
            coupon_id: 11995,
            coupon_for_all_product: true,
            list_seller_shop: [5],
            product_coupon: [],
            product_coupon_category: [],
            product_coupon_category_shop: [],
            raw_list_for_check_type: [],
            raw_list_category_platform: [],
            raw_list_category_shop: [],
            product_prepare: [
              {
                product_id: 819255,
                product_attribute_detail: {
                  product_attribute_id: 1731069,
                  attribute_priority_1: '2',
                  attribute_priority_2: null,
                  attribute_priority_1_en: '',
                  attribute_priority_2_en: '',
                  key_1_value: 'แบบ',
                  key_2_value: '',
                  key_1_value_en: null,
                  key_2_value_en: '',
                },
                revenue_vat: 300,
              },
            ],
            have_product_for_coupon: true,
            total_price_for_coupon: 0,
            total_price_for_coupon_v2: 0,
            real_discount_maximum: 0,
            price_for_cal_v2: 300,
            net_discount_v2: 100,
          },
        ],
        etax: 'No',
        invoice_id: '',
        point: 0,
        point_used: 0,
        required_invoice: 'no',
        role_user: 'ext_buyer',
        shipping_data: {
          tpl_name: 'ไปรษณีย์ไทย',
          courier_code: 'THAIPOST',
          businessType: 'THAIPOST',
          estimatePrice: 20,
          netEstimatePrice: 20,
          total_price: 20,
          price: 20,
          upCountry: false,
          weight: 500,
          weight_unit: 'g',
          estimate_shipping_date: 3,
          remote_area: 0,
          service_provider: 'THAIPOST',
          seller_shop_id: 5,
          media_path:
            'https://inet-s3-object-gw.inet.co.th/agrinno-prd-28627-e-pro-b2b-uat/shop/-3/pop_up202510031738080.webp',
          all_can_size_product: {
            weight: 0.5,
            width: 5,
            length: 5,
            height: 5,
          },
          estimate_shipping_date_text:
            'จะได้รับสินค้าภายในวันที่ 09 พฤษภาคม - 11 พฤษภาคม',
          cod: '1',
          insurance: '1',
        },
        time_pickup: 'NaN:NaN:00',
        total_point_receive: 20,
        type_shipping: 'online',
        remark_to_shop: '',
      },
    ],
    coupon_platform: [],
    inet_relation_ship: [],
    payment_method: 'QRCode',
  });

  const params = {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'th',
      Authorization: 'Bearer ' + token,
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      origin: 'https://nexgencommerce.one.th',
      pragma: 'no-cache',
      referer: 'https://nexgencommerce.one.th/checkoutExt',
      'x-xsrf-token':
        'eyJpdiI6IkNGMVJKb1lReUVSQmJkZmZIbERhTWc9PSIsInZhbHVlIjoiMzh0em1Qbnh3aFFDQ0x4QkdGZHBUM1J3SG0zU292azA0U0kySkZZejI4ekhDVU9pcFV3R3p4OUZcLytQZmFjUkpjTzdzRUhZdWVTdlJtU1dET3lIU0tnPT0iLCJtYWMiOiI2NWJhMDJiYjU1MTQ2NWQ1YjkxZmUzZjEwNTZmMjY1NTliY2EwYTg5NmI0YWYyNjJlN2M1M2Y5NTcwMTQ1NDk5In0=',
      Cookie: '_ga=GA1.1.919625322.1778060202; cf_clearance=pjfT4_HHGvlnJpF.XS5XGZapXJ1uEd7Y1f9bbhLTkeo-1778060203-1.2.1.1-lt.KiDwb4WC_LbbNjuIWRKdsRgYoFx5MoTxPX.Peith0a_7mMpFTUN7bwk_Lu4l_glXMM9QTOtl_i4mXps_xSdiBSf31G93DeB4lvNLSKh9Thcb8qBMqQo3pmmrRkKUQ89L4KyKZjFPpaGgTmj4AGu0cxSOm4624ZXtMkBEoOJKw5UISAvwlzg9o2Fv0XersmLsqvR067WPDQXSpErmXSFPAQTCKE7fnVHRN0z9lDwSKvUPsObORaIjsZarhR_bCt1Md08YQQw00zzxIFn5wgRg68knoRzRJ6OTW7Lvojbt7c1nA8pKdPqTpwDYcLuV6hc_QLG_rFx6KOKQTBWjNoA; _fbp=fb.1.1778060202655.339539809299917465; laravel_session=bPDQl49rLlkMHxWRhtHsaM7DQbY4TlIbu0y6VdeB; XSRF-TOKEN=eyJpdiI6IkNGMVJKb1lReUVSQmJkZmZIbERhTWc9PSIsInZhbHVlIjoiMzh0em1Qbnh3aFFDQ0x4QkdGZHBUM1J3SG0zU292azA0U0kySkZZejI4ekhDVU9pcFV3R3p4OUZcLytQZmFjUkpjTzdzRUhZdWVTdlJtU1dET3lIU0tnPT0iLCJtYWMiOiI2NWJhMDJiYjU1MTQ2NWQ1YjkxZmUzZjEwNTZmMjY1NTliY2EwYTg5NmI0YWYyNjJlN2M1M2Y5NTcwMTQ1NDk5In0%3D; onethsession=eyJpdiI6IjQwMFZFUW8wajIwSkRsaHRLb282Tnc9PSIsInZhbHVlIjoiUW5QZVNIaHpWdDl3R0o3V1J5cVdGM096RlJxQ2t4YW84Uk01a0RCSUhHajhaRGU5ZElNMzJ1dm5KSVp5SVJmblVSc01kVTVyVVhNYmhNTXBnTDZZYnc9PSIsIm1hYyI6ImY1YjVmZTRlNDRiYTI3MWJkM2M4NjkwMDY4NWFmYTExOTIxZTNlY2ViYmVjYjcxNGE3Nzg1YmVhYjdjNjVkZjkifQ%3D%3D; _ga_7NQ65YQ2S2=GS2.1.s1778060201$o1$g1$t1778061993$j60$l0$h825319773; _ga_LEB4GQBSMW=GS2.1.s1778060202$o1$g1$t1778062012$j45$l0$h0',
    },
  };

  const response = http.post(url, payload, params);

  //console.log('Response body:', response.body);

  return response;
}