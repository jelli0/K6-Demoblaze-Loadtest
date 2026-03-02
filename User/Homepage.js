import { getHomepage, login} from '../Basic.js';
import { createReporthtml } from '../ReportHTML.js';

export const options = {
  scenarios: {
    fixed_iterations: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 500,
      maxDuration: '10s',
    },
  },
}

export default function() {
    login();
}

export function handleSummary(data) {
  return createReporthtml(data);
}