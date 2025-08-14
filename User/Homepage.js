import http from 'k6/http';
import { sleep } from 'k6';
import { getHomepage, login} from '../Basic.js';

export const options = {
  scenarios: {
    fixed_iterations: {
      executor: 'shared-iterations',
      vus: 10,
    //   iterations: 500,
      maxDuration: '5m',
    },
  },
}

export default function() {
    login();
}
