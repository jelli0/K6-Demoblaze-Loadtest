import http from 'k6/http';
import { sleep, check } from 'k6';
import { getHomepage } from '../Basic.js';


export const options = {
  vus: 10,      // Virtual Users
  maxDuration: 5, // durasi test
};

export default function () {
    // Generate username & password
    let timestamp = Date.now();
    let username = `user_${timestamp}`;
    let password = `pass_${timestamp}`;

    let payload = JSON.stringify({
        username: username,
        password: password
    });

    let jelly = http.post('https://api.demoblaze.com/signup', payload, {
        headers: { 'Content-Type': 'application/json' },
    });

    // Validasi response
    check(jelly, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}