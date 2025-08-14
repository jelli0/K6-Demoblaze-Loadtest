import http from 'k6/http';
import { sleep, check } from 'k6';
import { getHomepage } from '../Basic.js';


export const options = {
  vus: 5,     // Virtual Users
  iterations: 10,
};

export default function () {
    // Generate username & password
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

    // Validasi response
    check(jelly, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}