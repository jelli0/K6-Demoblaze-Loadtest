import http from 'k6/http';
import { sleep, check } from 'k6';

export function getHomepage() {
  http.get('https://demoblaze.com/');
  sleep(1);
}

export function login() {
  let jelly = http.post('https://api.demoblaze.com/login','{"username" : "jili12345", "password" : "12345"}', {
  headers: { 'Content-Type': 'application/json' },
  });
  check(jelly, { 'login success': (r) => r.status === 200 });
  sleep(1);
}