// import http from 'k6/http';
// import { sleep } from 'k6';
import { login} from '../Basic.js';

export let options = {
  vus: 10,
  duration: '2s',
};

export default function() {
    login();
}