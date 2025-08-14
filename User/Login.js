import http from 'k6/http';
import { sleep } from 'k6';
import { getHomepage, login} from '../Basic.js';

export let options = {
  vus: 10, // virtual users
  duration: '2s', // durasi test
};

export default function() {
    login();
}