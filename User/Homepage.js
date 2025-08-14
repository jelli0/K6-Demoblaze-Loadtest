import http from 'k6/http';
import { sleep } from 'k6';
import { getHomepage, login} from '../Basic.js';

export const options = {
  scenarios: {
    fixed_iterations: {
      executor: 'shared-iterations',
      vus: 10, // virtual users
      iterations: 500, // jumlah req iterasi
      maxDuration: '5m', // durasi test
    },
  },
}

export default function() {
    login();
}
