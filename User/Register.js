import http from 'k6/http';
import { sleep, check } from 'k6';
import { createReporthtml } from '../ReportHTML.js';

export const options = {
  vus: 5,
  iterations: 10,
};

export default function () {

    let timestamp = Date.now();
    let random = Math.floor(Math.random() * 100);
    let username = `user_${timestamp}_${random}`;
    let password = `pass_${timestamp}_${random}`;

    const payload = JSON.stringify({
        username: username,
        password: password
    });

    const params = {
    headers: {
      'Content-Type': 'application/json'
    }
    };

    let jelly = http.post('https://api.demoblaze.com/signup', payload, params);

    // Validasi response jelly
    check(jelly, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}

export function handleSummary(data) {
  return createReporthtml(data);
}