import ReactDOM from 'react-dom';

// mdbreact package
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFlag,
  faRecycle,
  faDharmachakra,
  faFile,
  faCogs,
  faArchive,
} from '@fortawesome/free-solid-svg-icons';

import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

library.add(faRecycle, faDharmachakra, faFlag, faFile, faCogs, faArchive);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
