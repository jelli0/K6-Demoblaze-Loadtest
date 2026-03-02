import { login} from '../Basic.js';
import { createReporthtml } from '../ReportHTML.js';

export let options = {
  vus: 20,
  duration: '2s',
};

export default function() {
    login();
}

export function handleSummary(data) {
  return createReporthtml(data);
}
