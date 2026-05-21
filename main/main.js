//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';
import { หน้าแรก_FlashSale } from '../api/หน้าแรก_FlashSale.js';
import { หน้าแรก_สินค้าสำหรับคุณ } from '../api/หน้าแรก_สินค้าสำหรับคุณ.js';
import { Search } from '../api/Search.js';
import { รายละเอียดสินค้า } from '../api/รายละเอียดสินค้า.js';
import { เพิ่มสินค้า } from '../api/เพิ่มสินค้า.js';
import { รายละเอียดสินค้าในตะดร้า } from '../api/รายละเอียดสินค้าในตะดร้า.js';
import { Checkout_ตะกร้า } from '../api/Checkout_ตะกร้า.js';
import { Checkstock } from '../api/Checkstock.js';
import { Create_Order } from '../api/Create_Order.js';
import { health_check } from '../api/health_check.js';
import { backend_2 } from '../api/backend_2.js';
import { backend_4 } from '../api/backend_4.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = หน้าแรก_FlashSale()  //1
  //response = หน้าแรก_สินค้าสำหรับคุณ()  //2
  //response = Search()  //3
  //response = รายละเอียดสินค้า()  //4
  //response = เพิ่มสินค้า()  //5
  //response = Checkout_ตะกร้า()  //6
  //response = รายละเอียดสินค้าในตะดร้า()  //7
  //response = Checkstock()  //8
  //response = Create_Order()  //9
  //response = health_check()
  //response = backend_2()
  //response = backend_4()


  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: false,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };